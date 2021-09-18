<template>
  <div class="container">
    <swiper :listData="['1', '2', '3', '4', '5']"></swiper>
    <!-- 产品服务 -->
    <div class="product-box">
      <div class="product-content">
        <div class="product-content-title-box">
          <span class="product-content-title">产品服务</span>
        </div>
        <div class="product-content-box">
          <div class="product-content-content">
            <el-tabs class="product-content-content-tabs">
              <el-tab-pane
                :label="item"
                class="global-tbs"
                v-for="(item, index) in ['全域旅游', '智慧景区', '未来票房']"
                :key="index"
              >
                <span slot="label" class="tbs-page-title flex align-center">
                  <img src="@/assets/images/qyly.png" v-if="index == 0" />
                  <img src="@/assets/images/zhjq.png" v-if="index == 1" />
                  <img src="@/assets/images/wlpf.png" v-if="index == 2" />
                  <p class="ml-10">{{ item }}</p>
                </span>
                <div>
                  <ul class="product-content-table">
                    <li
                      class="cup"
                      v-for="(i, index) in index == 0
                      ? tab1: index == 1 ? tab2: tab3"
                      :key="index"
                    >
                      <span class="f-size-16">{{ i.title }}</span>
                      <p class="f-size-14">{{ i.content }}</p>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
    <!-- 服务案例 -->
    <div class="solve-box">
      <p class="solve-title f-size-30">服务案例</p>
      <div class="solve-list flex">
        <div
          class="solve-content"
          v-for="(item, index) in solveData"
          :key="index"
        >
          <div class="solve-content-detail flex">
            <img :src="item.imgUrl" alt class="solve-li-img" />
            <p class="solve-name f-size-18">{{ item.name }}</p>
            <p class="solve-level f-size-16">{{ item.level }}</p>
            <p class="solve-more f-size-12 cup">MORE&nbsp;></p>
          </div>
          <!-- 鼠标滑过显示的遮罩层 -->
          <div class="solve-content-mask flex">
            <p class="f-size-16">{{ item.title }}</p>
            <span class="f-size-14">{{ item.content }}</span>
            <span class="f-size-14 cup"> 查看更多 </span>
          </div>
        </div>
      </div>
    </div>
    <!--政策导向 -->
    <div class="policy-box">
      <div class="policy-title-box">
        <span class="policy-title">政策导向</span>
      </div>
      <div class="policy-layout">
        <div class="policy-content">
          <ul class="policy-content-ul">
            <li class="policy-content-ul-li">
              <span class="policy-content-ul-name">黑龙江创建全域旅游品牌</span>
              <span class="policy-content-ul-title">中国新闻网</span>
              <span class="policy-content-ul-time">2019.12.27</span>
            </li>
            <li>
              <span class="policy-content-ul-name"
                >坚持全域旅游理念转型升级创新发展</span
              >
              <span class="policy-content-ul-title"
                >中华人民共和国文化和旅游部</span
              >
              <span class="policy-content-ul-time">2019.03.07</span>
            </li>
            <li>
              <span class="policy-content-ul-name"
                >全域旅游出新意 “蚌埠思考”为区域中心城市发展把脉</span
              >
              <span class="policy-content-ul-title"
                >中华人民共和国文化和旅游部</span
              >
              <span class="policy-content-ul-time">2019.02.25</span>
            </li>
            <li>
              <span class="policy-content-ul-name"
                >三亚：在全域旅游背景下建设国际旅游消费中心</span
              >
              <span class="policy-content-ul-title">人民网</span>
              <span class="policy-content-ul-time">2019.03.07</span>
            </li>
            <li>
              <span class="policy-content-ul-name"
                >以全域旅游为抓手 助推共享之旅立体经济新模式</span
              >
              <span class="policy-content-ul-title">人民网</span>
              <span class="policy-content-ul-time">2019.03.07</span>
            </li>
            <div class="see-more">
              <span>查看更多</span>
              <img src="@/assets/images/seemore.png" alt />
            </div>
          </ul>
        </div>
      </div>
    </div>
    <!-- 公司介绍 -->
    <div class="company-box">
      <div class="company-title-box">
        <span class="company-title">公司介绍</span>
      </div>
      <div class="company-content-box">
        <div class="company-content">
          <div class="company-content-text">
            <span
              >&emsp;&emsp;华夏票联是从事全域旅游、智慧景区、未来票房业务的旅游信息化专业公司。公司总部设在首都北京，是国家、中关村双高新技术企业、双软认证企业、IOS9001认证企业。公司在多年旅游行业经验积累的基础上，遵循市场化发展原则，以国家经济发展战略为指导，按照“旅游+科技”的发展思路，结合当今的互网、物联网、人工智能、智能移动终端等科技，通过自身的“万象智联生态圈”与腾讯云、中科院、中国银联、海康威视、云从科技、比特智能、ITC科技、德宝门控等合作伙伴，共同为旅游管理单位、旅游经营单位提供全面综合的旅游信息化服务，分享中国大旅游经济发展盛宴，助力国家旅游创新和旅游经济增长。</span
            >
          </div>
          <div class="company-content-img">
            <img src="@/assets/images/company-img.png" alt />
          </div>
        </div>
      </div>
    </div>
    <!-- 合作伙伴 -->
    <partner-component></partner-component>
  </div>
