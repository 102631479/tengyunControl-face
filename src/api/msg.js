// /content/view
import axios from '@/libs/api.request'
import platform from '@/config/platform'

// 查询已读/未读/全部通知
export const msgAllList = data => {
  return axios.request({
    url: '/msgs/content/view',
    data,
    method: 'post'
  })
}

// 标记已读（单个）
export const msgItem = data => {
  return axios.request({
    url: '/msgs/content/modify',
    data,
    method: 'post'
  })
}

// 标记已读（全部）
export const msgModify = data => {
  return axios.request({
    url: '/msgs/content/modify/all',
    data,
    method: 'post'
  })
}