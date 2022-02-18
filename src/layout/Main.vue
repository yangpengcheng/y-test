<template>
  <div>
    <div class="view">
      <router-view v-slot="{Component}">
        <!-- <keep-alive> -->
          <component :is="Component"/>
        <!-- </keep-alive> -->
      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  setup(){
    return{
    }
  }
}
</script>

<style scoped>
.view{
  padding: 10px;
}
</style>