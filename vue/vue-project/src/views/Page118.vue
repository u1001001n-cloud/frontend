<script setup>
import { computed, reactive } from 'vue';

const state = reactive({
  mvpId: 7,
  players: [ //배열의 주소값이 state.players에 저장됨
    { id: 7, name: 'John Doe' }
    , { id: 9, name: 'Jane Lee' }
    , { id: 12, name: 'James Park' }
  ]
});

const getMvpName = () => {
  /*
  if(state.mvpId) {
    const players = state.players.find(item => item.id === state.mvpId);
    if(players) {
      return players.name; // 리턴값 players.name; 이 있어서 리턴함수
    }
  }
  return '없음'; // '없음'도 리턴해서 리턴함수
  */
  console.log('call getMvpName');
  return state.players.find(item => item.id === state.mvpId)?.name || '없음';
}

const computedMvpName = computed( () => {
  console.log('call computedMvpName');
  return state.players.find(item => item.id === state.mvpId)?.name || '없음';
} );

const increseMvpId = () => ++state.mvpId;

</script>

<template>
<h3>Page118</h3>
<div>
  <h1>오늘의 MVP</h1>
  <div>
    <template v-if="state.mvpId">
      {{ state.players.find( item => item.id === state.mvpId)?.name || '없음1' }}
      <!-- 아규먼트 하나만 보냄 : 콜백함수 한개.(함수 주소값) -->
      <!-- -- find()도 자주 쓰이는 메소드. 뒤에 있는 것중 원하는 요소 하나만 잡는 함수 -->
      <!-- 뒤에 .이 붙기 때문에 리턴 함수(.name에서 [.]이 (객체 주소)값을 전달함) -->
      <!-- [ OR(||) ]이 있는 것만으로도 이 함수가 어떤 값을 리턴할 것을 암시함 -->
      <!-- ?.name에서 ?를 주는 것의 의미: undifiend는 객체가 아님. undifiend가 뜨면 어떻게 할 건지 알려주는 역할(에러 안 터지게 해줌)-->
    </template>
    <template v-else>없음2</template>
    <hr>
    <!-- 함수는 호출할 때마다 함수 안의 코드가 실행이 된다. -->
    <div>{{ getMvpName() }}</div>
    <div>{{ getMvpName() }}</div>
    <div>{{ getMvpName() }}</div>
    <hr>
    <!-- 컴퓨티드는 보낸 콜백함수가 딱 한번만 실행 되고 결과가 return -->
    <div>{{ computedMvpName }}</div>
    <div>{{ computedMvpName }}</div>
    <div>{{ computedMvpName }}</div>
  </div>
  <hr>
  <!-- 미니 미션 : 버튼을 클릭하면 mvpId가 1씩 올라가게 해주세요. -->
  <div>{{ state.mvpId }}</div>
  <button @click="increseMvpId">mvp Id 증가</button>
</div>
</template>

<style scoped>

</style>