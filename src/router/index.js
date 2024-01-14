import { createRouter, createWebHistory } from 'vue-router';
import home from '../views/Home.vue';
import quiz from '../views/quiz.vue';
import error404 from '../views/404.vue';
const route = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/quiz/:id',
      name: 'quiz',
      component: quiz,
    },
    {
      path: '/:catchall(.*)*',
      component: error404,
      name: '404',
    },
  ],
});

export default route;
