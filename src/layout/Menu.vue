<template>
  <!-- <u-menu :menuData="routes" @select="select"></u-menu> -->
  <div>菜单</div>
</template>
<script>
import {useRouter} from 'vue-router'
// import UMenu from '@/components/Menu.vue'
export default {
  name: 'Menu',
  emits: ['select'],
  // components:{
  //   UMenu
  // },
  setup(){
    const router = useRouter()   
    const routes = router.getRoutes().filter((item)=>item.path != '/' && item.redirect)
    const select = (_, indexPath) =>{
      router.push(indexPath.join('/'))
    }
    return {
      routes,
      select
    }
  }
}
</script>
