import { createApp } from 'vue'
import App from './App.vue'
import Router from './routes.js'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './assets/style/main.css'

createApp(App)
.use(Router)
.mount('#app')
