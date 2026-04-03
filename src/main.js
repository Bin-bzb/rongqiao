import { createApp } from 'vue'
import './style.css'
import 'font-awesome/css/font-awesome.min.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')