import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login1'
import HelloWorld from "../components/HelloWorld"
import '../assets/css/app.css';


Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: HelloWorld
        },
        {
            path: '/login',
            component: Login
        },
    ]
})
