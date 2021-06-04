<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: huangfu
 * @Date: 2020-09-14 16:21:23
 * @LastEditors: 大司马
 * @LastEditTime: 2021-01-18 15:39:09
-->
<template>
  <div class="page">
    <header style="background: #252c36; padding:0 20px;">
      <div class="flex justify-between page-content-login">
        <div
          style="height:60px"
          class=" flex align-center text-bold-500 color-blue cup"
          @click="$router.push({ path: '/' })"
        >
          <img style="height:20px" src="../../assets/images/logo.png" alt="" />
          <!-- <span style="font-size:16px" class="pr-10">智慧文旅云</span> -->
        </div>
        <div class="flex justify-between">
          <!-- <div class="cup color-blue">腾云首页</div>
          <div class="ml-32 mr-32 color-e9">|</div>
          <div class="cup color-blue">帮助文档</div> -->
        </div>
      </div>
    </header>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <div class="color-999 t-center bottom-info">
      Copyright © 2002-2020 Union Ticket . All Rights Reserved. 智慧文旅云
      版权所有
    </div>
  </div>
</template>

<style scoped lang="scss">
.bottom-info {
  // position: absolute;
  // bottom: 15px;
  width: 100%;
  height: 60px;
  line-height: 60px;
}
@media screen and (max-width: 800px) {
  .bottom-info {
    font-size: 12px;
  }
}
.page {
  min-height: 100%;
  background-image: url("~@/assets/images/login-bg.jpg");
  background-size: 100% auto;
}
header {
  background-color: #fff;
  height: 60px;
  line-height: 60px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}
.fade-enter, .fade-leave-to
    /* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0.5;
}
</style>
