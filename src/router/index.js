import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login1'
import HelloWorld from "../components/HelloWorld"
import '../assets/css/app.css'
import BeitragErstellen from '../views/BeitragErstellen'
import Suchfunktion from "../views/Suchfunktion"
import BeiträgeAnzeigen from "../views/BeiträgeAnzeigen";


Vue.use(VueRouter);

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
        {
            path: '/BeitragErstellen',
            component: BeitragErstellen
        },
        {
            path: '/Suchfunktion',
            component: Suchfunktion
        },
        {
            path: '/BeiträgeAnzeigen',
            component: BeiträgeAnzeigen
        },

    ]
})
