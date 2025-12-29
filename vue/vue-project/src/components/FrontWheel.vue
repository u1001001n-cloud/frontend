<script setup>
  import Tire from './Tire.vue';
</script>

<template>
  <div class="front-wheel">
    <span>FRONT WHEEL</span>
    <Tire />
  </div>
</template>

<style scoped>
  .front-wheel{
    border: 1px solid black;
    border-radius: 50%;
    display: flex; /* 부모가 자식을 컨트롤하기 위해 flex를 적용 */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
  }
</style>