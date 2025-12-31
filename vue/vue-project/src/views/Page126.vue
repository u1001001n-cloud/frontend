<script setup>
import { onMounted, reactive } from 'vue'; //{ 함수, 변수, 상수 import받고 싶을 때 }
import axios from 'axios'; //보통은 객체 주소값 return

const state = reactive({
    imgList: []
})

onMounted(() => {
    console.log('onMounted');
    axios.get('https://picsum.photos/v2/list') // 객체주소값 받음. (request : 요청)
            .then( res => { //res에 promise 객체가 넘어오기 때문에 .then이 가능하다. (response : 응답)
                state.imgList = res.data
                console.log(res.data);
            } );
});

const changeSizeUrl = item => {
  const width = parseInt(item.width * 0.1);
  const height = parseInt(item.height * 0.1);
  return `https://picsum.photos/id/${item.id}/${width}/${height}`;
}
</script>

<template>
  <!-- 라이프사이클 훅(hook) : birth > >> death -->
<h3>Page126</h3>
<!-- state.imgList에 있는 자료로 img를 화면에 뿌려주세요. 
src로 쓸 데이터는 각 객체의 download_url 속성에 있습니다. -->

<!-- <div>
  <img v-for="item in state.imgList" :src="item.download_url" alt="author">
  <div>author</div>
</div> -->
<div v-for="item in state.imgList" :key="item.id">
  <img :src="changeSizeUrl(item)" :alt="item.author">
  <div>{{ item.author }}</div>
</div>
</template>

<style scoped>

</style>