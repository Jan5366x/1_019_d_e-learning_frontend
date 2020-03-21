import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../ui/views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Home" */ '../ui/views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Home" */ '../ui/views/Register.vue'),
  },
  {
    path: '/404-not-found',
    name: '404 Not Found',
    component: () => import(/* webpackChunkName: "Home" */ '../ui/views/NotFound.vue'),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // do something to guard routes
  next();
});

export default router;
