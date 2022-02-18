import { login, logout, getInfo } from '@/api/user.js'
import { getToken, setToken, removeToken } from '@/utils/token.js'
import { resetRouter } from '@/router'

const state = {
  name: '',
  token: getToken(),
  premissions: []
}

const mutations = {
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_PERMISSIONS: (state, permissions) => {
    state.permissions = permissions
  }
}

const actions = {
  // 用户登录
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password.trim() })
        .then((response) => {
          const { access_token } = response.data
          console.log('获取的token', access_token)
          commit('SET_TOKEN', access_token)
          setToken(access_token)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  // 获取用户信息
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token)
        .then((response) => {
          const data = response.data
          if (!data) {
            reject('验证失败，请重新登录')
          }
          const { name, permissions } = data
          commit('SET_NAME', name)
          commit('SET_PERMISSIONS', permissions)
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // 退出登录
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      logout()
        .then(() => {
          commit('SET_PERMISSIONS', [])
          commit('SET_NAME', '')
          removeToken()
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      commit('SET_PERMISSIONS', [])
      commit('SET_NAME', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
