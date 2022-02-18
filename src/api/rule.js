import request from '@/utils/request.js'

// 获取计件工资计算规则
export function get_rules(data) {
  return request({
    url: '/rule',
    method: 'get',
    params: {...data}
  })
}

// 创建计件工资计算规则
export function create_rule(data) {
  return request({
    url: '/rule',
    method: 'put',
    data: data
  })
}

// 修改计件工资计算规则
export function modify_rule(data) {
  return request({
    url: '/rule',
    method: 'post',
    data: data
  })
}


// 删除计件工资计算规则
export function delete_rule(data) {
  return request({
    url: '/rule',
    method: 'delete',
    data: data
  })
}