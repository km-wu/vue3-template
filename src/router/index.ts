import { createRouter, createWebHistory, RouteRecordRaw, RouteComponent } from 'vue-router'

const fileRoutes = import.meta.globEager('./routes/**/*.ts')
const routesArray = Object.keys(fileRoutes).reduce<RouteRecordRaw[]>(
  (module, key) => [...module, ...fileRoutes[key].default],
  [],
)

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
      keepAlive: false,
    },
    component: (): RouteComponent => import('../views/Home/index.vue'),
  },

  ...routesArray,

  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: (): RouteComponent => import('../views/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // ...
  console.log(to, from)

  next()
})

router.afterEach((to) => {
  console.log(to)

  // ...
})
export default router
