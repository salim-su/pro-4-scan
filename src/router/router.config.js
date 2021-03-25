/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/loading',
    component: () => import('@/views/loading/loading')
  },
  {
    path: '/',
    component: () => import('@/views/show-card/show-card')
  }
]
