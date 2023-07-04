import { createApp } from 'vue'
import { Pinia, createPinia } from 'pinia'
import App from '../App.vue'

const pinia: Pinia = createPinia()
const app: App<Element> = createApp(App)

app.use(pinia)
app.mount('#app')