</template>

<script>
import Cookies from "js-cookie";

import swiper from "./swiper/swiper.vue";
import { getUserInfo } from "@/api/user";
import partnerComponent from "@/components/partner-component/index";
export default {
  name: "Home",
  components: { swiper, partnerComponent },
  data() {
    return {
      //产品服务
      tab1: [
        {
          title: "卡劵营销",
          content: "聚合优质电商、零售门店代金劵，引爆营销活动、提高营销转化率",
        },
        {
          title: "全域共建",
          content: "整合资源、整合人才、整合资金",
        },
        {
          title: "产品体系",
          content:
            "区域化，形成地域明显的产品特质，智能化，打通各种通道，满足政府、景区、游客的各种需求",
        },
        {
          title: "全域景观化 ",
          content: "以景区电商+全域电商为模式的全新性全域旅游开发模式",
        },
      ],
      tab2: [
        {
          title: "旅游数据分析",
          content:
            "通过大数据，实时监测景区游客动态，活动参与度，产出数据报告，科学进行调控",
        },
        {
          title: "线上营销渠道",
          content: "通过自身的电商平台和网络电商平台，使网络销售无盲区",
        },
        {
          title: "景区全网数据化",
          content:
            "实现景区网络全部覆盖、监控全覆盖、设备全覆盖，是景区实时数据能及时上传",
        },
        {
          title: "地面推广交易渠道 ",
          content:
            "以景区电商+采用华夏票联码上来营销体系，扩大景区的目标客户的区域影响力，提高吸客指数",
        },
        {
          title: "景区资源集中化 ",
          content:
            "以景区电商+集合景区优势资源，打造景区拳头产品，以多种形式，加大景区对旅游的二次消费回头率等",
        },
      ],
      tab3: [
        {
          title: "窗口业务系统",
          content: "现场打印门票、预先印刷门票、卡制门票、身份证门票",
        },
        {
          title: "旅行社业务系统",
          content: "实名制预约、分时分段预约、实际电子行程单、智能报表",
        },
        {
          title: "OTA分销业务系统",
          content: "统一编码、统一发码、统一验码",
        },
        {
          title: "电商业务系统 ",
          content: "以景区电商+电商业务系统实现门票加周边的1+N模式",
        },
      ],

      // 服务案例文案 
      solveData: [
        //这里的图片都是临时上传后的暂时使用地址 后期数据对接直接更换地址即可
        {
          // imgUrl: require("@/assets/images/company-img/青岛崂山@2x.png"),
          imgUrl:'https://open-test-1257245393.cos.ap-chengdu.myqcloud.com/platform/okvmtlc0llb72rk61jz39yknwfpw3a4wo.png',
          name: "青岛崂山风景区",
          level: "AAAAA",
          title: "规模最大",
          content: "从“数字崂山”到“智慧崂山”再到“全域崂山”的建设全过程",
        },
        {
          // imgUrl: require("@/assets/images/company-img/八达岭@2x.png"),
          imgUrl:'https://open-test-1257245393.cos.ap-chengdu.myqcloud.com/platform/6frstvvaesjhtz0dip1r6bac58ljkwkor.png',
          name: "八达岭长城",
          level: "AAAAA",
          title: "单日接单最多",
          content:
            "创造票联检票闸机单日单台检票最多纪录，体现闸机过硬的质量和运行的稳定性",
        },
        {
          // imgUrl: require("@/assets/images/company-img/浮梁古县衙@2x.png"),
          imgUrl:'https://open-test-1257245393.cos.ap-chengdu.myqcloud.com/platform/1u5f3v8g513ra3mlo8u005bao4y2cokhy.png',
          name: "浮梁谷县衙",
          level: "AAAA",
          title: "运行周期最长",
          content: "使营销由传统销售窗口向新型020营销管理系统转型",
        },
        {
          // imgUrl: require("@/assets/images/company-img/张家界@2x.png"),
          imgUrl:'https://open-test-1257245393.cos.ap-chengdu.myqcloud.com/platform/uhwsyobtwbz9uwq7xvu8sd404ku7cys7f.png',
          name: "张家界玻璃桥",
          level: "AAAAA",
          title: "管理最超前",
          content: "全国首个实名制分时分段预约票务管理模式",
        },
        {
          // imgUrl: require("@/assets/images/company-img/辽宁丹东@2x.png"),
          imgUrl:'https://open-test-1257245393.cos.ap-chengdu.myqcloud.com/platform/30gdbk0ixrgjlz8g3emjopfjw3rfhqw9y.png',
          name: "辽宁丹东凤凰山风景区",
          level: "AAAA",
          title: "更便捷更周到的服务",
          content:"实现景区与景区之间、分销商与分销商之间的资源共享，进行资源整合",
        },
        {
          // imgUrl: require("@/assets/images/company-img/北京慕田峪@2x.png"),
          imgUrl:'https://open-test-1257245393.cos.ap-chengdu.myqcloud.com/platform/i582uvrgawb9f14xqnulkok4jkexhun05.png',
          name: "北京慕田峪长城",
          level: "AAAAA",
          title: "独立研发售检票系统",
          content: "采用国内最新型的：三辊闸检票机",
        },
        {
          // imgUrl: require("@/assets/images/company-img/北京青龙峡.png"),
          imgUrl:'https://open-test-1257245393.cos.ap-chengdu.myqcloud.com/platform/e0ekt5ksl5mq8m41drw7rbyyoyjlmiio4.png',
          name: "北京青龙峡",
          level: "AAAA",
          title: "无纸化办公管理",
          content: "实现游客数据管理和分析，避免人工出错率",
        },
        {
          // imgUrl: require("@/assets/images/company-img/淄博周村@2x.png"),
          imgUrl:'https://open-test-1257245393.cos.ap-chengdu.myqcloud.com/platform/divobgubnqv10p93n5epacm82zuz9pw9e.png',
          name: "淄博周村古镇",
          level: "AAAA",
          title: "独立研发门票分销系统",
          content:"C/S、B/S混合架构，数据存储、验证，无限网络营销、商城无限覆盖",
        },
      ],
    };
  },
  created() {
    if (Cookies.get("token")) {
      console.log("已经在别的页面登陆过了");
      this.$store.commit("setToken", Cookies.get("token"));
      getUserInfo().then((d) => {
        console.log(d, "信息");
        this.$store.commit("setUserInfo", d.data);
        this.$store.commit("setIsLogin", true);
      }).catch((err) => {
        console.log("需要重新登陆",err);
        this.$store.commit("setIsLogin", false);
        this.$store.commit("setUserId", "");
        this.$store.commit("setUserName", "");
        this.$store.commit("setUserInfo", {});
        this.$store.commit("setToken", "");
      });
      let data = this.$store.state.user.token;
      document.cookie = `token=${data}; path=/; domain=wdblog.top;`;
      return;
    }
    getUserInfo().then((d) => {
      this.$store.commit("setUserInfo", d.data);
    }).catch((err) => { console.log("需要重新登陆",err);
      this.$store.commit("setIsLogin", false);
      this.$store.commit("setUserId", "");
      this.$store.commit("setUserName", "");
      this.$store.commit("setUserInfo", {});
      this.$store.commit("setToken", "");
    });

  },
};
</script>
<style>
.container .el-tabs__nav-scroll {
  display: flex;
  justify-content: center;
}
</style>
<style scoped lang="scss">
* {
  font-family: PingFang SC;
}
// -------------------产品服务样式------------------------------
/* 
  产品服务样式
 */
