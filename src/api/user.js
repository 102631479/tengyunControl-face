import axios from '@/libs/api.request'
import platform from '@/config/platform'


// 用户反馈
export const feedback = data => {
  return axios.request({
    url: platform.OPERATE + '/user-feedback',
    data,
    method: 'post'
  })
}

// 用户反馈
export const userReserve = data => {
  return axios.request({
    url: platform.OPERATE + '/user-reserve',
    data,
    method: 'post'
  })
}

// 登录
export const login = ({ account, password,captchaVerification }) => {
  const data = {
    account,
    password,
    captchaVerification
  }
  return axios.request({
    url: platform.SSO + '/login/front',
    data,
    method: 'post'
  })
}


// 手机号登录
export const phoneLogin = data => {
  return axios.request({
    url: platform.SSO + '/login/phone',
    data,
    method: 'post'
  })
}

// 退出登录
export const loginOut = params => {
  return axios.request({
    url: platform.SSO + '/logout',
    method: 'get',
    params
  })
}



// 获取用户信息
export const getUserInfo = params => {
  return axios.request({
    url: platform.SSO + '/user/token',
    method: 'get',
    params
  })
}

// 用户身份列表
export const getIdentities = params => {
  return axios.request({
    url: platform.SSO + '/identities-permissions',
    method: 'get',
    params
  })
}

// 用户身份列表
export const register = data => {
  return axios.request({
    url: platform.SSO + '/register',
    method: 'post',
    data
  })
}

// 微信登录
export const loginWeChart = () => {
  return axios.request({
    url: platform.SSO + '/oSSO/wechat_enterprise/render',
    method: 'get'
  })
}

// 扫码登录
export const scanLogin = oSSOTyoe => {
  return axios.request({
    url: platform.SSO + `/oauth/${oSSOTyoe}/render`,
    method: 'get'
  })
}


// 重置密码
export const resetPassword = data => {
  return axios.request({
    url: platform.SSO + '/reset-password',
    method: 'post',
    data
  })
}

// 获取验证码
export const verifyCode = (params,modelUrl) => {
  return axios.request({
    url: platform.SSO + '/verify-code/'+modelUrl,
    method: 'get',
    params
  })
}


// 用户权限查询
export const getPermissions = params => {
  return axios.request({
    url: platform.SSO + '/permissions',
    method: 'get',
    params
  })
}


// 分页获取用户信息
export const userPage = (data) => {
  return axios.request({
    url: platform.SSO + '/user/page',
    data,
    method: 'post'
  })
}

// 删除用户
export const delUser = id => {
  return axios.request({
    url: platform.SSO + '/user/' + id,
    method: 'delete'
  })
}
// 新增用户
export const addUser = data => {
  return axios.request({
    url: platform.SSO + '/user',
    data,
    method: 'post'
  })
}
// 更新用户
export const editUser = data => {
  return axios.request({
    url: platform.SSO + '/user',
    data,
    method: 'put'
  })
}

export const logout = (token) => {
  return axios.request({
    url: platform.SSO + '/logout',
    method: 'post'
  })
}

