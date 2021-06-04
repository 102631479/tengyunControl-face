<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: huangfu
 * @Date: 2020-09-14 16:21:23
 * @LastEditors: huangfu
 * @LastEditTime: 2020-10-13 16:48:38
-->
<template>
  <div class="flex">
    <div style="width: 420px;">
      <div class="flex">
          <div class="cup ml-10" @click="scanStr = 'wechat_enterprise' ">企业微信</div>
          <div class="cup ml-10" @click="scanStr = 'wechat_open' ">微信</div>
          <div class="cup ml-10" @click="scanStr = 'wechat_mp' ">微信公众号</div>
          <div class="cup ml-10" @click="scanStr = 'qq' ">QQ</div>
          <div class="cup ml-10" @click="scanStr = 'weibo' ">微博</div>
      </div>
      <iframe frameborder="0" style="width: 100%; height: 380px;" :src="src" />
      <div class="flex border-box">
        <div
          @click="$router.push({name: 'regist'})"
          class="flex-sub f-size-14 cup t-center pt-14 color-333 pb-14 m-6"
          style="border-right: 1px dotted #bbb;"
        >立即注册</div>
        <div
          class="flex-sub f-size-14 cup t-center pt-14 color-333 pb-14 m-6"
          @click="$router.push({ name: 'setPwd' })"
        >忘记密码</div>
      </div>
    </div>
  </div>
</template>

<script>
import { scanLogin } from "@/api/user";
export default {
  data() {
    return {
      scanStr: 'wechat_enterprise',
      src: ""
    };
  },
  watch: {
    scanStr(val) {
      this.checkSan(val)
    }
  },
  created() {
    this.checkSan('wechat_enterprise')
  },
  methods: {
    checkSan(str) {
      scanLogin(str).then(d => {
        this.src = d.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.border-box {
  margin-top: 30px;
  border-top: 1px dotted #bbb;
  border-bottom: 1px dotted #bbb;
}
</style>