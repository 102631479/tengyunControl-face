/*
 * @Description: 
 * @Version: 2.0
 * @Autor: huangfu
 * @Date: 2020-09-14 16:21:23
 * @LastEditors: 大司马
 * @LastEditTime: 2020-12-22 14:56:30
 */
import HttpRequest from '@/libs/axios'
import config from '@/config'
console.log(process.env.NODE_ENV);
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : process.env.VUE_APP_URLENV === 'testing' ? config.baseUrl.test : config.baseUrl.pro

const axios = new HttpRequest(baseUrl)
export default axios
