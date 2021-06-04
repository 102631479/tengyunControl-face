<template>
  <div class="page">
    <!-- banner -->
    <div class="banner">
      <img src="@/assets/images/scheme/banner_jjfa.png" />
    </div>
    <!-- /banner -->

    <!-- 热门行业解决方案 -->
    <div class="solve-plan pb-72 bg-fff pt-74">
      <div class="page-content">
        <div class="t-center f-size-30 color-20">热门行业解决方案</div>
        <div class="solve-plan-info flex">
          <div class="solve-plan-box solve-plan-vr cup" 
          :style="{'background-image': 'url('+BgImage[0]+')'}" 
          @click="handleJump(SolveList[0].id)"
          >
            <p>
              {{SolveList[0].businessName}}
            </p>
            <span>
              {{SolveList[0].schemeDescribe}}
            </span>
            <!-- <span>给客户带来全新的视觉体验 -->
          </div>
          <div
            class="solve-plan-box solve-plan-color-one cup"
            :style="{'background-image': 'url('+BgImage[1]+')'}" 
            @click="handleJump(SolveList[1].id)"
          >
            <p>{{SolveList[1].businessName}}</p>
            <span>{{SolveList[1].schemeDescribe}}</span>
            <!-- <span>给客户带来全新的视觉体验</span> -->
          </div>
          <div
            class="solve-plan-box solve-plan-color-two cup"
            :style="{'background-image': 'url('+BgImage[2]+')'}" 
            @click="handleJump(SolveList[2].id)"
          >
            <p>{{SolveList[2].businessName}}</p>
            <span>{{SolveList[2].schemeDescribe}}</span>
            <!-- <span>统不断满足不同场景需求</span> -->
          </div>
        </div>

        <div class="solve-plan-info flex">
          <div
            class="solve-plan-box solve-plan-color-one cup"
            :style="{'background-image': 'url('+BgImage[3]+')'}" 
            @click="handleJump(SolveList[3].id)"
          >
            <p>{{SolveList[3].businessName}}</p>
            <span>{{SolveList[3].schemeDescribe}}</span>
            <!-- <span>系统，用户可选择不通产品方式</span> -->
          </div>
          <div
            class="solve-plan-box solve-plan-color-two cup"
            :style="{'background-image': 'url('+BgImage[4]+')'}" 
            @click="handleJump(SolveList[4].id)"
          >
            <p>{{SolveList[4].businessName}}</p>
            <span>{{SolveList[4].schemeDescribe}}</span>
            <!-- <span>强，给人的视觉冲击更强</span> -->
          </div>
          <div 
          class="solve-plan-box solve-plan-face cup"
          :style="{'background-image': 'url('+BgImage[5]+')'}" 
          @click="handleJump(SolveList[5].id)"
          >
            <p>{{SolveList[5].businessName}}</p>
            <span>{{SolveList[5].schemeDescribe}}</span>
            <!-- <span>安全可靠，有效提升产品购物体验</span> -->
          </div>
        </div>
      </div>
    </div>
    <!-- /热门解决方案 -->

    <!-- 全部解决方案 -->
    <div class="all-solve-plan pb-72 pt-74">
      <div class="page-content">
        <div class="t-center f-size-30 color-20 mb-58">全部解决方案</div>
        <Tabs>
          <TabPane
            :label="item"
            v-for="(item, index) in [
              '智慧景区解决方案',
              '特色小镇解决方案',
              '美丽县城解决方案',
            ]"
            :key="index"
          >
            <div class="all-plan-box mt-50 pt-40 pl-40 pr-40 pb-40 bg-fff">
              <div class="flex">
                <!-- 全部解决方案tab切换 -->
                <div class="all-plan-box-tab flex">
                  <span
                    v-for="(item, index) in [
                      '智慧管理',
                      '智慧服务',
                      '智慧营销',
                      '智慧体验',
                      '基础设施',
                    ]"
                    :key="index"
                    :style="{
                      color: currentAllPlanIndex == index ? '#00BAFF' : '#000',
                    }"
                    @mouseover="currentAllPlanIndex = index"
                    class="cup"
                    >{{ item }}</span
                  >
                </div>
                <!-- 全部解决方案列表 -->
                <div class="all-plan-list">
                  <div
                    class="all-plan-list-info cup"
                    v-for="(item, index) in isShowMore ? 6 : 3"
                    :key="index"
                    @click="handleJump"
                  >
                    <div class="flex">
                      <img src="@/assets/images/scheme/jiejuefangan.png" />
                      <span class="all-plan-list-name">VR展示展览互动体验</span>
                    </div>
                    <p class="all-plan-list-content">
                      运用创意与互动AR和VR数字技术，给客户带来全新的视觉体验
                    </p>
                  </div>
                </div>
              </div>
              <!-- 占位 -->
              <div class="all-plan-list-empty"></div>
              <div
                class="all-plan-list-more cup flex"
                @click="isShowMore = !isShowMore"
              >
                <span>{{ !isShowMore ? "展示剩余" : "收起更多" }}</span>
                <Icon
                  type="ios-arrow-down"
                  color="#00BAFF"
                  size="7px"
                  class="all-plan-list-icon"
                  :style="{
                    transform: isShowMore ? 'rotate(180deg)' : 'rotate(0)',
                  }"
                />
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
    <!-- /热门解决方案 -->

    <!-- 合作伙伴 -->
    <partner-component></partner-component>
    <!-- /合作伙伴 -->

    <!-- 联系我们 -->
    <div class="contact-us">
      <div class="page-content">
        <div class="f-size-30 mb-36">联系我们</div>
        <div class="mb-30 f-size-12">
          关于更多场景和技术架构的更多咨询，请联系我们的销售和技术支持团队。
        </div>
        <div class="cup btn">联系我们</div>
      </div>
    </div>
    <!-- /联系我们 -->
  </div>
