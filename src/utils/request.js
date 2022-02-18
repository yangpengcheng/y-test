import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getToken } from '@/utils/token.js'
import store from '@/store/index'
// 创建 axios 实例
const instance = axios.create({
  baseURL: '/api',
  timeout: 3000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    if (store.state.user.token) {
      config.headers['Authorization'] = 'Bearer ' + getToken()
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    const res = response.data
    if (response.status === 200) {
      ElMessage({
        type: res.err_msg ? 'error' : 'success',
        center: true,
        message: res.err_msg || res.msg || '请求成功',
        duration: 1000
      })
      return response
    }
  },
  (error) => {
    console.log('error.response:', error.response)
    console.log('error.request:', error.request)
    if (error.response) {
      // 发出了请求，并且服务器响应了状态代码，该状态代码超出了2xx的范围
      ElMessage({
        type: 'error',
        center: true,
        showClose: true,
        message:
          error.response.data.detail || error.response.statusText || '响应错误',
        duration: 1000
      })
    } else if (error.request) {
      // 发出请求未收到响应
      ElMessage({
        type: 'error',
        center: true,
        showClose: true,
        message: error.request.statusText || '请求错误',
        duration: 1000
      })
    } else {
      ElMessage({
        type: 'error',
        center: true,
        showClose: true,
        message: '网络错误',
        duration: 1000
      })
    }
  }
)

export default instance
