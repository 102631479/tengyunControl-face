<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: huangfu
 * @Date: 2020-09-14 16:21:23
 * @LastEditors: huangfu
 * @LastEditTime: 2020-10-31 17:29:02
-->
<template>
  <div id="app">
    <router-view v-show="$route.name" />
    <!-- 客服 -->
    <customerService />
  </div>
</template>

<script>
// import { mapState } from "vuex";
import customerService from "_c/customerService";
export default {
  name: "App",
  components: { customerService },
  data() {
    return {};
  }
  // computed:{
  //     ...mapState('microApp', ['content']),
  //     ...mapState('microApp', ['mircoAppLoading']),
  // },

  // watch: {
  //   '$route'(to, from) {
  //       // console.log(to)
  //       // console.log('路由')
  //   }
  // }
};
</script>

<style lang="scss"></style>
