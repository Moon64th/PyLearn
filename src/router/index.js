import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/home.vue";
import About from "../views/about.vue";
import Syntax from '../views/syntax.vue';
import TutorialUvPip from '../views/tutorialUvPip.vue';
import Impressum from '../views/impressum.vue';

const routes = [{
    path: "/",
    name: "home",
    component: Home
},{
    path: "/about",
    name: "about",
    component: About
},{
    path: "/syntax",
    name: "syntax",
    component: Syntax
},{
    path: "/tutorial",
    name: "Tutorial",
    component: TutorialUvPip
},{
    path: "/impressum",
    name: "impressum",
    component: Impressum
}
]

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes
})

export default router