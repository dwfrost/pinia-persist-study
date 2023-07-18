import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createPinia } from 'pinia'
import { myPiniaPlugin } from '@/stores/myplugin'
const pinia = createPinia()
pinia.use(myPiniaPlugin)
const app = createApp(App)

app.use(pinia)
app.mount('#app')
