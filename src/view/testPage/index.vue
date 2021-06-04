<template>
  <div class="mod">
    
    <div class="box" :index="0">
      <img
        class="bd"
        :index="1"
        src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/4c3eeca0b03c11eaa96d7161cebac85b.png"
      />
      <span class="main" :index="1" :lines="1">简约咖啡杯单碟杯</span>
      <span class="submain" :index="0" :lines="1">30年出口欧洲</span>
      <div class="row">
        <div class="priceWrap">
          <span class="yuan" :index="3" :lines="1">￥</span>
          <span class="price" :index="4" :lines="1">78.00</span>
        </div>
        <span class="text" :index="2" :lines="1">已售20234</span>
      </div>
      <div class="ft">
        <div class="block" :index="3">
          <span class="text_2" :index="2" :lines="1">领优惠券</span>
        </div>
        <div class="group" :index="1">
          <span class="txt" :index="0" :lines="1">立即购买</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      constants: {},
    };
  },
  methods: {},
};
</script>
<style src="./index.response.css" />
