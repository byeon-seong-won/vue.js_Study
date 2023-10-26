import { createWebHistory, createRouter } from "vue-router";
import List from './components/Listcomp.vue'
import Detail from './components/Detailcomp.vue'
import Main from './components/Maincomp.vue'



const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/list",
    component: List,
    children : [
      { path :'detail', component : Detail }
    ]
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