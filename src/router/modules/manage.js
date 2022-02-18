import Layout from '@/layout/index.vue'

const manageRouter = {
  path: '/manage',
  component: Layout,
  redirect: '/manage/user_manage',
  name: 'Manage',
  meta: {
    title: '系统管理',
    permissions: ['general'],
    icon: 'el-icon-setting'
  },
  children: [
    {
      path: 'user_manage',
      component: () => import('@/views/manage/User.vue'),
      name: 'UserManage',
      meta: {
        title: '用户管理',
        permissions: ['general']
      }
    }
  ]
}
export default manageRouter
