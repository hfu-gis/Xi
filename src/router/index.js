import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login1'
import register from '../views/register'
import forgotacc from '../views/forgot-acc'
import Home from "../components/Home"
import '../assets/css/app.css'
import BeitragErstellen from '../views/BeitragErstellen'
import Suchfunktion from "../views/Suchfunktion"
import BeitraegeAnzeigen from "../views/BeitraegeAnzeigen";
import Profil from "../views/Profil";





Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: register
        },
        {
            path: '/forgot-acc',
            component: forgotacc
        },
        {
            path: '/BeitragErstellen',
            component: BeitragErstellen
        },
        {
            path: '/Suchfunktion',
            component: Suchfunktion
        },
        {
            path: '/BeitraegeAnzeigen',
            component:BeitraegeAnzeigen
        },
        {
            path: '/Profil',
            component: Profil
        },
       
    ]
})
