<template>
  <div class="nav">
    <div class="left flex">
      <el-link :underline="false" style="color: white">
        {{ getTitle() }}
      </el-link>
    </div>
    <div class="middle flex"></div>
    <div class="right flex">
      <el-button @click="handelLogout">退出登录</el-button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { getTitle } from '@/utils/util'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const router_query = computed(() => route.path)
    const handelLogout = () => {
      store
        .dispatch('user/logout')
        .then(() => {
          router.push({
            path: '/login',
            query: { redirect: `${router_query.value}` }
          })
          location.reload()
        })
        .catch((error) => {
          console.log(error)
        })
    }
    return {
      handelLogout,
      getTitle
    }
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  display: inline-flex;
  flex-direction: row;
  display: inline-flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  height: 40px;
  padding: 0 10px;
  background-color: #409eff;
}
.middle {
  flex-grow: 1;
  justify-content: flex-start;
}
.left {
  width: 200px;
  justify-content: flex-start;
}
.right {
  flex-grow: 1;
  justify-content: flex-end;
}
.flex {
  display: flex;
  display: inline-flex;
  flex-direction: row;
  padding: 5px;
  align-content: center;
}
</style>