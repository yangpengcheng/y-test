import request from '@/utils/request.js'

// 获取工资信息
export function get_salarys(data) {
  return request({
    url: '/salary',
    method: 'get',
    params: {...data}
  })
}

// 工资核算
export function cal_salary(data) {
  return request({
    url: '/salary',
    method: 'post',
    data: data
  })
}

// 获取工资信息
export function get_salary_query(data) {
  return request({
    url: '/salary/query',
    method: 'get',
    params: {...data}
  })
}

// 删除工资条
export function delete_salary(data) {
  return request({
    url: '/salary',
    method: 'delete',
    data: data
  })
}