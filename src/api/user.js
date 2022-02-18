import request from '@/utils/request.js'

export function login(data) {
  console.log('登录')
  var form = new FormData()
  form.append("username", data.username)
  form.append("password", data.password)
  return request({
    url: '/auth/login',
    method: 'post',
    data: form
  })
}

export function getInfo(token) {
  return request({
    url: '/auth/get_info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/auth/logout',
    method: 'post'
  })
}


export function modify_password(data) {
  return request({
    url: '/password',
    method: 'post',
    data: data
  })
}