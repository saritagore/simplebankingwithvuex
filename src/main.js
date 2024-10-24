import { createApp } from 'vue'
import App from './App.vue';
import  store from './store/index.js';
import BaseBUtton from './components/BaseBUtton.vue';
const app=createApp(App);
app.component('base-button',BaseBUtton)
app.use(store);
app.mount('#app');
