/*
 * @Author: your name
 * @Date: 2020-09-21 17:11:28
 * @LastEditTime: 2020-10-10 14:22:44
 * @LastEditors: 大司马
 * @Description: In User Settings Edit
 * @FilePath: \open-platform-ui\platform-pc-ui\src\router\model\payfor\index.js
 */
import MainFront from '@/components/main-front'

export default [
  {
    path: '/payfor',
    name: 'payfor',
    redirect: '/payfor',
    component: MainFront,

    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/payfor',
        name: 'payfor',
        meta: {
          hideInMenu: true,
          title: '智慧景区',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/payfor')
      },{
        path: '/checkInfo',
        name: 'checkInfo',
        meta: {
          hideInMenu: true,
          title: '智慧景区',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/payfor/checkInfo')
      },{
        path: '/payforInfo',
        name: 'payforInfo',
        meta: {
          hideInMenu: true,
          title: '智慧景区',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/payfor/payforInfo')
      },{
        path: '/testServ',
        name: 'testServ',
        meta: {
          hideInMenu: true,
          title: '申请测试服务',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/payfor/testServ')
      },{
        path: '/probation',
        name: 'probation',
        meta: {
          hideInMenu: true,
          title: '申请试用服务',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/payfor/Probation')
      },{
        path: '/lists',
        name: 'lists',
        meta: {
          hideInMenu: true,
          title: '支付详情',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/payfor/lists')
      },{
        path: '/payment',
        name: 'payment',
        meta: {
          hideInMenu: true,
          title: '支付详情',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/payfor/lists/payment')
      },{
        path: '/payment-ex',
        name: 'payment-ex',
        meta: {
          hideInMenu: true,
          title: '支付详情',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/payfor/lists/payment-ex')
      },{
        path: '/paying',
        name: 'paying',
        meta: {
          hideInMenu: true,
          title: '支付详情',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/payfor/lists/paying')
      }
    ]
  }
]