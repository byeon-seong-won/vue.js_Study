import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import mitt from 'mitt'

let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;


createApp(App).use(router).mount('#app') 

