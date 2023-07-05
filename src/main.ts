import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createPinia, Pinia} from "pinia";
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

const pinia:Pinia = createPinia();
const app: App = createApp(App);

app.use(pinia);
app.use(VueMaterial);
app.mount('#app');
