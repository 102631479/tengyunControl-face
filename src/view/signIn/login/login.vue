<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: huangfu
 * @Date: 2020-09-14 16:21:23
 * @LastEditors: 大司马
 * @LastEditTime: 2021-01-18 15:41:53
-->
<template>
  <div
    style="padding: 50px 50px 205px; border: 1px solid #eee"
    class="flex justify-center bg-fff"
  >
    <div class="card pl-26 pr-50 pt-20 pb-30">
      <Tabs style="width: 100%" :animated="false">
        <TabPane label="账号登录" name="name2">
          <emailFrom />
        </TabPane>
        <!-- <TabPane label="扫码登录"  name="name1">
            <scan />
          </TabPane> -->
        <TabPane label="短信登录" name="name3">
          <telForm />
        </TabPane>
      </Tabs>
    </div>
    <div
      style="border-left: 1px solid #eee; width: 490px; color: #000"
      class="login_info pl-50 pt-70"
    >
      <div style="font-weight: 600" class="f-size-24">智慧景区解决方案专家</div>
      <div class="f-size-14 mt-46 mb-26">
        <p class="mt-10">● 洞见未来经济先机</p>
        <p class="mt-10">● 前言技术开放共享</p>
        <p class="mt-10">● 重磅产品最新发布</p>
      </div>
      <img
        width="100%"
        src="./../../../assets/images/login_position.png"
        alt=""
      />
      <!-- <div class="cup bg-blue lh-30 t-center" style="width: 100px;">注册</div> -->
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import emailFrom from "./emailFrom";
import telForm from "./telForm";
import scan from "./scan";
export default {
  components: { emailFrom, scan, telForm },
  created() {
    localStorage.clear();
  },
  data() {
    return {
      token: "",
    };
  },
  mounted() {
    this.$store.commit("setIsLogin", false);
    this.$store.commit("setUserId", "");
    this.$store.commit("setUserName", "");
    this.$store.commit("setUserInfo", {});
    this.$store.commit("setToken", "");
    if (process.env.NODE_ENV === "development") {
      Cookies.set("token", "", { path: "", expires: 7 });
    } else {
      Cookies.set("token", "", {
        domain: ".zhihuiwenlvyun.com",
        path: "",
        expires: 7,
      });
    }
  },
  methods: {
    login() {
      document.cookie = `token=${this.token}; path=/; domain=wdblog.top;`;
      window.open("http://console-pc-main.wdblog.top");
    },
  },
};
</script>

<style lang="scss">
@media screen and (max-width: 900px) {
  .login_info {
    display: none;
  }
}

.card {
  .ivu-tabs-nav {
    width: 100%;
    .ivu-tabs-tab {
      width: 50%;
      text-align: center;
    }
  }
}
.page {
  overflow: hidden;
  .ivu-tabs-nav .ivu-tabs-tab {
    padding: 15px 20px;
  }
  .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
    background-color: #fff;
  }
  .ivu-input {
    border-radius: 1px;
  }
  .ivu-btn {
    border-radius: 1px;
  }
  .ivu-input-large {
    padding: 15px 16px;
    height: 44px;
  }
}
</style>
