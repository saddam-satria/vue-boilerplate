<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue';
import { addIcons } from 'oh-vue-icons';
import { BiMusicPlayer } from 'oh-vue-icons/icons';
import { welcomeStore } from '@/stores/welcome';

addIcons(BiMusicPlayer);

defineProps<{ msg: string }>();
const count = ref(0);

const message = welcomeStore();

onMounted(() => {
  message.setMessage('saddam satria');
});

watch(count, (newMessage, oldMessage) => {
  if (newMessage !== oldMessage) {
    console.log(newMessage, oldMessage);
  }
});

const doubleCount = computed(() => count.value * 2);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ doubleCount }}</button>
  </div>

  <v-icon name="bi-music-player" />
  <span class="capitalize">Bun VUE Boilerplate by {{ message.message }}</span>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
