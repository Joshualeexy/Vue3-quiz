import { createApp } from 'vue'
import { createRouter } from 'vue-router'
import App from './App.vue'
import './style.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css';
import route from "./router"

// const router = VueRouter.createRouter({
//   history: VueRouter.createWebHashHistory(),
//   routes,
// });


const app = createApp(App)
app.use(Toast)
app.use(route);
app.mount('#app');
