import http from '@/configs/http';
import { ref } from 'vue';

export default function getTodos() {
  const loading = ref<boolean>(true);
  const errorMessage = ref<string>('');
  const data = ref([]);

  const action = async () => {
    try {
      const response = await http.get('todos');
      data.value = response.data;
    } catch (error: any) {
      errorMessage.value = error.message;
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    errorMessage,
    data,
    action,
  };
}
