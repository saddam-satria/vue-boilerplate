import { defineStore } from 'pinia';

export const welcomeStore = defineStore('welcome', {
  state: () => ({ message: '' }),
  getters: {
    getMessage: (state) => {
      return state.message;
    },
  },
  actions: {
    setMessage(message: string) {
      this.message = message;
    },
  },
});
