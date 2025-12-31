<script setup>
let loading = false;

const parent = ['fruits', 'abc'];
const child = 'item';
/*
class 바인딩과 배열의 조합은 배열의 아이템이 클래스에 무조건 추가가 되지만
class 바인딩과 객체의 조합은 객체의 속성마다 클레스에 추가할지, 무시할지 결정할 수 있다.
속성명: boolean (속성명을 클래스값으로 false면 무시, true면 추가)
*/

const visible = { fruit: true, abc: true };
const hidden = { fruit: false, abc: false };

const rect = {
  backgroundColor: 'red',
  width: '200px',
  height: '100px'
  // 카멜 네이밍(css에선 케밥)
  // vue에선 파스칼. 클래스명은 케밥. & 파스칼로 적은것도 케밥으로 연결해도 연결된다는 약속이 되어있음.
  // vue에선 class를 쓸 수 있고 리엑트에선 class가 예약어로 있기 때문에 className이라고 씀.
}
</script>

<template>
  <h1>Page98.vue</h1>
  <input type="text" placeholder="아이디" :readonly="loading">
  <input type="password" placeholder="비밀번호" :readonly="loading">
  <button :disabled="loading">로그인</button>
  <hr>
  <ul :class="parent" class="fruit">
    <li :class="child">사과</li>
    <li :class="child">바나나</li>
    <li :class="child">딸기</li>
    <li :class="child">배</li>
  </ul>
  <hr>
  <div :class="visible">사과</div>
  <div :class="hidden">오이</div>
  <div :class="{fruit: true}">배</div>
  <hr>
  <div :style="rect"></div>
</template>

<style scoped>
.fruit { color: red; }
</style>