import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:id',
    name: 'RecipeDetail',
    component: () => import('./views/RecipeDetail.vue'),
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },
]
