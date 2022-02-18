import { createStore } from 'vuex'
import user from './modules/user.js'
import permission from './modules/permission.js'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user: user,
    permission: permission
  }
})
