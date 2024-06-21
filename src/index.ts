import { createApp } from 'vue';
import '@/style.css';
import App from '@/app.vue';
import router from '@/configs/route';

createApp(App).use(router).mount('#app');
