<script setup>
  import Tire from './Tire.vue';
  const page = 'history';
</script>

<template>
  <div class="front-wheel">
    <span :id="page">FRONT WHEEL</span>
    <tire color="blue" />
    <!-- id등에 :(콜론)이 붙으면 그냥 아이디 이름값이 아니라 저장된 속성, 변수, 상수 값을 부여하게 됨. (여기에선 script에 있는 const-상수-의 history값) -->
  </div>
</template>

<style scoped>
  #history { text-decoration: underline; }
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