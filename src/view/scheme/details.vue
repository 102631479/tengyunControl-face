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
        <!-- <p class="f-size-38">{{list.bannerHeadline}}</p>
        <span class="f-size-16">
          {{list.bannerText}} -->
        <!-- 刷脸即可完成支付，准确率高，安全可靠，有效提升购物体验 -->
        <!-- </span> -->

        <div class="banner-video">
          <span class="f-size-38">
            <!-- 刷脸就行  -->
            {{ list.bannerHeadline }}
          </span>
          <img
            v-if="bannerVideoIs"
            src="../../assets/images/product/ic_bf_b.png"
            alt=""
            class="videoImg"
            @click="bannerVideo"
          />
        </div>
        <p class="f-size-16">
          <!-- 刷脸即可完成支付，准确率高，安全可靠，有效提升购物体验 -->
          {{ list.bannerText }}
        </p>
      </div>
      <!-- <img src="@/assets/images/scheme/banner_sljx_jjfa.png" /> -->
      <img :src="list.bannerPictureUrl" style="height: 336px" />
    </div>
    <!-- 内容模块 -->
    <!-- 如果所有模块的数据都为空就显示空状态页面 -->
    <div v-if="list">
      <!-- 方案优势 -->
      <div class="plan-advantage content-box">
        <span class="content-title f-size-30">方案优势</span>
        <div class="flex plan-advantage-list content-box-info">
          <div
            class="plan-advantage-box flex"
            v-for="item in list.superiorityList"
            :key="item.id"
          >
            <!-- <img src="@/assets/images/scheme/jiejuefangan.png" alt="" /> -->

            <img :src="item.pictureUrl ? item.pictureUrl : ''" alt="" />

            <p class="f-size-18">
              {{ item.theme }}
              <!-- 双端O2O的电商模式 -->
            </p>
            <span class="f-size-14">
              {{ item.deputyText }}
              <!-- 同时支持移动智能终端和刷脸智能终端双端的电商交易。 -->
            </span>
          </div>
          <!-- <div class="plan-advantage-box flex">
            <img src="@/assets/images/scheme/jiejuefangan.png" alt="" />
            <p class="f-size-18">人脸识别</p>
            <span class="f-size-14">
              刷脸支付依托微信刷脸支付服务打造，采用结构光双目摄像头更安全更稳定。
            </span>
          </div>
          <div class="plan-advantage-box flex">
            <img src="@/assets/images/scheme/jiejuefangan.png" alt="" />
            <p class="f-size-18">刷脸自助无人服务</p>
            <span class="f-size-14">
              无人服务可以为刷脸就行的会员提供各类无人共享服务。
            </span>
          </div>
          <div class="plan-advantage-box flex">
            <img src="@/assets/images/scheme/jiejuefangan.png" alt="" />
            <p class="f-size-18">集团化运营</p>
            <span class="f-size-14" >
              集团-景区-商户-子商户-门店的多级架构需求。
            </span>
          </div> -->
        </div>
      </div>
      <!-- 解决方案架构 -->
      <div class="plan-framework content-box">
        <span class="content-title f-size-30">解决方案架构</span>
        <div class="plan-framework-info content-box-info flex">
          <img :src="ArchitectureUrl.pictureUrl" alt="" />
          <div class="plan-framework-text flex">
            <p class="f-size-18">{{ ArchitectureUrl.headline }}</p>

            <p>{{ ArchitectureUrl.text }}</p>
          </div>
        </div>
      </div>
      <!-- 使用场景 -->
      <div class="use-scene content-box">
        <span class="content-title f-size-30">使用场景</span>
        <div class="use-scene-info content-box-info flex">
          <Tabs>
            <TabPane
              :label="item.headline"
              v-for="(item, index) in ScenesList"
              :key="index"
            >
              <div class="use-scene-content">
                <span class="f-size-16">
                  <!-- 刷脸就行应用到智慧景区中可实现“吃住行游购娱展演赛”刷脸就行，免除繁复的购买、预订、核验环节。游客可通过小程序订购单一产品、组合产品、年卡等产品。可通过线下刷脸终端机、刷脸闸机进行核验。 -->
                  {{ item.text }}
                </span>

                <img :src="item.pictureUrl ? item.pictureUrl : ''" alt="" />
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
      <!-- 客户与合作案例 -->
      <div class="teamwork-case content-box">
        <span class="content-title f-size-30">客户与合作案例</span>
        <div class="teamwork-case-info content-box-info flex">
          <div class="swiper-prev" @click="handleSwiper('prev')">
            <Icon type="ios-arrow-back" size="32" color="#666666" />
          </div>
          <swiper ref="mySwiper" :options="swiperOption" class="swiper-wrapper">
            <swiper-slide
              class="swiper-slide"
              v-for="(item, index) in Cooperation"
              :key="index"
            >
              <div class="case-swiper-box flex">
                <img :src="item.pictureUrl ? item.pictureUrl : ''" alt="" />

                <p class="f-size-18">{{ item.companyName }}</p>
                <span class="f-size-14">
                  {{ item.description }}
                </span>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-next" @click="handleSwiper('next')">
            <Icon type="ios-arrow-forward" size="32" color="#666666" />
          </div>
        </div>
      </div>
      <!-- 相关产品 -->
      <div class="related-product content-box">
        <span class="content-title f-size-30">相关产品</span>
        <div class="related-product-list content-box-info">
          <div
            class="related-product-box flex hardclass"
            v-for="(item, index) in productList"
            :key="index"
            @click="productListPush(item.id)"
          >
            <img src="@/assets/images/scheme/jiejuefangan.png" alt="" />
            <div class="related-product-text">
              <p class="f-size-18">{{ item.businessName }}</p>
              <span class="f-size-14">
                <!-- 刷脸就行是基于微信刷脸支付平台打造是一套全新的O2O双端智慧商业平台，一家基于微信刷脸支付服务实现电子会员应用系统。员刷脸扣费扣次应用、智慧商业和电子支付四项功能，并配套开发了无人书吧、无人自助服务驿站、无人超市等应用。刷脸就行定位为本地服务电商，并像美团一样全国布局，专门提供各式各样会员卡技术服务及市场功能，全面实现旅各行各业的刷脸就行！ -->
                {{ item.productDescribe }}
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
        <!-- <div class="contact-us-box flex">
          <p class="contact-us-title f-size-24">开始使用智慧文旅云 {{list.businessName}}</p> -->
        <!-- <span class="f-size-16">轻松体验</span>
          <span class="f-size-16">刷脸就行</span> -->
        <!-- <span class="f-size-16">{{list.businessDescribe}}</span>
          <Button type="primary">开始使用</Button>
        </div> -->
        <div
          class="contact-us-box flex"
          style="margin: 0 auto; padding-left: 16px"
        >
          <p class="contact-us-title f-size-24">联系我们</p>
          <span class="f-size-16">我们为您提供个性化的售前购买咨询服务，</span>
          <span class="f-size-16">以及全面的技术售后服务</span>
          <Button type="primary" ghost @click="gonavJump">联系我们</Button>
        </div>
      </div>
    </div>
    <!-- 播放器 -->
    <Modal v-model="modalVideo" :closable="false" :footer-hide="true">
      <video
        v-if="modalVideo"
        :src="list.videoUrl"
        controls="controls"
        style="display: block; width: 700px; height: 390px"
      ></video>
      <div class="deleVideo" @click="modalVideo = false">
        <img src="../../assets/images/ic_gb.png" alt="" />
      </div>
    </Modal>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import { Swiper } from "vue-awesome-swiper";
