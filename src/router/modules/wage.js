import Layout from '@/layout/index.vue'

const WageRouter = {
  path: '/wage',
  component: Layout,
  redirect: '/wage/rule',
  name: 'Wage',
  meta: {
    title: '计件工资管理',
    permissions: [],
    icon: 'el-icon-files'
  },
  children: [
    {
      path: 'wage_rule',
      component: () => import('@/views/wage/Rule.vue'),
      name: 'Rule',
      meta: {
        title: '计件工资计算规则',
        permissions: []
      }
    },
    {
      path: 'wage_accounting',
      component: () => import('@/views/wage/Accounting.vue'),
      name: 'Accounting',
      meta: {
        title: '计件工资核算',
        permissions: []
      }
    },
    {
      path: 'wage_statistics',
      component: () => import('@/views/wage/Statistics.vue'),
      name: 'Statistics',
      meta: {
        title: '计件工资统计查询',
        permissions: []
      }
    }
  ]
}
export default WageRouter
