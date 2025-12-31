<script setup>
let loading = false;

const fruits = [ 'apple', 'banana', 'pear' ];
</script>
<!-- [ 조건 디렉티브 ] -->
<template>
  <h3>Page103 답답하네 답답해</h3>
  <!-- v-if 디렉티브 -->
  <template v-if="loading">로딩 중</template>
  <!-- v-if면 false인 값은 css와 무관하게 아예 화면에서 빠져버린다.(DOM에서 완전히 제거됨.) 표현식이 true일 때만 엘리먼트 렌더링. -->
  <div v-else>로딩 완료</div>
  <div>{{ loading ? '로딩 중' : '로딩 완료' }}</div>
  <hr>
  <div v-show="loading">show 로딩 중</div>
  <div v-show="!loading">show 로딩 완료</div>
  <!-- v-show에선 v-if와 달리 값이 false인 경우에도 html요소가 소스코드 상에 출력된다. 그래서 display: none; 라는 css속성을 적용해서 숨긴다. 특수 태그 template를 쓰면 true값도 공간 차지는 하고 화면에 보이진 않는다. -->
  <hr>
  <!-- v-for 사용할 때 주의사항 : 항상 key 속성을 줘야하며 유일값이어야 한다. -->
  <div v-for="(item, idx) in fruits" :key="idx">{{idx + 1}}. {{ item }}</div>
  <!-- item, idx는 그냥 배열 안 요소(대부분은 객체)의 이름이라서 꼭 item이나 idx라고 지을 필요 없고 마음대로 지으면 된다. 유일값만 주면 됨. -->
</template>

<style scoped>

</style>