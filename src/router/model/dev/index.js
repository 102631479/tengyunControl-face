/*
 * @Description: 
 * @Version: 2.0
 * @Autor: huangfu
 * @Date: 2020-10-31 17:17:54
 * @LastEditors: huangfu
 * @LastEditTime: 2020-10-31 19:34:31
 */

export default [
  {
    path: `/micrApp/dev`,//匹配微应用跳转
    component: () => import('@/view/MicConsole/index'),
    name: 'dev',
    meta: { 
      title: '开发环境', 
      icon: 'jigou',
      isMicrApp:true,
    },
  },
  {
    path: `/micrApp/dev/:micrAppRoute`,//匹配微应用内的路由跳转
    hidden:true,
    component: () => import('@/view/MicConsole/index'),
    name: 'dev',
    meta: { 
      title:'开发环境',
      isMicrApp:true, 
    },
  },
  {
    path: `/micrApp/dev/:micrAppRoute/:micrAppRoute`,//匹配微应用内的路由跳转
    hidden:true,
    component: () => import('@/view/MicConsole/index'),
    name: 'dev',
    meta: { 
      title:'开发环境',
      isMicrApp:true, 
    },
  }
]
