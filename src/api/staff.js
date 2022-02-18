import request from '@/utils/request.js'

// 获取员工信息
export function get_staffs(data) {
  return request({
    url: '/staff',
    method: 'get',
    params: {...data}
  })
}

// 新建员工信息
export function create_staff(data) {
  return request({
    url: '/staff',
    method: 'put',
    data: data
  })
}

// 修改员工信息
export function modify_staff(data) {
  return request({
    url: '/staff',
    method: 'post',
    data: data
  })
}


// 删除员工信息
export function delete_staff(data) {
  return request({
    url: '/staff',
    method: 'delete',
    data: data
  })
}