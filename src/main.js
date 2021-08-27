
/**
 *                             _ooOoo_
 *                            o8888888o
 *                            88" . "88
 *                            (| -_- |)
 *                            O\  =  /O
 *                         ____/`---'\____
 *                       .'  \\|     |//  `.
 *                      /  \\|||  :  |||//  \
 *                     /  _||||| -:- |||||-  \
 *                     |   | \\\  -  /// |   |
 *                     | \_|  ''\---/''  |   |
 *                     \  .-\__  `-`  ___/-. /
 *                   ___`. .'  /--.--\  `. . __
 *                ."" '<  `.___\_<|>_/___.'  >'"".
 *               | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *               \  \ `-.   \_ __\ /__ _/   .-` /  /
 *          ======`-.____`-.___\_____/___.-`____.-'======
 *                             `=---='
 *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *                     佛祖保佑        永无BUG
 *            佛曰:
 *                   写字楼里写字间，写字间里程序员；
 *                   程序人员写程序，又拿程序换酒钱。
 *                   酒醒只在网上坐，酒醉还来网下眠；
 *                   酒醉酒醒日复日，网上网下年复年。
 *                   但愿老死电脑间，不愿鞠躬老板前；
 *                   奔驰宝马贵者趣，公交自行程序员。
 *                   别人笑我忒疯癫，我笑自己命太贱；
 *                   不见满街漂亮妹，哪个归得程序员？
 **/ 

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
// import i18n from '@/locale'
import config from '@/config'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import importDirective from '@/directive'
import { directive as clickOutside } from 'v-click-outside-x'
import installPlugin from '@/plugin'
import formCreate from '@form-create/iview'
import vuePrototype from './libs/vuePrototype'
import './style/iviewStyles/index.less'
import './style/index.scss';


import 'swiper/css/swiper.css'
import './index.less'
import '@/assets/icons/iconfont.css'
import TreeTable from 'tree-table-vue'
import VOrgTree from 'v-org-tree'
import 'v-org-tree/dist/v-org-tree.css'

import md5 from './libs/md5';
Vue.prototype.$md5 = md5;

// 导入乾坤函数
import {
  registerMicroApps,
  setDefaultMountApp,
  start
} from "qiankun";
import VueBus from 'vue-bus'
Vue.use(VueBus)

// Vue.use(iView, {
//   i18n: (key, value) => i18n.t(key, value)
// })
Vue.use(iView)
Vue.use(TreeTable)
Vue.use(VOrgTree)
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper)
Vue.use(formCreate)

/**
 * @description 注册admin内置插件
 */
installPlugin(Vue)
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config

/**
 * 挂载原型方法
*/
Object.keys(vuePrototype).map(key => {
  Vue.prototype[key] = vuePrototype[key]
})

/**
 * 注册指令
 */
importDirective(Vue)
Vue.directive('clickOutside', clickOutside)
 
/*  import qiankun start 
 */
function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

let app = null;

function render({ appContent, loading }) {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
  } else {
    store.commit('microApp/changeCenter', appContent);
    store.commit('microApp/changeLoading', loading);
  }
}
 //qiankun
 //第一次调用初始主应用
 render({}) 

 let msg = {
  data:'修炼爱情的辛酸,学会放好以前的渴望'
}
//基座
let apps = [
  {
    name: 'console', //应用名字
    //默认会加载这个html 解析里面的js 动态的执行 (子应用必须支持跨域)
    entry:process.env.NODE_ENV === 'development' ? '//192.168.2.65:10002' : 'http://console.zhihuiwenlvyun.com',
    // entry:process.env.NODE_ENV === 'development' ? '//192.168.1.66:10002' : 'http://console.zhihuiwenlvyun.com',
    container:'#subView', // 节点ID,沙盒模式    容器名/挂载点
    // render:renderUtil.render,// 普通模式
    // activeRule: genActiveRule('/#/micrApp/dev'),

    // 当访问 /#/microApp/dev 时就挂载到#subView上
    activeRule: '/#/microApp/dev', //激活路径
    props: store.state
  },
  // {

  // }
]

   //注册的子应用 参数为数组
   registerMicroApps(apps,{
    beforeLoad: [
      app => {
        console.log(app)
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      app => {
        alert('pc-ui')
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  });

  // setDefaultMountApp('/star/linjunjie')
//开启沙盒模式
start({ 
  sandbox :{strictStyleIsolation: true},
  excludeAssetFilter: (assetUrl) => { 
    return true
  }
})

/**
 * import qiankun end 
 */ 

 