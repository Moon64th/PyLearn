import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/home.vue";
import About from "../views/about.vue";

const routes = [{
    path: "/",
    name: "home",
    component: Home
},{
    path: "/about",
    name: "about",
    component: About
}
]

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes
})

export default router