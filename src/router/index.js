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
import profilanzeigen from "../views/ProfilAnzeigen";
import Newsfeed from "../views/Newsfeed";
import Profil from "../views/Profil";
import Help from "../views/help";
import AuthGuard from './auth-guard'
import EditProfil from "../views/EditProfil";
import Worldmap from "../views/Worldmap";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            name: 'Login',
            path: '/login',
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
            component: BeitragErstellen,
            beforeEnter: AuthGuard
        },
        {
            path: '/Suchfunktion',
            component: Suchfunktion
        },
        {
            path: '/profilanzeigen/:id',
            name: 'profilanzeigen1',
            component: profilanzeigen,
            props: true,
            beforeEnter: AuthGuard
        },
        {
            path: '/profilanzeigen/',
            name: 'profilanzeigen',
            component: profilanzeigen,
            beforeEnter: AuthGuard
        },
        {
            path: '/Newsfeed',
            name: 'Newsfeed',
            component: Newsfeed
        },
        {
            path: '/Profil',
            name: 'Profil',
            component: Profil,
            beforeEnter: AuthGuard
        },
        {
            path: '/help',
            name: 'Help',
            component: Help
        },
        {
            path: '/EditProfil',
            name: 'EditProfil',
            component: EditProfil,
            beforeEnter: AuthGuard
        },
        {
            path: '/Worldmap',
            name: 'Wordmap',
            component: Worldmap
        },



    ]
})
