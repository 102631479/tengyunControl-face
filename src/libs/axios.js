/*
 * @Description: 
 * @Version: 2.0
 * @Autor: huangfu
 * @Date: 2020-09-14 16:21:23
 * @LastEditors: 大司马
 * @LastEditTime: 2021-01-06 14:49:10
 */
import axios from 'axios'
import store from '@/store'
import config from '@/config'
import { getToken } from '@/libs/util'
import Cookie from "js-cookie";

class HttpRequest {
  /**
   * 定义实例参数
  */
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }

  /**
   * 请求参数配置
  */
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        "Content-type": 'application/json;'
        //
      }
    }
    return config
  }
  
  destroy (url) {
    delete this.queue[url]
  }

  /**
   * 拦截器
  */
  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      getToken() ? config.headers["Authorization"] = getToken() : delete config.headers["Authorization"] 


      return config
    }, error => {
      return Promise.reject(error)
    })
    
    // 响应拦截
    instance.interceptors.response.use(res => {
      if(res.data.ret === 0) {
        return Promise.resolve(res.data)
      }else {
        // console.log(res);
        if( res.data.errorcode === 2002 || res.data.errorcode === 401) {
          // let title = '当前账号无此权限！',content = '<p>请重新登录</p>'
          // if(res.data.errorcode === 2002){
          //   title = '身份信息Token已过期！'
          //   content = '<p>是否重新登录？</p>'
          // }
          // iView.Modal.confirm({
          //   title,
          //   content,
          //     onOk: () => {
          //       store.commit("setIsLogin", false);
          //       store.commit("setUserId", '');
          //       store.commit("setUserName", '');
          //       store.commit("setUserInfo", {});
          //       store.commit("setToken", "");
          //       if (process.env.NODE_ENV === "development") {
          //         Cookie.set("token", '', { path: "", expires: 7 });
          //       }else{
          //         Cookie.set("token", '', { domain: ".zhihuiwenlvyun.com", path: "", expires: 7 });
          //       }
          //     },
          //     onCancel: () => {}
          //   });
          store.commit('setToken', '')
          store.commit('setAccess', [])
          store.commit("setUserInfo", {})
          // this.$router.push({path: '/login'})
        }
        return Promise.reject(res.data)
      }
    }, error => {
      return Promise.reject(error)
    })
  }

  /**
   * 请求对象
   * @param {object} options 请求配置
   * @param {boolean} muck 是否开启模拟数据
   * 
  */
  request (options, muck = false) {
    if(muck) this.baseUrl = config.baseUrl.muck
    
    const instance = axios.create({ timeout: 1000 * 10 })
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
