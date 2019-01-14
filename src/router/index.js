import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Homepage from '@/components/Homepage.vue'
import Motionimage from '@/components/Motionimage.vue'

Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/login',
            name: 'Login',
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