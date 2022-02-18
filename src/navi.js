import router from './router'
import store from './store'
import { getPageTitle } from '@/utils/util'
import { getToken } from '@/utils/token'

// 无需验证的路由
const noAuthPath = ['/login','/']

router.beforeEach(async(to) =>{
  // 获取文档标题
  document.title = getPageTitle(to.meta.title)
  // 确定用户是否已登录
  const hasToken = getToken()
  if(hasToken){
    if(to.path === '/login'){
      // 如果用户已登录,重定向到主页
      return '/'
    }else{
      const permissions = store.state.user.permissions
      const userPermissions = permissions && permissions.length > 0
      if(userPermissions){
        return true
      }else{
        try{
          // 获取用户信息
          const { permissions } = await store.dispatch('user/getInfo')
          // 根据用户权限获取可以访问的路由
          const accessRoutes = await store.dispatch('permission/generateRoutes', permissions)
          console.log('可访问路由',accessRoutes,router.getRoutes())
          // 动态添加可访问路由
          accessRoutes.map((item)=>{
            router.addRoute(item)
          })
          // console.log(router.getRoutes())
          // hack方法以确保addRoutes是完整的
          //设置replace：true，因此导航不会留下历史记录
          return ({ ...to, replace: true })
        }catch(error){
          await store.dispatch('user/resetToken')
          console.log('获取用户信息失败',error)
          return ({ path: '/login',query:{redirect:`${to.path}`}}) // history 模式必须使用下面这种方式，下同
        }
      }// end if(userPermissions)
    } // end if(_to.path === '/login')
  }else{
    // 无令牌,无需验证的路由，不拦截
    if(noAuthPath.indexOf(to.path) !== -1){
      return true
    }else{
      // 重定向到login页面，登录成功后跳转到对应页面或404页面
      return ({ path: '/login',query:{redirect:`${to.path}`}})
    }
  }
})