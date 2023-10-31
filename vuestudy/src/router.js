import { createWebHistory, createRouter } from "vue-router";
import Main from './components/Maincomp.vue'
import Post from './components/Postcomp.vue'
import Detail from './components/Detailcomp.vue'


const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/post",
    component: Post,
    name : 'Post',
    props : true
  },
  {
    path: "/detail/:id",
    component: Detail,

  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 