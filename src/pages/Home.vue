<script setup lang="ts">
import Welcome from '@/components/welcome.vue';
import { welcomeStore } from '@/stores/welcome';

const welcome = welcomeStore();

const setMessage = (message: string) => {
  welcome.setMessage(message);
};
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>

    <button @click="setMessage('hello')">change state</button>
    <RouterLink v-for="item in [1, 2]" :to="{ name: 'About', params: { id: item } }">About</RouterLink>
  </div>
  <Welcome msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
