import { createHead } from '@vueuse/head'
import { createApp } from 'vue'
import router from './router'
import './styles/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(createHead())

app.mount('#app')
