import request from '@/utils/request.js'

// 获取部门信息
export function get_depts(data) {
  return request({
    url: '/dept',
    method: 'get',
    params: {...data}
  })
}

// 创建部门
export function create_dept(data) {
  return request({
    url: '/dept',
    method: 'put',
    data: data
  })
}

// 修改部门信息
export function modify_dept(data) {
  return request({
    url: '/dept',
    method: 'post',
    data: data
  })
}


// 删除部门信息
export function delete_dept(data) {
  return request({
    url: '/dept',
    method: 'delete',
    data: data
  })
}

