/*
 * @Author: your name
 * @Date: 2020-09-23 13:17:08
 * @LastEditTime: 2020-09-23 18:31:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \open-platform-ui\platform-pc-ui\src\router\model\activity\index.js
 */
import MainFront from '@/components/main-front'

export default [
  {
    path: '/activity',
    name: 'activity',
    redirect: '/activity',
    component: MainFront,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/activity',
        name: 'activity',
        meta: {
          hideInMenu: true,
          title: '最新活动',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('../../../view/activity/index.vue')
        // component: () => import('@/view/activity/index.vue')
      },{
        path: '/actDetail',
        name: 'actDetail',
        meta: {
          hideInMenu: true,
          title: '数字小镇',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/activity/details')
      }
    ]
  }
]