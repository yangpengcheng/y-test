import { createRouter, createWebHistory } from 'vue-router'

// import BaseInfoRouter from './modules/base_info.js'
// import WageRouter from './modules/wage.js'
// import AttendanceRouter from './modules/attendance.js'
// import SalaryRouter from './modules/salary.js'
import ManageRouter from './modules/manage.js'

export const constantRoutes = [
  // {
  //   path: '/',
  //   redirect: 'user_manage',
  //   name: 'Index',
  //   component: () => import('@/layout/index.vue'),
  //   meta: {
  //     title: 'index'
  //   },
  //   children: [
  //     {
  //       path: 'user_manage',
  //       component: () => import('@/views/manage/UserManage.vue'),
  //       name: 'UserManage',
  //       meta: {
  //         title: '用户管理',
  //         permissions: ['general']
  //       }
  //     }
  //   ]
  // },
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '主页',
      hide: true
    },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      hide: true
    },
    component: () => import('@/views/auth/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  scrollBehavior: () => ({ top: 0 })
})

export const asyncRoutes = [
  // BaseInfoRouter,
  // WageRouter,
  // AttendanceRouter,
  // SalaryRouter,
  ManageRouter
]

export const resetRouter = () => {
  router.options = createRouter({
    history: createWebHistory(),
    routes: constantRoutes,
    scrollBehavior: () => ({ top: 0 })
  }).options
}

export default router
