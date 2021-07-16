/*
 * @Description: 
 * @Version: 2.0
 * @Autor: huangfu
 * @Date: 2020-09-14 16:21:23
 * @LastEditors: 大司马
 * @LastEditTime: 2020-12-25 13:23:46
 */
import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import iView from 'iview'
import { setToken, canTurnTo, setTitle } from '@/libs/util'
import config from '@/config'
const { homeName } = config



Vue.use(Router)

const router = new Router({
  routes,
  mode: 'hash'
})

// 解决连续点击跳转路由报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

const turnTo = (to, access, next) => {
  if (canTurnTo(to.name, access, routes)) next() // 有权限，可访问
  else next({ replace: true, name: 'error_401' }) // 无权限，重定向到401页面
}


router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  let token = store.state.user.token
  // token 失效跳转到登陆 
  // if (window.__POWERED_BY_QIANKUN__ && to.name === LOGIN_PAGE_NAME) {
  //   iView.Modal.confirm({
  //     title: "身份标识token已过期",
  //     content: "请重新登录",
  //     onOk: () => {
  //       window.history.pushState({}, null, '/login')
  //     },
  //     onCancel: () => {
  //       window.history.pushState({}, null, '/login')
  //     }
  //   });
  //   return
  // }
  if(to.path == "/mobile/regist") {
    // window.open(`${config.appSrc}/#/regist?invitationCode=${to.query.invitationCode || ''}&invitationName=${to.query.invitationName || ''}`);
    // window.open('http://www.baidu.com/');
    window.location.href=`${config.appSrc}/#/regist?invitationCode=${to.query.invitationCode || ''}&invitationName=${to.query.invitationName || ''}`
  } else {
    next();
  }
  // console.log('not qiankun');
  // if (!token && to.name !== LOGIN_PAGE_NAME) {
  //   // 未登录且要跳转的页面不是登录页
  //   next({
  //     name: LOGIN_PAGE_NAME // 跳转到登录页
  //   })
  // } else if (!token && to.name === LOGIN_PAGE_NAME) {
  //   // 未登陆且要跳转的页面是登录页
  //   next() // 跳转
  // } else if (token && to.name === LOGIN_PAGE_NAME) {
  //   // 已登录且要跳转的页面是登录页
  //   next({
  //     name: homeName // 跳转到homeName页
  //   })
  // } else {
  //   if (store.state.user.hasGetInfo) {
  //     turnTo(to, store.state.user.access, next)
  //   } else {
  //     store.dispatch('getUserInfo').then(user => {
  //       // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
  //       turnTo(to, [], next)
  //     }).catch(() => {
  //       store.state.user.commit('setToken', '')
  //       next({
  //         name: 'login'
  //       })
  //     })
  //   }
  // }
})

router.afterEach(to => {
  setTitle(to, router.app)
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})


export default router
