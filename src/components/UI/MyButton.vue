<template>
  <button class="button-white">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'button-white'
}
</script>

<style scoped>
.button-white {
  padding: 16px 17px;
  background: #fff;
  color: #7481FF;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  border: 1px solid #7481FF;
}
.button-white:hover {
  color: #6270FF;
  border: 1px solid #6270FF;
  cursor: pointer;
}
</style>
