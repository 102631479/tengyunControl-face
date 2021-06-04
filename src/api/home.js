import axios from '@/libs/api.request'
import platform from '@/config/platform'


// 登录
export const login = data => {
  return axios.request({
    url: '/login/front',
    data,
    method: 'post'
  })
}

// 登录
export const navigateTree = data => {
  return axios.request({
    url: platform.COMMON + '/api/global-navigate/title/tree',
    data,
    method: 'get'
  })
}