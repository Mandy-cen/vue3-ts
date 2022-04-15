import type { App } from 'vue'
import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    { path: '/', redirect: '/index' },
    { path: '/index', component: (import(`../components/HelloWorld.vue`)) },
    { path: '/home', name: 'home', component: (import('../views/home.vue')) },
]

console.log(routes)
export const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export function setupRouter(app: App<Element>) {
    app.use(router)
}
