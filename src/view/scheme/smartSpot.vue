<!-- 智慧景区 -->
<template>
  <div class="container">
    <div class="title-img-box">
      <img class="title-img" src="../../assets/images/Smart-scenic-spot.png" alt />
    </div>
    <div class="content-title-box">
      <div class="content-title">
        <ul class="content-title-ul">
          <li class="content-title-li">
            <img src="../../assets/images/ball.png" alt />
            <p>全域旅游更方便</p>
            <section>支持大范围全域旅游区域及区域内景区 旅游的互跳能力，对应不同的服务完美 契合旅游场景。</section>
          </li>
          <li class="content-title-li">
            <img src="../../assets/images/eye.png" alt />
            <p>AI助力更省心</p>
            <section>支持大范围全域旅游区域及区域内景区旅游的互跳能力，对应不同的服务完美契合旅游场景。</section>
          </li>
          <li class="content-title-li">
            <img src="../../assets/images/game.png" alt />
            <p>游戏互动更有趣</p>
            <section>提供丰富的游戏玩法，增加景区游玩的趣味性，同时可以各种景区活动，增加游客在景区内的停留时长。</section>
          </li>
          <li class="content-title-li">
            <img src="../../assets/images/Collimation.png" alt />
            <p>大数据检测更安全</p>
            <section>结合腾云的数据能力，对景区游客属性进行分析，同时预测未来人流趋势等信息，更加便于景区的营销和安全管理。</section>
          </li>
          <div class="flexseizeASeat"></div>
          <div class="flexseizeASeat"></div>
          <div class="flexseizeASeat"></div>
        </ul>
      </div>
    </div>
    <!-- 更多服务 -->
    <div class="more-box">
      <div class="more-title-box">
        <span>更多服务场景</span>
      </div>
      <div class="more-content-box">
        <ul class="more-content-box-ul">
          <li>
            <img src="../../assets/images/Village.png" alt />
            <p>
              大型园区可以通过智慧景区解决方案为来访客人提供微信小程序地图导游导览，园区内服务的查询以及服务投诉等功能
              解约引导等人员的人力投入。
            </p>
          </li>
          <li>
            <img src="../../assets/images/school.png" alt />
            <p>
              大学校园可以通过智慧景区解决方案打造校园特色景点，提供校园的整体概览导航，以及相应特色活动的信息批漏和学
              生线下线上的互动体验。
            </p>
          </li>
          <li>
            <img src="../../assets/images/ZOAWD.png" alt />
            <p>大型l乐园可以通过智慧景区解决方案为客人提供智慧化导览服务，使客人在乐园内更加便捷的游玩同时结合游戏玩法提供的营销能力，为乐园带来更多的流量。</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 精选客户案例 -->
    <div class="customer-box">
      <div class="customer-box-content">
        <div class="customer-title-box">
          <span>精选客户案例</span>
        </div>
        <div class="customer-btn-box" id="btn">
          <div class="btn-left" id="leftSwper">
            <img src="../../assets/images/left.png" alt />
          </div>
          <div class="btn-right"  id="RightSwper">
            <img src="../../assets/images/right.png" alt />
          </div>
        </div>
        <!-- <div class="customer-contene-box" v-for="(item,index) in customerData" :key='index' >
          <div class="customer-contene-img-box">
            <img :src="item.img" alt />
          </div>
          <div class="customer-line"></div>
          <div class="customer-content-text">
            <span>{{item.title}}</span>
            <section>{{item.content}}</section>
          </div>
        </div>-->
        <!-- -------------- -->
        <div class="swper-box">
          <div class="swiper-container">
            <swiper ref="mySwiper" :options="swiperOption" class="swiper-wrapper">
              <swiper-slide class="swiper-slide" v-for="(item,index) in customerData" :key="index">
                <div class="swper-li">
                  <div class="swper-li-img">
                    <img :src="item.img" alt />
                  </div>
                  <div class="customer-line"></div>
                  <div class="customer-content-text">
                    <span>{{item.title}}</span>
                    <section>{{item.content}}</section>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
    <!-- 合作伙伴 -->
    <div class="partner-box">
      <div class="partner-title-box">
        <span>合作伙伴</span>
      </div>
      <div class="spot-partner-content-box">
        <div class="partner-left">
          <div>
            <img src="../../assets/images/parner-blue.png" alt />
          </div>
          <div class="partner-left-text">
            <span>东华云计算有限公司</span>
            <section>深耕智慧化旅游行业，以区域旅游资源普查为切入点，以景区为中心、游客为核心，整合周边旅店、商家、物资等资源，将游客变为高粘性的移</section>
          </div>
        </div>
        <div class="partner-right">
          <div>
            <img src="../../assets/images/parner-yellow.png" alt />
          </div>
          <div class="partner-right-text">
            <span>索斯派克（北京）科技有限公司</span>
            <section>索斯派克（北京）科技有限公司专注于服务国内外只会景区建设，为旅游行业提供相关只会旅游软硬件开发服务；提供智慧伴游，虚拟现实，增强现实，视觉科技，人工智能核心技术的完美解决方案。</section>
          </div>
        </div>
      </div>
    </div>

    <!-- 关联相关产品 -->

    <div class="relative-box">
      <p class="relativ-title">关联相关产品</p>
      <div class="list">
        <div class="item" @click="linkToPro">
          <img :src="require('../../assets/images/tic_dashuju.png')" class="imgs" alt="">
          <div class="right-box">
            <p class="title">大数据平台</p>
            <p class="desc">让您轻松具备大数据处理与精准推荐能力，大数据处理套件 安全、易用的全流程大数据处理平台 </p>
          </div>
        </div>  
        <div class="item" @click="linkToPro">
          <img :src="require('../../assets/images/ic_xiangmuguanli.png')" class="imgs" alt="">
          <div class="right-box">
            <p class="title">大数据可视化平台</p>
            <p class="desc">让您轻松具备大数据处理与精准推荐能力，大数据处理套件 安全、易用的全流程大数据处理平台 </p>
          </div>
        </div> 
        <div class="item" @click="linkToPro">
          <img :src="require('../../assets/images/ic_cesuo1.png')" class="imgs" alt="">
          <div class="right-box">
            <p class="title">刷脸就行</p>
            <p class="desc">让您轻松具备大数据处理与精准推荐能力，大数据处理套件 安全、易用的全流程大数据处理平台 </p>
          </div>
        </div>  
      </div>
    </div>
    <!-- 联系我们 -->
    <div class="contact-box">
      <div class="contact-title">
        <span>联系我们</span>
      </div>
      <div class="contact-content">
        <span>关于适用场景和技术架构的更多咨询，请联系我们的销售和技术支持团队。</span>
      </div>
      <div class="contact-we">
        <router-link to="contact" tag="span">
        <span>联系我们</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import 'swiper/css/swiper.css'
