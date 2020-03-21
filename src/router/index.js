import Vue from 'vue';
import VueRouter from 'vue-router';

import { ACCESS_TOKEN } from '../config/localStorageVariables';

Vue.use(VueRouter);

const authRequired = () => {
  return {
    authRequired: true,
  };
};

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Basics" */ '../ui/views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Basics" */ '../ui/views/Register.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "Home" */ '../ui/views/Dashboard.vue'),
  },
  {
    path: '/404-not-found',
    name: '404 Not Found',
    component: () => import(/* webpackChunkName: "Basics" */ '../ui/views/NotFound.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../ui/views/Home.vue'),
    meta: {
      ...authRequired(),
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  if (to.meta.authRequired && token) {
    next();
  } else if (!to.meta.authRequired && token) {
    router.push('/home');
  } else {
    router.push('/');
  }
});

export default router;