import { getSolutions } from "@/api/solution";
export default {
  components: {
    Swiper,
  },
  data() {
    return {
      bannerVideoIs: false,
      url: "",
      list: [],
      videoUrlData: "",
      modalVideo: false, //播放弹窗关闭
      ArchitectureUrl: {}, //解决方案架构
      ScenesList: [], //使用场景
      Cooperation: [], //合作案例
      productList: [], //相关产品
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: false, // 允许点击小圆点跳转
        },
        loop: true, //无限循环
        slidesPerView: 3,
        spaceBetween: 7,
      },
    };
  },
  created() {
    this.init();
    console.log("11");
    this.$bus.on("schemeDetail-router", () => {
      // console.log("更新数据111111111111");
      this.swiper.slideTo(3, 1000, true);
      this.init();
    });
  },
  methods: {
    //播放器
    bannerVideo() {
      this.modalVideo = true;
    },
    productListPush(id) {
      console.log(id, "我是id");
      this.$router.push({
        path: "/productDetail",
        query: { id },
      });
    },
    handleSwiper(type) {
      if (type == "prev") {
        this.swiper.slidePrev();
      }
      if (type == "next") {
        this.swiper.slideNext();
      }
    },
    init() {
      //详情
      console.log("我在这里");
      getSolutions(this.$route.query.id)
        .then((res) => {
          // console.log(res)
          this.list = res.data;
          console.log(this.list, " this.list");
          this.videoUrlData = res.data.videoUrl;
          //解决方案架构
          if (res.data.videoUrl == "") {
            this.bannerVideoIs = false;
          } else {
            this.bannerVideoIs = true;
          }
          console.log("res.data.videoUrl");
          if (res.data.frameworkList == "") {
            let data = {
              pictureUrl: "空",
              headline: "空",
              text: "空",
            };
            this.ArchitectureUrl = data;
          } else {
            this.ArchitectureUrl = res.data.frameworkList[0];
          }
          // this.ArchitectureUrl = res.data.frameworkList[0];

          console.log(res.data.frameworkList == "", "res.data.frameworkList");

          //使用场景
          this.ScenesList = res.data.scenarioList;
          //合作案例
          this.Cooperation = res.data.clientelePartnerList;
          //相关产品
          this.productList = res.data.productList;
          // console.log(this.list);
        })
        .catch((err) => {
          // console.log(err)
        });
    },
    gonavJump() {
      //跳转联系我们
      this.$router.push({
        //GET
        path: "/contact",
        // query:{id}
      });
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.swiper.slideTo(3, 1000, true);
  },
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
.hardclass {
  cursor: pointer;
  transition: 0.5s;
}
.hardclass:hover {
  border-radius: 10px;
  border: none;
  background: rgb(247, 247, 247);
  margin-top: 1px;
}
</style>