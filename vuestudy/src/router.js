import { createWebHistory, createRouter } from "vue-router";
import List from './components/Listcomp.vue'
import Detail from './components/Detailcomp.vue'


const routes = [
  {
    path: "/list",
    component: List,
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