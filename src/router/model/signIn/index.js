export default [
  {
    path: '/signIn',
    name: 'signIn',
    redirect: '/signIn',
    meta: {
      title: 'signIn',
      hideInMenu: true
    },
    component: () => import('@/view/signIn/index.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        meta: {
          title: '登录',
          hideInMenu: true
        },
        component: () => import('@/view/signIn/login/login.vue')
      },
      {
        path: '/regist',
        name: 'regist',
        meta: {
          title: '注册',
          hideInMenu: true
        },
        component: () => import('@/view/signIn/regist')
      },
      {
        path: '/setPwd',
        name: 'setPwd',
        meta: {
          title: '设置密码',
          hideInMenu: true
        },
        component: () => import('@/view/signIn/setPwd')
      },
    ]
  },
]