import { Swiper } from 'vue-awesome-swiper'
export default {
  name: 'scenic',
  components: {
    Swiper
  },
  // directives: {
  //   swiper: directive
  // },
  data() {
    return {
      swiperOption: {
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: false // 允许点击小圆点跳转
        // },
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false // 手动切换之后继续自动轮播
        // },
        loop: true,
        navigation: {
          nextEl: '.btn-right',
          prevEl: '.btn-left'
        }
      },
      index: 1,
      customerData: [
        {
          img: '/static/Calligraphy.png',
          title: '重庆市武隆区',
          content:
            '重庆市武隆区与腾讯签约“一部手机游武隆”战略合作的旅游区，打造了武隆区整体及区内多个景区一体化的小程序矩阵。游客可以在小程序中结合特色手绘地图查看武隆区整体及区内景区信息，收听特色的语音讲解，查看个性化线路推荐。此外还可以参加特色的线上线下互动游戏。武隆区及景区则可以在后台通过大数据了解各个景区的实时及趋势情况，便于景区的安全运营管理。'
        },
        {
          img: '/static/Calligraphy.png',
          title: '重庆市武隆区',
          content:
            '重庆市武隆区与腾讯签约“一部手机游武隆”战略合作的旅游区，打造了武隆区整体及区内多个景区一体化的小程序矩阵。游客可以在小程序中结合特色手绘地图查看武隆区整体及区内景区信息，收听特色的语音讲解，查看个性化线路推荐。此外还可以参加特色的线上线下互动游戏。武隆区及景区则可以在后台通过大数据了解各个景区的实时及趋势情况，便于景区的安全运营管理。'
        }
      ]
    }
  },
  created() {},
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    linkToPro() {
      this.$router.push({
        path: '/products'
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import './smartSpot.less';

</style>