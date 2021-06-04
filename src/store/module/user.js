import {
  login,
  getUserInfo,
  loginOut
} from '@/api/user'

export default {
  state: {
    isLogin: false, // 是否登录
    userName: '',
    userId: '',
    avatarImgPath: '',
    token: '',
    access: [],
    userInfo: {},
    identities:'', //身份
    hasGetInfo: false,
    hasLogin:false,
    messageUnreadList: [],
    messageReadedList: [],
    messageTrashList: [],
    messageContentStore: {}
  },
  mutations: {
    setIdentities(state, identities) {
      state.identities = identities
    },
    setIsLogin (state, isLogin) {
      state.isLogin = isLogin
    },
    setAvatar (state, avatarPath) {
      state.avatarImgPath = avatarPath
    },
    setUserId (state, id) {
      state.userId = id
    },
    setUserName (state, name) {
      state.userName = name
    },
    setAccess (state, access) {
      state.access = access
    },
    setToken (state, token) {
      state.token = token
    },
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    },
    setHasGetInfo (state, status) {
      state.hasGetInfo = status
    },
    setHasLogin(state, status) {
      state.hasLogin = status
    },
    setMessageUnreadList (state, list) {
      state.messageUnreadList = list
    },
    setMessageReadedList (state, list) {
      state.messageReadedList = list
    },
    setMessageTrashList (state, list) {
      state.messageTrashList = list
    },
    updateMessageContentStore (state, { msg_id, content }) {
      state.messageContentStore[msg_id] = content
    },
    moveMsg (state, { from, to, msg_id }) {
      const index = state[from].findIndex(_ => _.msg_id === msg_id)
      const msgItem = state[from].splice(index, 1)[0]
      msgItem.loading = false
      state[to].unshift(msgItem)
    }
  },
  getters: {
    messageUnreadCount: state => state.messageUnreadList.length,
    messageReadedCount: state => state.messageReadedList.length,
    messageTrashCount: state => state.messageTrashList.length
  },
  actions: {
    // 登录
    handleLogin ({commit}, { userName, password,captchaVerification }) {
      userName = userName.trim()
      return new Promise((resolve, reject) => {
        login({
          userName,
          password,
          captchaVerification
        }).then(res => {
          commit('setToken', res.data.token);
          commit('setHasLogin',true);
          commit('setUserInfo', res.data);
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 退出登录
    handleLogOut ({ state, commit }) {
      return new Promise((resolve, reject) => {
        loginOut({
          account: state.userInfo.userCode
        }).then(d => {
          console.log('退出登录')
        }).catch(e => {
          this.$Message.error(e.message)
        })

        commit('setToken', '');
        commit('setAccess', []);
        commit('setHasLogin', false);
        resolve()
      })
    },
    // 获取用户相关信息
    getUserInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {

        getUserInfo().then(res => {
          const data = {
            avatar: '',
            name: '',
            user_id: '',
            access: []
          }
          commit('setAvatar', data.avatar)
          commit('setUserName', data.name)
          commit('setUserId', data.user_id)
          commit('setAccess', data.access)
          commit('setHasGetInfo', true)
          resolve(data)
        }).catch(err => {
          reject(err)
        })

      })
    }

  }
}
