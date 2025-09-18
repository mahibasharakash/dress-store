import {createRouter, createWebHistory} from "vue-router";

import authLayout from "../authentication/layout/layout.vue";
import login from "../authentication/pages/login.vue";
import registration from "../authentication/pages/registration.vue";
import forgot from "../authentication/pages/forgot.vue";
import reset from "../authentication/pages/reset.vue";
import verification from "../authentication/pages/verification.vue";

import portalLayout from "../portal/layout/layout.vue";
import home from "../portal/pages/home.vue";

const title = 'Dress Store - ';
const routes = [
    {
        path: '', name: 'portalLayout', component: portalLayout,
        children: [
            {path: '', name: 'home', component: home, meta: {title: title + 'Home'}},
            {path: 'auth', name: 'authLayout', component: authLayout,
                children: [
                    {path: 'login', name: 'login', component: login, meta: {title: title + 'Login'}},
                    {path: 'registration', name: 'registration', component: registration, meta: {title: title + 'Registration'}},
                    {path: 'forgot', name: 'forgot', component: forgot, meta: {title: title + 'Forgot'}},
                    {path: 'reset', name: 'reset', component: reset, meta: {title: title + 'Reset'}},
                    {path: 'verification', name: 'verification', component: verification, meta: {title: title + 'Verification'}},
                ]
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(), routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        } else {
            return {top: 0, behavior: 'smooth'};
        }
    }
});

export default router;
