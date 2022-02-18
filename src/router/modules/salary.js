import Layout from '@/layout/index.vue'

const SalaryRouter = {
  path: '/salary',
  component: Layout,
  redirect: '/salary/count',
  name: 'Salary',
  meta: {
    title: '总薪酬管理',
    permissions: ['general'],
    icon: 'el-icon-money'
  },
  children: [
    {
      path: 'salary_count',
      component: () => import('@/views/salary/count.vue'),
      name: 'Count',
      meta: {
        title: '工资计发',
        permissions: []
      }
    },
    {
      path: 'salary_report',
      component: () => import('@/views/salary/report.vue'),
      name: 'Report',
      meta: {
        title: '工资报表',
        permissions: ['general']
      }
    },
    {
      path: 'salary_query',
      component: () => import('@/views/salary/query.vue'),
      name: 'Query',
      meta: {
        title: '工资统计查询',
        permissions: []
      }
    }
  ]
}
export default SalaryRouter
