/*
 * @Author: 大司马
 * @Date: 2020-10-16 10:57:25
 * @LastEditors: 大司马
 * @LastEditTime: 2020-10-28 19:29:07
 * @FilePath: \open-platform-ui\platform-pc-ui\src\api\products.js
 */
import axios from '@/libs/api.request'
import platform from '@/config/platform'

export const getProLists = (id) => {
    return axios.request({
        url: platform.PRODUCT +  '/api/commodity/id-list?commodityIdList=' + id,
        method: 'get'
    })
}
//获取热门产品
export const getHotProducts = (access) => {
    return axios.request({
      url:platform.PRODUCT + '/api/product/hot',
      params: {
        access
      },
      method: 'get'
    })
  }
// 获取最新产品
export const getNewProducts = (access) => {
    return axios.request({
      url:platform.PRODUCT + '/api/product/newest',
      params: {
        access
      },
      method: 'get'
    })
  }
// 获取产品详情
export const getProductsDetail = (access) => {
    return axios.request({
      url:platform.PRODUCT + '/api/product/'+ access,
      method: 'get'
    })
}
// 获取产品分类列表
export const getBasicProduct = (access) => {
  return axios.request({
    url:platform.COMMON + '/api/global-navigate/title/'+ access,
    method: 'get'
  })
}

//   export const addRoule = data => {
//     return axios.request({
//       url: '/role',
//       data,
//       method: 'post'
//     })
//   }

// export const delRole = id => {
//     return axios.request({
//       url: '/role/' + id,
//       method: 'delete'
//     })
//   }
  
//   export const editRole = data => {
//     return axios.request({
//       url: '/role',
//       data,
//       method: 'put'
//     })
//   }

