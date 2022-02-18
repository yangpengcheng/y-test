<template>
  <div class="layout">
    <nav-bar/>
    <div class="container">
      <y-menu class="menu" ></y-menu>
      <y-main class="main"></y-main>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import YMenu from './Menu.vue'
import YMain from './Main.vue'
export default {
  components: {
    NavBar,
    YMenu,
    YMain
  },
}
</script>
<style scoped>
.layout{
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
}
.container {
  display: flex;
  display: inline-flex;
  flex-direction: row;
  flex-grow: 1;
}
.menu{
  width: 200px;
}
.main{
  flex-grow: 1;
}
</style>