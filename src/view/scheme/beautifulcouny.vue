<!-- 智慧景区 -->
<template>
  <div class="container">
    <div class="title-img-box">
      <img
        class="title-img"
        src="../../assets/images/Smart-scenic-spot.png"
        alt
      />
    </div>
    <div class="content-title-box">
      <div class="content-title">
        <ul class="content-title-ul">
          <li class="content-title-li">
            <img src="../../assets/images/ball.png" alt />
            <p>旅游更安全</p>
            <section>
              不仅实名制登记身份证购票，还根据承载量分时段销售门票和验证门票，大大提高旅游安全系数。
            </section>
          </li>
          <li class="content-title-li">
            <img src="../../assets/images/eye.png" alt />
            <p>提高效率</p>
            <section>
              游客手机购买门票，只需绑定支付宝或微信即可支付购买，不仅操作便捷，而且二维码可以多人扫描购买
            </section>
          </li>
          <li class="content-title-li">
            <img src="../../assets/images/game.png" alt />
            <p>扩大营销</p>
            <section>
              游客购买门票即可成为我们的会员，我们会推出优惠卷，通过LBS推广手段实现精准的二次营销
            </section>
          </li>
          <li class="content-title-li">
            <img src="../../assets/images/Collimation.png" alt />
            <p>旅游大数据</p>
            <section>
              通过身份证采集及园区情况，分析游客客源地、团队类型，年龄段、性别、精准的旅游数据信息
            </section>
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
              票务管理系统开创首个全部采用实名制分时分段预约的额景区管理模式，景区纸质门票使
              用率低于2%，游客基本全部采用身份证验证入园。依托于票联手机电子门票和身份证门票
              应用的无纸票景区管理模式，使人工管理成本基本不复存在。
            </p>
          </li>
          <li>
            <img src="../../assets/images/school.png" alt />
            <p>
              2.全网售票模式，满足游客多样化的的购票方式，对应不同的渠道商，实现资源共享，并对
              不同渠道商进行管控合理分配，提高利用率。
            </p>
          </li>
          <li>
            <img src="../../assets/images/ZOAWD.png" alt />
            <p>
              3.多种验票模式，满足不同用户人群需求，为用户提供更多的选择空间，提高验票效率是景
              区更加高效智能化。
            </p>
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
          <div class="btn-right" id="RightSwper">
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
            <swiper
              ref="mySwiper"
              :options="swiperOption"
              class="swiper-wrapper"
            >
              <swiper-slide
                class="swiper-slide"
                v-for="(item, index) in customerData"
                :key="index"
              >
                <div class="swper-li">
                  <div class="swper-li-img">
                    <img :src="item.img" alt />
                  </div>
                  <div class="customer-line"></div>
                  <div class="customer-content-text">
                    <span>{{ item.title }}</span>
                    <section>{{ item.content }}</section>
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
            <section>
              深耕智慧化旅游行业，以区域旅游资源普查为切入点，以景区为中心、游客为核心，整合周边旅店、商家、物资等资源，将游客变为高粘性的移
            </section>
          </div>
        </div>
        <div class="partner-right">
          <div>
            <img src="../../assets/images/parner-yellow.png" alt />
          </div>
          <div class="partner-right-text">
            <span>索斯派克（北京）科技有限公司</span>
            <section>
              索斯派克（北京）科技有限公司专注于服务国内外只会景区建设，为旅游行业提供相关只会旅游软硬件开发服务；提供智慧伴游，虚拟现实，增强现实，视觉科技，人工智能核心技术的完美解决方案。
            </section>
          </div>
        </div>
      </div>
    </div>

    <!-- 关联相关产品 -->

    <div class="relative-box">
      <p class="relativ-title">关联相关产品</p>
      <div class="list">
        <div class="item" @click="linkToPro">
          <img
            :src="require('../../assets/images/tic_dashuju.png')"
            class="imgs"
            alt=""
          />
          <div class="right-box">
            <p class="title">大数据平台</p>
            <p class="desc">
              让您轻松具备大数据处理与精准推荐能力，大数据处理套件
              安全、易用的全流程大数据处理平台
            </p>
          </div>
        </div>
        <div class="item" @click="linkToPro">
          <img
            :src="require('../../assets/images/ic_xiangmuguanli.png')"
            class="imgs"
            alt=""
          />
          <div class="right-box">
            <p class="title">大数据可视化平台</p>
            <p class="desc">
              让您轻松具备大数据处理与精准推荐能力，大数据处理套件
              安全、易用的全流程大数据处理平台
            </p>
          </div>
        </div>
        <div class="item" @click="linkToPro">
          <img
            :src="require('../../assets/images/ic_cesuo1.png')"
            class="imgs"
            alt=""
          />
          <div class="right-box">
            <p class="title">刷脸就行</p>
            <p class="desc">
              让您轻松具备大数据处理与精准推荐能力，大数据处理套件
              安全、易用的全流程大数据处理平台
            </p>
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
        <span
          >关于适用场景和技术架构的更多咨询，请联系我们的销售和技术支持团队。</span
        >
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
import "swiper/css/swiper.css";
import { Swiper } from "vue-awesome-swiper";
export default {
  name: "scenic",
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
          nextEl: ".btn-right",
          prevEl: ".btn-left"
        }
      },
      index: 1,
      customerData: [
        {
          img: "/static/Calligraphy.png",
          title: "重庆市武隆区",
          content:
            "重庆市武隆区与腾讯签约“一部手机游武隆”战略合作的旅游区，打造了武隆区整体及区内多个景区一体化的小程序矩阵。游客可以在小程序中结合特色手绘地图查看武隆区整体及区内景区信息，收听特色的语音讲解，查看个性化线路推荐。此外还可以参加特色的线上线下互动游戏。武隆区及景区则可以在后台通过大数据了解各个景区的实时及趋势情况，便于景区的安全运营管理。"
        },
        {
          img: "/static/Calligraphy.png",
          title: "浮梁古县衙",
          content:
            "2003年浮梁古县衙票务综合管理系统上线运行，至今仍在稳定运行，稳定运行时长已达15年之久。2012年又为浮梁古县衙景区搭建了门票分销平台，实现了门票O2O闭环。2014年，智慧旅游年，再度与浮梁古县衙景区合作打造景区电商平台，整合当地旅游资源，迈出从门票经济向旅游经济转型的第一步。"
        }
      ]
    };
  },
  created() {},
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    linkToPro() {
      this.$router.push({
        path: "/products"
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "./smartSpot.less";
</style>
