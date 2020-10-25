import {createRouter, createWebHistory} from 'vue-router'
import store from '../store';

import WelcomePage from '@/components/welcome/welcome.vue'

const routes = [
    {
        path: '/',
        component: WelcomePage
    },
    {
        path: '/signin',
        component: () => import(/* webpackChunkName: "signin" */ '@/components/auth/signin.vue')
    },
    {
        path: '/dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/components/dashboard/dashboard.vue'),
        beforeEnter(to, from, next) {
            if (store.state.token) {
                next()
            } else {
                next('/signin')
            }
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
