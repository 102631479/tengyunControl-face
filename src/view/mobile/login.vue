<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: huangfu
 * @Date: 2020-12-07 16:42:29
 * @LastEditors: 大司马
 * @LastEditTime: 2020-12-22 18:07:58
-->
<template>
  <div class="min">
    <!-- <iframe src="" frameborder="0"></iframe> -->
    <iframe 
      :src="`http://tm.zhihuiwenlvyun.com/#/regist?invitationCode=${$route.query.invitationCode}&invitationName=${$route.query.invitationName}`" 
      seamless width="100%" height="100%" frameborder="0" name="youdaoFrame"></iframe>
    <!-- login-module -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      invitationCode:'',
      invitationName:''
    }
  },
  beforeMount(){
    console.log(this.$route.query.invitationCode);
    
  }
}
</script>

<style>
.min{
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}
/* .customer{
  display: none;
} */
</style>