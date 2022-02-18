<template>
  <div class="grid grid-cols-24 gap-4">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item col-span-4">7</div>
    <div class="item">8</div>
    <div class="item">9</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
}
// .gap-4 {
//   gap: 1rem;
// }
.item {
  background-color: salmon;
  color: white;
}
</style>