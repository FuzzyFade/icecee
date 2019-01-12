import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Homepage from '@/components/Homepage.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/',
            name: 'Home',
            component: Homepage
        },
    ]
})