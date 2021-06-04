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
            <p>全域旅游更方便</p>
            <section>
              近年来，随着旅游经济的不断发展，全域旅游已经成为旅游业发展的大方向，电商业务平台作为直接面向游客的互联网窗口，可与旅游单位联合运营，进而实现体制创新，产业创新，产品创新，服务创新，营销创新，营造全景，全民，全业，全时的氛围，助力全域旅游飞速发展！
            </section>
          </li>
          <li class="content-title-li">
            <img src="../../assets/images/eye.png" alt />
            <p>AI助力更省心</p>
            <section>
              通过使用机器人、语音识别、人工智能等技术，实现AI智能机器人，增加为游客服务与体验的新式解决方案
            </section>
          </li>
          <li class="content-title-li">
            <img src="../../assets/images/game.png" alt />
            <p>游戏互动更有趣</p>
            <section>
              机器人互动更有趣，丰富的寒暄语库，贴合业务场景，模拟真人对话亲切自然
            </section>
          </li>
          <li class="content-title-li">
            <img src="../../assets/images/Collimation.png" alt />
            <p>大数据检测更安全</p>
            <section class="exptext">
              大数据监测、一套集先进设计理念、高可用性、高拓展性、高负载性能为一体的开放式平台。平台由数据储存中心、物联网平台、BI数据处理平台、舆情采集平台、腾讯位置服务平台、数据仓库、数据库、可视化展示、应急指挥平台、产业监测平台等若干组件组成。让您的数据生成无限价值，让您的数据应用产生无限可能。
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
              历史人文类特色小镇可以通过数字小镇解决方案，依托民俗文化、民族文化、历史遗产等类型资源，通过智慧化地图导游导览，AI讲解
              深度挖掘文化内涵，融入新型文化旅游业态，打造旅游目的地。
            </p>
          </li>
          <li>
            <img src="../../assets/images/school.png" alt />
            <p>
              风景类特色小镇可以通过数字小镇解决方案，可以通过数字小镇解决方案，通过对区域内旅游资源、生态环境，采用数字小镇会员管理
              体系，实现一码通天下。实现吃、住、行、游、购、娱、展、演、赛全环节快捷预定、支付、
              消费，实现营销最大化。
            </p>
          </li>
          <li>
            <img src="../../assets/images/ZOAWD.png" alt />
            <p>
              民族风情类小镇借助众多古城古镇和古村落、古村寨，通过数字小镇解决方案，推动特色小镇中名景、名店、名馆、名品等资源全要素
              上线，实现直播、导游导览、一码通等在特色小镇全覆盖，加强人脸识别闸机入园、AI识景等功能的推广，推进智慧厕所、景区景点解说、智慧停车等智慧旅游信息化基础设施建设和数字化平台建设，实现小镇特色建设。
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
            <span>海康威视</span>
            <section>
              是全球领先的以视频为核心的物联网解决方案提供商，致力于不断提升视频处理技术和视频
              分析技术，面向全球提供领先的监控产品和技术解决方案。
            </section>
          </div>
        </div>
        <div class="partner-right">
          <div>
            <img src="../../assets/images/parner-yellow.png" alt />
          </div>
          <div class="partner-right-text">
            <span>崂山旅游集团</span>
            <section>
              崂山旅游集团按照“盘活存量、创新增量、高效管理、塑造品牌”的工作思路，逐步形成了
              自身七大业务板块的布局，成为崂山现代旅游业发展的重要平台和建设投资主体。
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
            <p class="title">总集平台</p>
            <p class="desc">
              总集平台采用类似腾讯云的技术模式，主要作用是实现各智慧应用的管理，可实现统一登录、
              统一数据储存、统一运行维护、统一健康监测、
              统一支付服务等功能，是各类智慧应用建设的“根基”，是数字文旅小镇智慧的“大脑”。
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
            <p class="title">移动办公系统</p>
            <p class="desc">
              协同办公管理平台，不仅限于人、财、物、事件的管理，而应该是各个软件系统的总成和
              入口。企业微信作为管理者与各个智慧系统之间的
              连接器，管理人员登录企业微信后便可一键登录到智慧服务、智慧客情、智慧零售、智慧安全等各个子系统中。
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
            <p class="title">可视化展示平台</p>
            <p class="desc">
              可视化管理平台是一套集信息发布、舆情监测、人员调度巡更、环境监测为一体的可视化管
              理平台。平台同时支持PC端和移动端进行管理，并采用企业微信作为统一入口。平台用户
              及权限管理全部源于腾云总集套件，在总集套件创建用户并分配权限后用户即可登录使用系
              统中已分配权限的功能。
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
          title: "浮梁古县衙",
          content:
            "2003年浮梁古县衙票务综合管理系统上线运行，至今仍在稳定运行，稳定运行时长已达15年之久。2012年又为浮梁古县衙景区搭建了门票分销平台，实现了门票O2O闭环。2014年，智慧旅游年，再度与浮梁古县衙景区合作打造景区电商平台，整合当地旅游资源，迈出从门票经济向旅游经济转型的第一步。"
        },
        {
          img: "/static/Calligraphy.png",
          title: "重庆市武隆区",
          content:
            "重庆市武隆区与腾讯签约“一部手机游武隆”战略合作的旅游区，打造了武隆区整体及区内多个景区一体化的小程序矩阵。游客可以在小程序中结合特色手绘地图查看武隆区整体及区内景区信息，收听特色的语音讲解，查看个性化线路推荐。此外还可以参加特色的线上线下互动游戏。武隆区及景区则可以在后台通过大数据了解各个景区的实时及趋势情况，便于景区的安全运营管理。"
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
