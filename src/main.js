import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import videoPlay from 'vue3-video-play'
import 'vue3-video-play/dist/style.css'

// createApp(App).mount('#app')
const app = createApp(App)
app.use(router)
app.use(videoPlay)
app.mount("#app")
