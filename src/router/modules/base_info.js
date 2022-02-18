import Layout from '@/layout/index.vue'

const BaseInfoRouter = {
  path: '/base_info',
  component: Layout,
  redirect: '/base_info/staff',
  name: 'BaseInfo',
  meta: {
    title: '基本信息管理',
    permissions: [],
    icon: 'el-icon-collection-tag'
  },
  children: [
    {
      path: 'staff',
      component: () => import('@/views/base_info/Staff.vue'),
      name: 'Staff',
      meta: {
        title: '员工基本信息管理',
        permissions: []
      }
    },
    {
      path: 'dept',
      component: () => import('@/views/base_info/Dept.vue'),
      name: 'Dept',
      meta: {
        title: '部门信息管理',
        permissions: []
      }
    }
  ]
}
export default BaseInfoRouter
