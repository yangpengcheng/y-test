import Layout from '@/layout/index.vue'

const AttendanceRouter = {
  path: '/attendance',
  component: Layout,
  redirect: '/attendance/att_statistics',
  name: 'Attendance',
  meta: {
    title: '考勤管理',
    permissions: ['general'],
    icon: 'el-icon-user'
  },
  children: [
    {
      path: 'att_statistics',
      component: () => import('@/views/attendance/Att_statistics.vue'),
      name: 'Att_statistics',
      meta: {
        title: '出勤信息统计',
        permissions: ['general']
      }
    },
    {
      path: 'att_calculation',
      component: () => import('@/views/attendance/Att_calculation.vue'),
      name: 'Att_calculation',
      meta: {
        title: '考勤奖惩计算',
        permissions: []
      }
    },
    {
      path: 'att_query',
      component: () => import('@/views/attendance/Att_query.vue'),
      name: 'Att_query',
      meta: {
        title: '考勤信息统计查询',
        permissions: []
      }
    }
  ]
}
export default AttendanceRouter
