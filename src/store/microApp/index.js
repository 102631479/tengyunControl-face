/*
 * @Description: 
 * @Version: 2.0
 * @Autor: huangfu
 * @Date: 2020-09-24 12:19:12
 * @LastEditors: huangfu
 * @LastEditTime: 2020-09-24 14:10:02
 */

export default {
  namespaced: true,
  state: {
    content: '', // html  自应用内容 ,
    mircoAppLoading: false,// 子应用加载框
    mircoAppShow: false, // 主子应用内容 展示状态判断
  },
  getters: {
    
  },
  mutations: {
    changeCenter(state, params) {
      state.content = params;
    },
    changeLoading(state, params) {
      state.mircoAppLoading = params;
    },
    changeMircoAppShow(state, params) {
      state.mircoAppShow = params;
    },
    
  },
 
};
