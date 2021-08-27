<template>
  <Layout class="container-box">
    <div class="sticky" @mouseleave="isNavShow = false">
      <Header class="header-box">
        <div class="header-top">
          <div class="page-contents">
            <div class="logo-box">
              <img :src="require('../../assets/images/logo.png')" alt="" />
            </div>
            <div class="tool-box">
              <Input
                v-model="searchVal"
                icon="ios-search"
                placeholder="请输入你要搜索的关键词"
                style="width: 45%; max-width: 240px"
              />
              <div v-if="$store.state.user.isLogin">
                <span class="control-panel cup" @click="onChangePage()"
                  >控制台</span
                >
                <Dropdown>
                  <span class="cup color-fff">{{
                    $store.state.user.userInfo.userName || "退出登录"
                  }}</span>
                  <DropdownMenu slot="list">
                    <DropdownItem>
                      <div style="text-align: center" @click="loginOut">
                        退出登录
                      </div>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="page-contents">
          <div class="header-bottom">
            <ul class="nav-list flex">
              <li
                class="f-size-14 cup flex"
                v-for="(item, index) in configNav"
                :key="index"
                @mouseover="
                  expandType = item.expandType;
                  currentLiIndex = index;
                  isNavShow = item.children.length > 0 ? true : false;
                "
                :class="{
                  'nav-list-hover': currentLiIndex == index && isNavShow,
                }"
                @click="handleNavJump(item, 1, '我是首页产品解决方案')"
              >
                <span
                  v-if="item.useFlag"
                  :style="{
                    color: currentLiIndex == index ? '#0084FF !important' : '',
                  }"
                  >{{ item.name }}</span
                >
              </li>
            </ul>
          </div>
          <div class="login-box cup" v-if="!$store.state.user.isLogin">
            <router-link :to="{ path: '/login' }">
              <span class="color-fff mr-20">登录</span>
            </router-link>
            <router-link :to="{ path: '/regist' }">
              <span class="register">免费注册</span>
            </router-link>
          </div>
        </div>
      </Header>
      <!-- 导航栏遮罩 -->
      <div class="flex nav-content" v-if="isNavShow">
        <ul class="nav-tab flex" v-if="expandType == 'left'">
          <li
            v-for="(item, index) in configNav[currentLiIndex].children"
            :key="index"
            @mouseover="
              navChildrenList = item.children;
              currentTabIndex = index;
            "
            class="f-size-16 cup"
            :class="{
              'nav-tab-hover': currentTabIndex == index,
            }"
            @click="handleNavJump(item, 2, '导航栏遮罩')"
          >
            {{ item.name }}
          </li>
        </ul>
        <!-- 三级导航 -->
        <ul
          class="nav-tab-item"
          :style="{ columns: expandType == 'left' ? '4' : '3' }"
        >
          <li
            class="nav-tab-item-box"
            v-for="(item, index) in navChildrenList"
            :key="index"
          >
            <p
              class="f-size-14 cup second-nav-tab"
              @mouseenter="getNavIndex(index)"
              :class="{
                'nav-tab-hovers': TabIndex == index,
              }"
              @click="handleNavJump(item, 3, '三级导航')"
            >
              {{ item.name }}
            </p>
            <!-- 产品列表 -->
            <ul v-if="TabIndex == index" class="nav-tab-item-name">
              <li
                class="f-size-12 cup tab-nav-item"
                v-for="(child, childIndex) in item.navigateBusinessVos"
                @click="handleNavJump(child, 4, '产品列表')"
                :key="childIndex"
              >
                <p class="proLists">{{ child.businessName }}</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <Content class="content-box">
      <router-view />
    </Content>
    <Footer class="footer-box">
      <div class="footer-top">
        <ul class="service-list">
          <li>
            <span class="item-img">
              <img src="../../assets/images/rmb.png" alt />
            </span>
            <span>7天无理由退款</span>
          </li>
          <li>
            <span class="item-img">
              <img src="../../assets/images/people.png" alt />
            </span>
            <span>大客户服务</span>
          </li>
          <li>
            <span class="item-img">
              <img src="../../assets/images/tel.png" alt />
            </span>
            <span>7×24小时服务</span>
          </li>
        </ul>
        <div class="tel-box">购买咨询：18201401676</div>
      </div>
      <div class="line"></div>
      <div class="footer-main-bottom">
        <div footer-bottom>
          <ul class="product-list">
            <li>信息发布</li>
            <li>智慧厕所</li>
            <li>数字孪生平台</li>
            <li>刷脸就行</li>
            <li>友情链接</li>
          </ul>
          <div class="copyright">
            华夏票联 版权所有 Copyright © 2013 - 2020 All Rights Reserved.
          </div>
        </div>
        <!-- <div class="loginCls">
          <p>登录</p>
          <Icon type="ios-arrow-down"></Icon>
        </div> -->
      </div>
    </Footer>
  </Layout>
