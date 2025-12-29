<script setup>
const students = [
  { name: '수영', present: true },
  { name: '준하', present: false },
  { name: '가은', present: true },
  { name: '수빈', present: true },
  { name: '예림', present: false }
];
</script>

<template>
<h3>Mission01.vue</h3>
<!-- v-for로 div로 감싸진 학생이름이 출력되게 해주세요. -->
<div v-for="(item, idx) in students" :key="idx">{{ item.name }} {{ item.present ? '출석' : null }}</div>
<!-- present값이 true면 '출석' 표시 -->
</template>

<style scoped>

</style>