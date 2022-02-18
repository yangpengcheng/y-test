<template>
  <div class="main">
    <div class="top">
      <h2
        class="font-sans text-3xl text-center text-white align-middle"
      >
        欢迎登录
      </h2>
      <h3 class="font-sans text-2xl text-center text-white">
        {{ getTitle() }}
      </h3>
    </div>
    <div class="login border">
      <div class="field">
        <el-input v-model="username" />
      </div>
      <div class="field">
        <el-input v-model="password" show-password />
      </div>
      <div class="field">
        <el-button @click.prevent="handleLogin" type="primary">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { getTitle } from '@/utils/util'
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const router_query = computed(() => route.query.redirect)
    const UserInfo = reactive({
      username: '',
      password: ''
    })
    const handleLogin = () => {
      if (UserInfo.username !== '' && UserInfo.password !== '') {
        store
          .dispatch('user/login', UserInfo)
          .then(() => {
            Object.keys(UserInfo).forEach((key) => {
              UserInfo[key] = ''
            })
            router.push({ path: router_query.value || '/' })
          })
          .catch((err) => {
            console.log('error', err)
          })
      }
    }
    return {
      ...toRefs(UserInfo),
      handleLogin,
      getTitle
    }
  }
}
</script>

<style scoped>
.main {
  background-color: #fff;
  width: 100%;
  height: 100vh;
}
.top {
  background-color: #409eff;
  height: 50%;
}
h2 {
  padding: 20vh 0 25px;
}
.login {
  max-width: 400px;
  margin: auto;
  background-color: white;
  position: relative;
  top: -10vh;
  padding: 30px;
}
.login .y-input {
  display: block;
  width: 100%;
  border: none;
  outline: none;
  color: gray;
  font-size: 1rem;
}
.login button {
  display: block;
  width: 100%;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 5px;
  padding: 10px;
}
.login .field {
  margin-top: 30px;
  position: relative;
}
</style>