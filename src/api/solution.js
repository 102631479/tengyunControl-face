/*
 * @Author: 大司马
 * @Date: 2020-10-16 10:57:12
 * @LastEditors: 大司马
 * @LastEditTime: 2020-10-28 19:23:14
 * @FilePath: \open-platform-ui\platform-pc-ui\src\api\solution.js
 */
import axios from '@/libs/api.request'
import platform from '@/config/platform'

export const getSolutions = (data) => {
  return axios.request({
    url: platform.PRODUCT + '/api/solution/' + data,
    method: 'get'
  })
}
export const getPopularSolve = () => {
  return axios.request({
    url: platform.PRODUCT + '/api/solution/hot',
    method: 'get'
  })
}
export const getNavSolutions = (code) => {
  return axios.request({
    url: platform.COMMON + '/api/global-navigate/title/' + code,
    method: 'get'
  })
}
