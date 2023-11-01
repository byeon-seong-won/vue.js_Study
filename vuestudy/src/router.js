import { createWebHistory, createRouter } from "vue-router";
import Main from './components/Maincomp.vue'
import Post from './components/Postcomp.vue'
import Detail from './components/Detailcomp.vue'


const routes = [
  {
    path: "/vueblog",
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
  scrollBehavior(){
    return { top: 0 }
  },
});

export default router; 