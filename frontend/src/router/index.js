// router/index.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  // Add other routes here
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;