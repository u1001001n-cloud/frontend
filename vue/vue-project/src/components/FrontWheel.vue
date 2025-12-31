<script setup>
  import Tire from './Tire.vue';
  import { useCounterStore } from '@/stores/counter';
  const page = 'history';

  //counterStore에는 { count, doubleCount, increment } 객체 주소값이 넘어온다.
  const counterStore = useCounterStore();
</script>

<template>
  <div class="front-wheel">
    <span :id="page">FRONT WHEEL</span>
    <tire color="red" />
    <!-- id등에 :(콜론)이 붙으면 그냥 아이디 이름값이 아니라 저장된 속성, 변수, 상수 값을 부여하게 됨. (여기에선 script에 있는 const-상수-의 history값) -->
    <div>TIMES: {{ counterStore.count }}</div>
    <button @click="counterStore.increment">회전</button>
    <button @click="counterStore.outcrement">역회전</button>
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