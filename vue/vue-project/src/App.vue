<script setup>
import router from './router';


</script>

<template>
  <div> <!-- 템플릿 입장에선 자식이 하나만 있어야 함(특히 리엑트가 여전히 이럼) -->
    <nav>
      <router-link to="/component">컴포넌트</router-link>
      <router-link to="/page98">Page98</router-link>
      <router-link to="/page103">Page103</router-link>
      <router-link to="/mission01">Mission01</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>

</style>