</template>

<script>
import { getUserInfo } from "@/api/user";

import { mapMutations, mapActions, mapGetters, mapState } from "vuex";
import { navigateTree } from "@/api/home";
import User from "@/components/main/components/user";
import Cookies from "js-cookie";
import "./main-front.less";
import store from "@/store";

export default {
  name: "MainFront",
  components: {
    User,
  },
  data() {
    return {
      searchVal: "", //搜索关键词绑定字段
      isNavShow: false, //导航类目弹框状态控制
      configNav: [], //导航类目数据
      expandType: "left", //当前类目展示样式
      currentLiIndex: null, //当前鼠标滑过选中导航的对应下标
      currentTabIndex: 0, //当前选中导航下的选中tab的对应下标
      navChildrenList: [], //tab切换对应的数组
      TabIndex: 0, // 二级导航下标
      Tabkey: 0,
    };
  },
  computed: {
    ...mapState("microApp", ["mircoAppLoading"]),
    ...mapGetters(["errorCount"]),
    unreadCount() {
      return this.$store.state.user.unreadCount;
    },
    userAvatar() {
      return this.$store.state.user.avatarImgPath;
    },
    userName() {
      return this.$store.state.user.userName;
    },
  },
  watch: {
    // 监听导航当前下标对导航遮罩做操作
    currentLiIndex(val) {
      if (this.isNavShow == true) {
        this.navChildrenList =
          this.expandType == "left"
            ? this.configNav[val].children[0].children
            : this.configNav[val].children;
      }
    },
    // 监听导航遮罩的状态进行处理效果
    isNavShow(val) {
      if (!val) {
        this.currentLiIndex = null;
        this.currentTabIndex = 0;
      }
    },
  },
  created() {
    // 初始化导航栏
    this.getConfigNav();
  },
  methods: {
    ...mapActions(["handleLogOut"]),
    onChangePage() {
      let url = "http://192.168.2.65:10002/";
      if (process.env.NODE_ENV === "production") {
        // 生产
        url = "http://console.zhihuiwenlvyun.com/";
      } else if (process.env.NODE_ENV === "testing") {
        // 测试
        url = "http://tconsole.zhihuiwenlvyun.com/";
      } else {
        // 开发
        url = "http://192.168.2.65:10002/#/home";
      }
      let data = this.$store.state.user.token;
      document.cookie = `token=${data}; path=/; domain=wdblog.top;`;
      Cookies.set("token", data);
      getUserInfo()
        .then((res) => {
          console.log(res);
          window.open(url);
        })
        .catch((err) => {
          console.log(err);
          this.$router.push("/login");
        });
    },
    loginOut() {
      this.handleLogOut().then(() => {
        if (process.env.NODE_ENV === "development") {
          Cookies.set("token", "", { path: "", expires: 1 });
        } else {
          Cookies.set("token", "", {
            domain: ".zhihuiwenlvyun.com",
            path: "",
            expires: 1,
          });
        }
        this.$router.push("/login");
      });
      this.$store.commit("setIsLogin", false);
      this.$store.commit("setUserId", "");
      this.$store.commit("setUserName", "");
      this.$store.commit("setUserInfo", {});
      this.$store.commit("setToken", "");
    },

    // 获取导航栏数据
    getConfigNav() {
      navigateTree().then((res) => {
        if (res.ret == 0) {
          res.data.map((item) => {
            if (item.children == null || !item.children) {
              item.children = [];
            }
          });
          this.configNav = res.data;
          this.dataMeta(res.data);
        }
      });
    },

    // 控制导航跳转
    handleNavJump(item, hodeUp, data) {
      // console.log("控制导航跳转");
      console.log(item, hodeUp, data, "111111111111111111111");
      // return
      if (data == "我是首页产品解决方案") {
        // console.log("11");
        console.log(item.url);
        // returns
        if (item.jumpFlag) {
          this.$router.push(item.url);
        } else {
          this.$Message.error("没有权限");
        }
      }
      if (data == "产品列表") {
        // console.log(item.id);
        // console.log("跳转详情页");
        let id = item.id;
        let url = item.url;
        console.log(item, hodeUp, data, "22222222222");
        if (hodeUp == "4") {
          if (item.parentCode == "003") {
            this.$router.push({
              //GET
              // path: url,
              path: "/schemeDetail",
              query: { id },
            });
            this.$bus.emit("schemeDetail-router", "ss");
            return;
          }
          if (item.parentCode == "001") {
            this.$router.push({
              //GET
              // path: url,
              path: "/productDetail",
              query: { id },
            });
            this.$bus.emit("schemeDetail-router", "ss");
            return;
          }
        }

        return;
        // if (item.parentCode == "003") {
        if (hodeUp == "4") {
          this.$router.push({
            //GET
            // path: url,
            path: "/schemeDetail",
            query: { id },
          });
          this.$bus.emit("schemeDetail-router", "ss");
          return;
        } else {
          if (url) {
            // window.location.href = `http://${url}`
            // return
            let urll = `http://${url}`;
            // window.open(urll.replaceAll("\\+", "%20").trim());
          } else {
            this.$Message.error("跳转地址为空");
            // alert("地址伟空");
          }
        }

        console.log("http://" + url, "新窗口地址");
        console.log("fanhui");
      }
      return;

      // if (hodeUp == 1 || hodeUp == 2 || hodeUp == 3) {
      //   //一二三级 参数拦截
      //   //文档里面没有四级
      //   if (item.jumpFlag) {
      //     this.$router.push(item.url);
      //   }
      // } else {
      //   //这里是四级 不做拦截 缺少参数来分辨是产品还是方案
      //   this.$router.push(item.url);
      // }
    },

    // 递归处理导航数据
    dataMeta(data) {
      data.map((item) => {
        if (item.children == null || !item.children) {
          item.children = [];
        } else {
          this.dataMeta(item.children);
        }
      });
    },
    getNavIndex(index) {
      this.TabIndex = index;
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.menu_ul {
  width: 130px;
  list-style: none;
  background: #fff;
  border-radius: 3px;
  z-index: 999;
  position: absolute;
  top: 50px;
  display: none;
}

.container-box {
  min-height: 100%;
  position: relative;
  height: auto;
  background-color: #2b303b;
}
.content-box {
  width: 100%;
  background: #f5f5f5;
  padding-bottom: 190px;
}
.header-box {
  background: #2b303b;
  height: auto;
  line-height: normal;
  padding: 0;
}
.header-box .ivu-input {
  height: 36 !important;
}
.header-top {
  height: 40px;
  line-height: 40px;
}
.logo-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 18px;
  height: 40px;
  font-weight: 500;
  color: #fff;
}
.logo-box img {
  height: 20px;
}
.tool-box {
  text-align: right;
  width: 60%;
  max-width: 410px;
}
.header-bottom {
  height: 50px;
  padding: 0 0;
}
.sticky {
  position: sticky;
  z-index: 89;
  top: 0px;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #2b303b;
}
.control-panel {
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  margin: 0 20px 0 20px;
  cursor: pointer;
}
.login-box {
  float: right;
  display: flex;
  align-items: center;
  height: 50px;
  font-size: 14px;
  font-weight: 500;
}
.register {
  width: 80px;
  height: 30px;
  background: rgba(0, 186, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.footer-box {
  width: 100%;
  height: 190px;
  background: #2e3033;
  position: absolute;
  bottom: 0;
  clear: both;
  padding: 0;
}
.footer-top {
  height: 99px;
  max-width: 1200px;
  padding: 0 10px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer-main-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 90px;
  max-width: 1200px;
  padding: 0 10px;
  margin: 0 auto;
}
.service-list {
  flex: 1;
  max-width: 560px;
  display: flex;
}
.service-list li {
  flex: 1;
  height: 50px;
  color: #fff;
  display: flex;
  align-items: center;
}
.item-img {
  margin-right: 14px;
}
.item-img img {
  width: 36px;
  height: 36px;
}
.tel-box {
  width: 197px;
  height: 44px;
  background: #00baff;
  color: #fff;
  line-height: 44px;
  text-align: center;
}
.footer-bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.loginCls {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 197px;
  height: 44px;
  border: 1px solid #6d6f71;

  font-size: 14px;
  line-height: 44px;
  padding-left: 16px;
  padding-right: 14px;
}

.product-list {
  height: 20px;
  margin-bottom: 15px;
}
.product-list li {
  float: left;
  margin-right: 20px;
  color: #ccc;
  height: 20px;
}
.copyright {
  color: #ccc;
}
</style>