</template>

<script>
import { getSolutions,getPopularSolve } from "@/api/solution";
import partnerComponent from "@/components/partner-component/index";
export default {
  components: {
    partnerComponent,
  },
  data() {
    return {
      lists: [],
      SolveList:[],//热门解决方案
      BgImage:[],
      currentAllPlanIndex: 0, //全部解决方案的显示控制下标
      isShowMore: false, //是否展示剩余
    };
  },

  created() {
    this.init() 
  },

  methods: {
    async init() {
      // await getSolutions(id)
      //   .then((d) => {
      //     this.lists = d.data;
      //   })
      //   .catch((e) => {
      //     this.$Message.warning(e.message);
      //   });
      await getPopularSolve().then((d) => {
          this.SolveList = d.data;
          d.data.forEach(element => {
            this.BgImage.push(element.bannerPictureUrl)
          })
        }).catch((e) => {
          this.$Message.warning(e.message);
        });
    },
    
    handleJump(id) {
      console.log(id)
      // this.$router.push("/schemeDetail");
    },
  },

  watch: {},
};
</script>



<style scoped lang="scss">
/deep/.ivu-tabs-nav-scroll {
  display: flex;
  justify-content: center;
  .ivu-tabs-nav .ivu-tabs-tab {
    font-size: 18px;
  }
}
.page {
  .ivu-tabs-nav-scroll {
    display: flex;
    justify-content: center;
  }
  .banner {
    height: 342px;
    background-position: center;
    background-size: cover;
    position: relative;
    img {
      width: 100%;
    }
  }
  .contact-us {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url("~@/assets/images/contact-us.jpg");
    height: 300px;
    background-size: cover;
    overflow: hidden;
    .btn {
      width: 150px;
      height: 36px;
      background: rgba(0, 205, 255, 1);
      color: #fff;
      text-align: center;
      line-height: 36px;
      margin: auto;
    }
  }
  .solve-plan {
    .solve-plan-info {
      justify-content: space-between;
      margin-top: 59px;
      .solve-plan-box {
        display: flex;
        flex-direction: column;
        height: 170px;
        color: #ffffff;
        padding: 35px 0 0 30px;
        p {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 20px;
        }
        span {
          font-size: 14px;
        }
      }
      .solve-plan-vr,
      .solve-plan-face {
        width: 590px;
        background-size: 590px 170px;
      }
      .solve-plan-vr {
        // background-image: url("../../assets/images/scheme/img_vr.png");
      }
      .solve-plan-color-one {
        width: 285px;
        background: linear-gradient(-55deg, #00baff 0%, #76ccec 100%);
      }
      .solve-plan-color-two {
        width: 285px;
        background: linear-gradient(-55deg, #0084ff 0%, #5ca3e5 100%);
      }
      .solve-plan-face {
        // background-image: url("../../assets/images/scheme/img_sljx.png");
      }
    }
    .solve-plan-info:last-child {
      margin-top: 20px;
    }
  }
  // 全部解决方案
  .all-solve-plan {
    .all-plan-box {
      width: 100%;
      height: 744px;
      overflow-y: auto;
      border: 1px solid #eeeeee;
      .all-plan-box-tab {
        flex-direction: column;
        width: 150px;
        span {
          font-size: 18px;
          margin-bottom: 30px;
        }
        span:last-child {
          margin-bottom: 0;
        }
      }
      .all-plan-list {
        .all-plan-list-info {
          width: 940px;
          height: 126px;
          padding: 22px 30px;
          margin-left: 30px;
          position: relative;
          border: 1px solid transparent;
          img {
            width: 31px;
            margin-right: 10px;
          }
          > div {
            align-items: center;
            margin-bottom: 23px;
          }
          .all-plan-list-name {
            font-size: 18px;
            font-weight: 500;
            color: #000;
          }
          .all-plan-list-content {
            font-size: 14px;
            color: #444444;
          }
          &::before {
            content: "";
            position: absolute;
            left: -30px;
            top: 0;
            width: 2px;
            height: 126px;
            background-color: #eeeeee;
          }
        }
        .all-plan-list-info:hover {
          box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.06);
          border-color: #eeeeee;
          &::before {
            background-color: #00baff;
          }
        }
      }
    }
    .all-plan-list-empty {
      width: 100%;
      height: 80px;
    }
    .all-plan-list-more {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 80px;
      background-color: #ffffff;
      align-items: center;
      justify-content: center;
      margin-top: 24px;
      span {
        font-size: 14px;
        color: #00abff;
        margin-right: 7px;
      }
      .all-plan-list-icon {
        position: relative;
        transition: transform 0.3s linear;
      }
    }
  }
}
</style>