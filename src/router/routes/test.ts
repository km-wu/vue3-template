import { RouteRecordRaw, RouteComponent } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/test',
    name: 'Test',
    meta: {
      title: '测试页面',
      keepAlive: false
    },
    component: (): RouteComponent => import('@/views/Test.vue')
  }
]

export default routes
