<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: huangfu
 * @Date: 2020-10-31 17:22:44
 * @LastEditors: huangfu
 * @LastEditTime: 2020-10-31 17:45:02
-->
<template>
      <div id="subView" class="sub-content-wrap" v-html="content">111</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed:{
      ...mapState('microApp', ['content']),
      ...mapState('microApp', ['mircoAppLoading']),
  },
}
</script>

<style>

</style>