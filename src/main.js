import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import AboutUs from './components/AboutUs.vue'

const routes = [
    {
        path: '/home',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/about',
        name: 'AboutUs',
        component: AboutUs
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

createApp(App).use(router).mount('#app')