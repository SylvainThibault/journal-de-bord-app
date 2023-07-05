import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createPinia, Pinia} from "pinia";

const pinia:Pinia = createPinia()

const app: App = createApp(App);
app.use(pinia)
app.mount('#app');
