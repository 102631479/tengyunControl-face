/*
 * @Author: your name
 * @Date: 2020-09-23 13:17:08
 * @LastEditTime: 2020-09-24 18:02:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \open-platform-ui\platform-pc-ui\src\router\model\doc\index.js
 */
import MainFront from '@/components/main-front'

export default [
  {
    path: '/doc',
    name: 'document',
    redirect: '/doc',
    component: MainFront,

    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/doc',
        name: 'document',
        meta: {
          hideInMenu: true,
          title: '文档',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/doc')
      },
      {
        path: '/docSearch',
        name: 'docSearch',
        meta: {
          hideInMenu: true,
          title: '搜索',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/doc/docSearch')
      },
      {
        path: '/docDetail',
        name: 'docDetail',
        meta: {
          hideInMenu: true,
          title: '文档详情',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/doc/docDetail')
      },
      // {
      //   path: '/treeDetails',
      //   name: 'treeDetails',
      //   meta: {
      //     hideInMenu: true,
      //     title: '智慧景区',
      //     notCache: true,
      //     icon: 'md-home'
      //   },
      //   component: () => import('@/view/doc/details')
      // },{
      //   path: '/deepDetails',
      //   name: 'deepDetails',
      //   meta: {
      //     hideInMenu: true,
      //     title: '智慧景区',
      //     notCache: true,
      //     icon: 'md-home'
      //   },
      //   component: () => import('@/view/doc/deepDetail')
      // }
    ]
  }
]