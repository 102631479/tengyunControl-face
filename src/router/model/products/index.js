/*
 * @Author: your name
 * @Date: 2020-09-21 17:11:28
 * @LastEditTime: 2020-10-23 18:36:51
 * @LastEditors: 大司马
 * @Description: In User Settings Edit
 * @FilePath: \open-platform-ui\platform-pc-ui\src\router\model\products\index.js
 */
import MainFront from '@/components/main-front'

export default [
  {
    path: '/example',
    name: 'example',
    redirect: '/example',
    component: MainFront,

    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/example',
        name: 'example',
        meta: {
          hideInMenu: true,
          title: '智慧景区',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/products/example')
      },
      {
        path: '/products',
        name: 'production',
        meta: {
          hideInMenu: true,
          title: '产品',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/products')
      }, {
        path: '/productDetail',
        name: 'productDetail',
        meta: {
          hideInMenu: true,
          title: '智慧景区',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/products/details')
      }, {
        path: '/proBigData',
        name: 'proBigData',
        meta: {
          hideInMenu: true,
          title: '大数据平台',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/products/data')
      }, {
        path: '/TYPro',
        name: 'TYPro',
        meta: {
          hideInMenu: true,
          title: '腾云产品',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/products/tengYunPro')
      }, {
        path: '/TXPro',
        name: 'TXPro',
        meta: {
          hideInMenu: true,
          title: '腾讯产品',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/products/weChatPro')
      }, {
        path: '/tencentAd',
        name: 'tencentAd',
        meta: {
          hideInMenu: true,
          title: '腾讯产品',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/products/tencentAd')
      }, {
        path: '/contentPro',
        name: 'contentPro',
        meta: {
          hideInMenu: true,
          title: '腾讯产品',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/products/ContentProd')
      }, {
        path: '/mcrelease',
        name: 'mcrelease',
        meta: {
          hideInMenu: true,
          title: '腾讯产品',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/products/mc-release')
      }, {
        path: '/mcdetail',
        name: 'mcdetail',
        meta: {
          hideInMenu: true,
          title: '腾讯产品',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/products/mc-details')
      }, {
        path: '/gate',
        name: 'gate',
        meta: {
          hideInMenu: true,
          title: '腾讯产品',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/products/gate')
      }
    ]
  }
]