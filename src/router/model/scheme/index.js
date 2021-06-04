import MainFront from '@/components/main-front'

export default [
  {
    path: '/smartSpot',
    name: '_smartSpot',
    redirect: '/smartSpot',
    component: MainFront,

    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/smartSpot',
        name: 'smartSpot',
        meta: {
          hideInMenu: true,
          title: '智慧景区',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/scheme/smartSpot')
      },
      {
        path: '/digitalTown',
        name: 'digitalTown',
        meta: {
          hideInMenu: true,
          title: '数字小镇',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/scheme/digitalTown')
      },
      {
        path: '/scheme',
        name: 'scheme',
        meta: {
          hideInMenu: true,
          title: '解决方案',
          notCache: true,
        },
        component: () => import('@/view/scheme/index.vue')
      },
      {
        path: '/schemeDetail',
        name: 'schemeDetail',
        meta: {
          hideInMenu: true,
          title: '解决方案',
          notCache: true,
        },
        component: () => import('@/view/scheme/details.vue')
      },
      {
        path: '/beautifulcouny',
        name: 'beautifulcouny',
        meta: {
          hideInMenu: true,
          title: '未来票房',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/scheme/beautifulcouny')
      },
      {
        path: '/msgCenter',
        name: 'msgCenter',
        meta: {
          hideInMenu: true,
          title: '消息中心',
        },
        component: () => import('@/view/msg-center')
      },
      {
        path: '/feedback',
        name: 'feedback',
        meta: {
          hideInMenu: true,
          title: '意见反馈',
        },
        component: () => import('@/view/feedback')
      }
    ]
  }
]