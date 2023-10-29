import { createWebHistory, createRouter } from "vue-router";
import Detail from './components/Detailcomp.vue'
import Main from './components/Maincomp.vue'
import Post from './components/Postcomp.vue'


const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/list",
    component: Post,
    name : 'Post'
  },
  {
    path: "/detail/:id",
    component: Detail
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 