<template>
  <div class="user-avatar-dropdown">
    <Dropdown style="color: #fff" trigger="click" @on-click="handleClick">
      <Badge :dot="!!messageUnreadCount">
        <Avatar shape="square" :src="userAvatar"/>
      </Badge>
      <span class="username" v-if="userName !==''" v-text="userName"></span>
      <span class="username" v-if="userName ===''">管理员</span>
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list" style="background: #2c303b">
        <DropdownItem name="userCenter"><Icon type="md-person" size="18" /><span class="menu-text">用户中心</span></DropdownItem>
        <DropdownItem name="manage"><Icon type="md-person" size="18" /><span class="menu-text">保证金管理</span></DropdownItem>
        <DropdownItem name="manage"><Icon type="md-person" size="18" /><span class="menu-text">费用管理</span></DropdownItem>
        <DropdownItem name="manage"><Icon type="md-person" size="18" /><span class="menu-text">优惠券管理</span></DropdownItem>
        <DropdownItem name="manage"><Icon type="md-person" size="18" /><span class="menu-text">账户管理</span></DropdownItem>
        <DropdownItem name="logout"><Icon custom="iconfont iconpower-outline" size="18" /><span class="menu-text">退出登录</span></DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import './user.less'
import { mapActions } from 'vuex'
export default {
  name: 'User',
  props: {
    userAvatar: {
      type: String,
      default: ''
    },
    messageUnreadCount: {
      type: Number,
      default: 0
    },
    userName: {
      type: String,
      default: ''
    },
  },
  methods: {
    ...mapActions([
      'handleLogOut'
    ]),
    logout () {
      this.handleLogOut().then(() => {
        if (process.env.NODE_ENV === "development") {
          Cookies.set("token", '', { path: "", expires: 1 });
        }else{
          Cookies.set("token", '', { domain: ".zhihuiwenlvyun.com", path: "", expires: 1 });
        }
        this.$router.push('/login')
      })
      console.log('9999999')
    },
    message () {
      this.$router.push({
        name: 'message_page'
      })
    },
    handleClick (name) {
      switch (name) {
        case 'logout': this.logout()
          break
        case 'message': this.message()
          break
      }
    }
  }
}
</script>

<style scoped>
  .username {
    margin: 0 2px 0 10px;
  }
  .menu-text {
    margin: 0 20px;
    vertical-align: bottom;
  }
</style>
