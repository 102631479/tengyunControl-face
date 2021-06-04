// /content/view
import axios from '@/libs/api.request'
import platform from '@/config/platform'

// 上传文件
export const msgAllList = data => {
  return axios.request({
    url: '/msgs/content/view',
    data,
    method: 'post'
  })
}