.product-box {
  background: rgba(255, 255, 255, 1);
  width: 100%;
  // height: 500px;
  overflow: hidden;
  .product-content-title-box {
    text-align: center;
    margin-bottom: 40px;
    margin-top: 50px;
  }
  .product-content-title {
    width: 118px;
    height: 28px;
    font-size: 30px;
    font-weight: 500;
    color: rgba(2, 2, 2, 1);
  }
  .product-content-box {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .tbs-page-title {
    font-size: 20px;
    font-weight: 400;
    // margin-left: 30px;
    padding: 0 20px;
    color: rgba(51, 51, 51, 1);
  }
  /deep/.el-tabs__item {
    height: 50px;
  }
  /deep/.el-tabs__nav-wrap::after {
    height: 1px;
  }
  /deep/.el-tabs__active-bar {
    height: 1px;
  }
  /deep/.el-tabs__active-bar {
    width: 158px !important;
  }
  .product-content-content-tabs .el-tabs__active-bar {
    margin-left: 15px;
  }
  .product-content-content {
    max-width: 1200px;
  }
  /* 
    tabs标签页样式
  */
  .product-content-table {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    padding-top: 20px;
    padding-left: 1px;
    li {
      width: 340px;
      background-color: #f5f7fa;
      margin-right: 89px;
      padding: 15px 23px;
      margin-bottom: 60px;
      span {
        color: #333333;
      }
      p {
        color: #666666;
        margin-top: 16px;
      }
    }
    li:nth-child(3n) {
      margin-right: 0;
    }
    li:hover {
      background-color: #ffffff;
      box-shadow: 0px 1px 4px 0px rgba(26, 99, 221, 0.2);
      span {
        color: #00baff;
      }
    }
  }
}
// ----------------------华丽的分割线--------------------------------
// ----------------------服务案例------------------------------------
.solve-box {
  width: 100%;
  overflow: hidden;
  background-image: url("../../assets/images/home/home_bg.png");
  background-repeat: no-repeat;
  padding-bottom: 60px;
  .solve-title {
    text-align: center;
    margin: 54px 0;
  }
  .solve-list {
    width: 1200px;
    margin: auto;
    flex-wrap: wrap;
    .solve-content {
      position: relative;
      width: 298px;
      height: 300px;
      background-color: #ffffff;
      margin: 0 2px 2px 0;
      overflow: hidden;
      .solve-content-detail {
        width: 100%;
        height: 300px;
        flex-direction: column;
        align-items: center;
        padding: 23px 0;
        img {
          width: 142px;
          height: 142px;
          border-radius: 142px;
          margin-bottom: 24px;
        }
        .solve-name,
        .solve-more {
          color: #333333;
        }
        .solve-level {
          color: #666666;
          margin: 10px 0 8px;
        }
      }
      .solve-content-mask {
        flex-direction: column;
        position: absolute;
        transition: all 0.3s;
        top: 100%;
        width: 100%;
        height: 300px;
        padding: 33px 34px;
        background-color: rgba(0, 186, 255, 0.94);
        color: #ffffff;
        p {
          margin-bottom: 31px;
        }
        span:last-child {
          position: absolute;
          bottom: 49px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 110px;
          height: 28px;
          border: 1px solid #ffffff;
        }
      }
    }
    .solve-content:hover {
      .solve-content-mask {
        top: 0;
      }
    }
    .solve-box:nth-child(4n) {
      margin-right: 0;
    }
  }
}
// ----------------------华丽的分割线--------------------------------
// ----------------------政策导向------------------------------------
.policy-box {
  width: 100%;
  background-image: url("../../assets/images/home/home_bg2.png");
  overflow: hidden;
  .policy-title-box {
    margin-top: 70px;
    text-align: center;
  }
  .policy-title {
    width: 116px;
    height: 28px;
    font-size: 30px;
    font-weight: 500;
    color: rgba(2, 2, 2, 1);
  }
  .policy-layout {
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
  }
  .policy-content {
    margin-top: 70px;
    width: 1000px;
    display: flex;
    justify-content: space-between;
  }
  .policy-content-ul {
    width: 100%;
  }
  .policy-content-ul li:hover {
    height: 14px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 186, 255, 1);
  }
  .policy-content-ul li {
    height: 14px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    margin-bottom: 40px;
  }
  .policy-content-ul span {
    display: inline-block;
    cursor: pointer;
  }
  .policy-content-ul-name {
    width: 60%;
  }
  .policy-content-ul-title {
    width: 30%;
    text-align: right;
  }
  .policy-content-ul-time {
    width: 10%;
    text-align: right;
  }
  .see-more {
    text-align: right;
  }
  .see-more span {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 186, 255, 1);
    cursor: pointer;
    margin-right: 14px;
    vertical-align: middle;
  }
  .see-more img {
    width: 22px;
    height: 14px;
    cursor: pointer;
    vertical-align: middle;
  }
}
// ----------------------华丽的分割线--------------------------------
// ----------------------公司介绍------------------------------------
.company-box {
  width: 100%;
  // height: 400px;
  text-align: center;
  background: url("../../assets/images/home/home-developer-bg.png");
  .company-title-box {
    width: 100%;
    text-align: center;
    padding-top: 79px;
    padding-bottom: 21px;
  }
  .company-title {
    height: 28px;
    font-size: 30px;
    font-weight: 500;
    color: rgba(2, 2, 2, 1);
  }
  .company-content-box {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .company-content {
    max-width: 1200px;
    margin-bottom: 48px;
    display: flex;
    align-items: center;
  }

  .company-content-text {
    text-align: left;
    padding: 40px 21px;
    background-color: white;
    border: 1px solid #e5e8ed;
    box-shadow: 0px 2px 6px 0px rgba(26, 99, 221, 0.1);
  }
  .company-content span {
    font-size: 14px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 30px;
    text-indent: 20px;
  }
  .company-content-img {
    width: 470px;
    height: 310px;
  }
  @media screen and (max-width: 1100px) {
    .company-content {
      flex-direction: column-reverse;
    }
  }
}
</style>
