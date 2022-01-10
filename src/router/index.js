import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from '../components/HelloWorld.vue'

const routes = [
    {
        path: "/",
        name: "HelloWorld",
        component: HelloWorld
    }, {
        path: "/home",
        component: () => import("../views/Home.vue")
    }, {
        path: "/gb",
        component: () => import("../views/GB.vue")
    }, {
        path: "/mcdh",
        component: () => import("../views/DH.vue")
    }, {
        path: "/nwt",
        component: () => import("../views/NW.vue")
    }, {
        path: "/sjynczc",
        component: () => import("../views/SJ.vue")
    }, {
        path: "/ssnhdn",
        component: () => import("../views/SS.vue")
    }, {
        path: "/swcfsfy",
        component: () => import("../views/CF.vue")
    }, {
        path: "/xkbklzdwp",
        component: () => import("../views/WP.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
