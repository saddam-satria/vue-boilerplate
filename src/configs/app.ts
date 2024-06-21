import App from '@/app.vue';
import { createApp } from 'vue';
import router from './route';
import { OhVueIcon } from 'oh-vue-icons';
import { createPinia } from 'pinia';

export default function () {
  const pinia = createPinia();
  return createApp(App).use(pinia).use(router).component('v-icon', OhVueIcon).mount('#app');
}
