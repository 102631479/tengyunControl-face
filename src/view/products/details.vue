<!--
 * @Author: Echo
 * @Date: 2020-02-20 13:49:53
 * @LastEditors: Echo
 * @LastEditTime: 2020-02-21 15:47:02
 * @FilePath: \open-platform-ui\platform-pc-ui\src\view\scheme\details.vue
 -->
<template>
  <div class="page">
    <!-- 占位广告图 -->
    <div class="banner">
      <div class="banner-text"> 
        <div class="banner-video">
          <span class="f-size-38">
            <!-- 刷脸就行  -->
            {{productsDel.bannerHeadline}}  
          </span>
          <img src="../../assets/images/product/ic_bf_b.png" alt="" class="videoImg" @click="bannerVideo">
        </div>
        <p class="f-size-16">
          <!-- 刷脸即可完成支付，准确率高，安全可靠，有效提升购物体验 -->
          {{productsDel.bannerText}}
        </p>
        <Button type="primary" @click="startUse">立即体验</Button>
      </div>
      <!-- <img src="@/assets/images/product/banner_sljx_cp.png" /> -->
       <img :src="productsDel.bannerUrl" style="height:336px" />
    </div>
    <!-- 产品段落描述和图文展示 -->
    <div class="product-detail content-box">
      <div class="product-detail-info content-box-info flex">
        <div class="product-detail-text">
          <p class="f-size-18">
            <!-- 刷脸就行 -->
            {{productsDel.businessName}}
            </p>
          <span class="f-size-14">
            <!-- 刷脸就行是“一部手机游云南”项目中，基于微信刷脸支付平台打造的一套全新的O2O双端智慧商业平台，一家基于
            微信刷脸支付服务实现电子会员应用系统。在综合性度假景区，免除繁复的购买、预订、核验环节，实现吃喝玩乐
            的刷脸就行。基础功能定义为微信卡券核验、会员刷脸扣费扣次应用、智慧商业和电子支付四项功能，并配套开发了无人书吧、
            无人自助服务驿站、无人超市等应用。在未来，我们将刷脸就行定位为本地服务电商，专门提供各式各样会员卡技术服务及市
            场功能，全面实现旅各行各业的刷脸就行！ -->
            {{productsDel.deputyText}}
            </span>
        </div>
        <!-- <img src="@/assets/images/product/img_sljx_cp.png" alt="" /> -->
        <img :src="productsDel.pictureUrl" alt="" />
      </div>
    </div>
    <!-- 内容模块 -->
    <!-- 如果所有模块的数据都为空就显示空状态页面 -->
    <div v-if="true">
      <!-- 产品特性 -->
      <div class="product-features content-box">
        <span class="content-title f-size-30">产品特性</span>
        <div class="flex product-features-list content-box-info">
          <div
            class="product-features-box"
            v-for="(item, index) in productsDel.characterList"
            :key="index"
          >
            <img :src="item.characterUrl" alt="" />
            <p class="f-size-18">{{item.mainHeading}}</p>
            <span class="f-size-14">
              <!-- 同时支持移动智能终端和刷脸智能终端双端的电商交易。双端销售产品一致；双端同时满足线上线下全部客户需求；双端采用统一商户系统管理；双端覆盖100%业务范围。 -->
             {{item.deputyText}}
            </span>
          </div>
        </div>
      </div>
      <!-- 应用场景 -->
      <div class="use-scene content-box">
        <span class="content-title f-size-30">应用场景</span>
        <div class="use-scene-info content-box-info flex">
          <Tabs>
            <TabPane
              v-for="(item, index) in productsDel.useSceneList"
              :label="item.category"
              :key="index"
            >
              <div class="use-scene-content">
                <span class="f-size-16">
                  <!-- 刷脸就行应用到智慧景区中可实现“吃住行游购娱展演赛”刷脸就行，免除繁复的购买、预订、核验环节。游客可通过小程序订购单一产品、组合产品、年卡等产品。可通过线下刷脸终端机、刷脸闸机进行核验。 -->
                  {{item.text}}
                </span>
                <!-- <img src="@/assets/images/scheme/banner_sljx_jjfa.png" alt="" /> -->
                <img :src="item.iconUrl" alt="" style="height:320px"/>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
      <!-- 客户案例 -->
      <div class="customer-case content-box">
        <span class="content-title f-size-30">客户案例</span>
        <div class="customer-case-list content-box-info flex">
          <div
            class="customer-case-box flex"
            v-for="(item, index) in productsDel.clientCaseList"
            :key="index"
          >
            <img :src="item.pictureUrl" alt="" />
            <div class="customer-case-content">
              <p class="f-size-18">{{item.companyName}}</p>
              <!-- <p class="f-size-14">全域旅游数字化平台</p> -->
              <span class="f-size-14">
                <!-- 使用智慧文旅云的未来票房和刷脸就行产品
                ，大大提升了核验的效率，游客可快速入园，票务产品丰富，操作编便捷。 -->
                {{item.caseDescribe}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 空状态dom -->
    <div class="flex empty-dom" v-else>
      <img src="@/assets/images/scheme/e-img_kong.png" alt="" />
      <div class="empty-dom-text">
        <p class="f-size-14">当前页面即将开放，敬请期待~</p>
        <Button type="primary" @click="$router.go(-1)">返回上一级</Button>
      </div>
    </div>
    <!-- 联系我们 -->
    <div class="contact-us content-box">
      <div class="contact-us-info content-box-info flex">
        <div class="contact-us-box flex">
          <p class="contact-us-title f-size-24">开始使用智慧文旅云 {{productsDel.businessName}}</p>
          <span class="f-size-16">{{productsDel.productDescribe}}</span>
          <!-- <span class="f-size-16">刷脸就行</span> -->
          <Button type="primary" @click="startUse">开始使用</Button>
        </div>
        <div class="contact-us-box flex">
          <p class="contact-us-title f-size-24">联系我们</p>
          <span class="f-size-16">我们为您提供个性化的售前购买咨询服务，</span>
          <span class="f-size-16">以及全面的技术售后服务</span>
          <Button type="primary" ghost>联系我们</Button>
        </div>
      </div>
    </div>
    <!-- 播放器 -->
    <Modal
      v-model="modalVideo"
      :closable="false"
      :footer-hide="true"
    >
      <video v-if="modalVideo" :src="productsDel.videoUrl" controls="controls" style="display: block;"></video>
      <div class="deleVideo" @click="modalVideo=false">
        <img src="../../assets/images/ic_gb.png" alt="">
      </div>
    </Modal>
  </div>
</template>

<script>
import {getProductsDetail} from '../../api/products.js'
export default {
  data() {
    return {
      detlilID:'',
      productsDel:{},
      modalVideo:false,
    };
  },
  created() {
    // console.log(this.$route.query.id) //GET
    // console.log(this.$route.params)  //POST
    // this.detlilID=this.$route.params.id
    
    // this.detlilID=this.$route.query.id
    // this.init(this.detlilID)
    this.init('1372825594884665344')
  },
  methods: {
    init(id){
      getProductsDetail(id).then(res=>{
        this.productsDel=res.data
        console.log(res.data,4444);
      }).catch(err=>{console.log(err);})
    },
    bannerVideo(){
      this.modalVideo=true
    },
    startUse(){
      console.log('我是产品地址')
      // window.open(this.productsDel)
    }
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "./details.scss";
/deep/.ivu-tabs-nav-scroll {
  display: flex;
  justify-content: center;
  .ivu-tabs-nav .ivu-tabs-tab {
    font-size: 18px;
  }
}
</style>