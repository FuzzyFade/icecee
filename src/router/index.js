import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
import Homepage from '@/pages/Homepage.vue'
import Motionimage from '@/components/Motionimage.vue'

Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/',
            name: 'Home',
            component: Homepage
        },
        {
            path: '/bg',
            name: 'bg',
            component: Motionimage
        },
    ]
})