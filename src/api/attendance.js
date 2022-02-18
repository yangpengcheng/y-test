import request from '@/utils/request.js'

// 获取考勤信息
export function get_attendances(data) {
  return request({
    url: '/attendance',
    method: 'get',
    params: {...data}
  })
}

// 出勤
export function create_attendance(data) {
  return request({
    url: '/attendance',
    method: 'put',
    data: data
  })
}

// 退勤
export function modify_attendance(data) {
  return request({
    url: '/attendance',
    method: 'post',
    data: data
  })
}


// 出差
export function business_trip() {
  return request({
    url: '/attendance/trip',
    method: 'put',
  })
}


// 补录
export function make_attendance(data) {
  return request({
    url: '/attendance/make',
    method: 'put',
    data: data
  })
}

// 删除部门信息
export function delete_attendance(data) {
  return request({
    url: '/attendance',
    method: 'delete',
    data: data
  })
}




// 获取考勤统计查询
export function get_attendance_query(data) {
  return request({
    url: '/attendance/query',
    method: 'get',
    params: {...data}
  })
}