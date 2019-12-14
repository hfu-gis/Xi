import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login1'
import register from '../views/register'
import forgotacc from '../views/forgot-acc'
import legalnotice from '../views/legal-notice'
import privacypolicy from '../views/privacypolicy'
import Home from "../components/Home"
import '../assets/css/app.css'
import BeitragErstellen from '../views/BeitragErstellen'
import Suchfunktion from "../views/Suchfunktion"
import ProfilAnzeigen from "../views/ProfilAnzeigen";
import Newsfeed from "../views/Newsfeed";
import Profil from "../views/Profil";


Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            name: Login,
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: register
        },
        {
            path: '/legal-notice',
            component: legalnotice
        },
        {
            path: '/privacy-policy',
            component: privacypolicy
        },
        {
            path: '/forgot-acc',
            component: forgotacc
        },
        {
            path: '/BeitragErstellen',
            name: 'BeitragErstellen',
            component: BeitragErstellen
        },
        {
            path: '/Suchfunktion',
            component: Suchfunktion
        },
        {
            path: '/ProfilAnzeigen',
            name: 'ProfilAnzeigen',
            component: ProfilAnzeigen
        },
        {
            path: '/Newsfeed',
            component: Newsfeed
        },
        {
            path: '/Profil',
            component: Profil
        },
    ]
})
