<template>
  <div class="page">
    <!-- 背景 -->
    <div class="pro-header" @click="pushTY"></div>

    <!-- 推荐产品 -->
    <div class="recommend-product normal-padding">
      <p ref="t1" class="pro-title">推荐产品</p>
      <div class="recommend-lists">
        <div class="item" v-for="(item,i) in lists" :key="i" :class="index == i ? 'active' : '' " @mouseenter="enter(i)" >
         <img v-if="index == i" :src="item.bg" alt="" class="recommend-bg">
         <img v-else :src="item.icon" alt="" class="icon" />
          
          <p class="title">{{ item.title }}</p>
          <p class="desc" v-show="index == i ">{{ item.desc }}</p>
        </div>
      </div>
    </div>

    <!-- 软件产品 -->
    <div class="software">
      <p ref="t2" class="swCls">软件产品</p>
      <div  class="swContainer normal-padding">
        <div class="swFlex">
          <img :src="require('../../assets/images/tc65.png')" alt="" class="sw-img">
          <div class="position-x">
            <img :src="require('../../assets/images/setting-small.png')" alt="" class="pos-img">
            <p ref="t2-1">票务系统</p>
          </div>
          <p class="swDesc">通过拥有资讯、电商、导览、互动的新型网站，为您的景区提升品质， 提高效率，实现信息化建设，同时搭建一个景区+游客+商户的新型互动平台。</p>
        </div>
        <div class="swFlex">
          <img :src="require('../../assets/images/tc66.png')" alt="" class="sw-img">
          <div class="position-x">
            <img :src="require('../../assets/images/setting-small.png')" alt="" class="pos-img">
            <p>物联网平台</p>
          </div>
          <p class="swDesc">通过拥有资讯、电商、导览、互动的新型网站，为您的景区提升品质， 提高效率，实现信息化建设，同时搭建一个景区+游客+商户的新型互动平台。</p>
        </div>
        <div class="swFlex" @click="pushBigData">
          <img :src="require('../../assets/images/tc67.png')" alt="" class="sw-img">
          <div class="position-x">
            <img :src="require('../../assets/images/setting-small.png')" alt="" class="pos-img">
            <p>大数据平台</p>
          </div>
          <p class="swDesc">通过拥有资讯、电商、导览、互动的新型网站，为您的景区提升品质， 提高效率，实现信息化建设，同时搭建一个景区+游客+商户的新型互动平台。</p>
        </div>
      </div>
    </div>
    <!-- 硬件产品 -->
    <div class="hdware normal-padding">
      <p class="hdCls" ref="t3">硬件产品</p>
      <Tabs active-key="0">
          <Tab-pane label="自动售取票机" key="0" class="tabPane">
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj150.png')" alt="" class="tab-img">
              <div class="left-pos">
                <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj173.png')" alt="" class="tab-img">
              <div class="left-pos">
               <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj150.png')" alt="" class="tab-img">
              <div class="left-pos">
                <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj173.png')" alt="" class="tab-img">
              <div class="left-pos">
                <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj150.png')" alt="" class="tab-img">
              <div class="left-pos">
                 <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj173.png')" alt="" class="tab-img">
              <div class="left-pos">
                <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
          </Tab-pane>
          <Tab-pane label="翼机" key="1" class="tabPane">
                       <div class="tabContent">
              <img :src="require('../../assets/images/product/zj150.png')" alt="" class="tab-img">
              <div class="left-pos">
                <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj173.png')" alt="" class="tab-img">
              <div class="left-pos">
               <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj150.png')" alt="" class="tab-img">
              <div class="left-pos">
                <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj173.png')" alt="" class="tab-img">
              <div class="left-pos">
                <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj150.png')" alt="" class="tab-img">
              <div class="left-pos">
                 <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj173.png')" alt="" class="tab-img">
              <div class="left-pos">
                <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
          </Tab-pane>
          <Tab-pane label="摆机" key="2" class="tabPane">
                       <div class="tabContent">
              <img :src="require('../../assets/images/product/zj150.png')" alt="" class="tab-img">
              <div class="left-pos">
                <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj173.png')" alt="" class="tab-img">
              <div class="left-pos">
               <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj150.png')" alt="" class="tab-img">
              <div class="left-pos">
                <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj173.png')" alt="" class="tab-img">
              <div class="left-pos">
                <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj150.png')" alt="" class="tab-img">
              <div class="left-pos">
                 <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj173.png')" alt="" class="tab-img">
              <div class="left-pos">
                <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
          </Tab-pane>
          <Tab-pane label="三辊闸" key="3" class="tabPane">
                       <div class="tabContent">
              <img :src="require('../../assets/images/product/zj150.png')" alt="" class="tab-img">
              <div class="left-pos">
                <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj173.png')" alt="" class="tab-img">
              <div class="left-pos">
               <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj150.png')" alt="" class="tab-img">
              <div class="left-pos">
                <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj173.png')" alt="" class="tab-img">
              <div class="left-pos">
                <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj150.png')" alt="" class="tab-img">
              <div class="left-pos">
                 <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj173.png')" alt="" class="tab-img">
              <div class="left-pos">
                <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
          </Tab-pane>
          <Tab-pane label="pos机" key="4" class="tabPane">
                       <div class="tabContent">
              <img :src="require('../../assets/images/product/zj150.png')" alt="" class="tab-img">
              <div class="left-pos">
                <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj173.png')" alt="" class="tab-img">
              <div class="left-pos">
               <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj150.png')" alt="" class="tab-img">
              <div class="left-pos">
                <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj173.png')" alt="" class="tab-img">
              <div class="left-pos">
                <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj150.png')" alt="" class="tab-img">
              <div class="left-pos">
                 <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj173.png')" alt="" class="tab-img">
              <div class="left-pos">
                <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
          </Tab-pane>
          <Tab-pane label="手持验票机" key="5" class="tabPane">
                       <div class="tabContent">
              <img :src="require('../../assets/images/product/zj150.png')" alt="" class="tab-img">
              <div class="left-pos">
                <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj173.png')" alt="" class="tab-img">
              <div class="left-pos">
               <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj150.png')" alt="" class="tab-img">
              <div class="left-pos">
                <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj173.png')" alt="" class="tab-img">
              <div class="left-pos">
                <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj150.png')" alt="" class="tab-img">
              <div class="left-pos">
                 <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
            <div class="tabContent">
              <img :src="require('../../assets/images/product/zj173.png')" alt="" class="tab-img">
              <div class="left-pos">
                <p class="left-title">电动三辊闸机</p>
                <p class="left-desc">UTG-TI-323</p>
              </div>
            </div>
          </Tab-pane>
      </Tabs>
        <div class="bg-hd"></div>
    </div>

    <!-- 咨询我们 -->
    <div class="contact-us">
      <p class="con-title" ref="t4">咨询我们</p>
      <p class="con-desc">关于更多场景和技术架构的更多咨询，请联系我们的销售和技术支持团队。</p>
      <p class="con-func">咨询我们</p>
    </div>

    <div class="side-catalog">
        <side-catalog  v-bind="catalogProps" ></side-catalog>
    </div>
  </div>
</template>

<script>
// 动态侧边目录
import SideCatalog from 'vue-side-catalog'
import 'vue-side-catalog/lib/vue-side-catalog.css'
export default {
  components:{
    SideCatalog
  },
  data() {
    return {
      catalogProps:{
        containerElementSelector: '.page',
        openDomWatch: true,
        refList:[
          {
          ref: 't1'
          },
          {
          ref: 't2'
          },
          {
          ref: 't2-1',
          level: 2
          },
          {
            ref: 't3'
          },
          {
            ref: 't4'
          }
        ]
      },
      index: 0,
      lists: [
        {
          icon: require('../../assets/images/setting-small.png'),
          bg: require('../../assets/images/setting-large.png'),
          title: "实名制票务系统",
          desc:
            "搭建票务联盟平台，实现全网覆盖式营销模式，为景区提供快捷、方便 、高效的网络销售渠道，帮助您快速提升营业额和游客体验感。",
        },
        {
          icon: require('../../assets/images/setting-small.png'),
          bg: require('../../assets/images/setting-large.png'),
          title: "实名制票务系统",
          desc:
            "搭建票务联盟平台，实现全网覆盖式营销模式，为景区提供快捷、方便 、高效的网络销售渠道，帮助您快速提升营业额和游客体验感。",
        },
        {
          icon: require('../../assets/images/setting-small.png'),
          bg: require('../../assets/images/setting-large.png'),
          title: "实名制票务系统",
          desc:
            "搭建票务联盟平台，实现全网覆盖式营销模式，为景区提供快捷、方便 、高效的网络销售渠道，帮助您快速提升营业额和游客体验感。",
        },
        {
          icon: require('../../assets/images/setting-small.png'),
          bg: require('../../assets/images/setting-large.png'),
          title: "实名制票务系统",
          desc:
            "搭建票务联盟平台，实现全网覆盖式营销模式，为景区提供快捷、方便 、高效的网络销售渠道，帮助您快速提升营业额和游客体验感。",
        },
      ],
    };
  },

  methods: {
    enter(i) {
      this.index = i
    },
    // out(i) {
    //   this.index = -1
    //   if (this.index == -1) {
    //     this.index = 0
    //   }
    // },
    pushBigData() {
      this.$router.push('/proBigData')
    },
    pushTY() {
      this.$router.push('./TYPro')
    }
  },
};
</script>
<style lang="scss" scoped>

/deep/.ivu-tabs-nav {
    padding-left: 0;
    // margin: 0 ;
    margin-bottom: 45px;
    float: none;
    text-align: center;
    list-style: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    -webkit-transition: -webkit-transform 0.5s ease-in-out;
    transition: -webkit-transform 0.5s ease-in-out;
    transition: transform 0.5s ease-in-out;
    transition: transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out;
}
/deep/.ivu-tabs-nav .ivu-tabs-tab {
    display: inline-block;
    height: 100%;
    padding: 2px 16px;
    margin-right: 16px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    text-decoration: none;
    font-size: 16px;
    position: relative;
    -webkit-transition: color 0.3s ease-in-out;
    transition: color 0.3s ease-in-out;
}
/deep/.ivu-tabs-bar {
    border-bottom:none;
    margin-bottom: 0px;
}
/deep/.ivu-tabs-ink-bar {
    height: 2px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fff;
    position: absolute;
    left: 0;
    bottom: 1px;
    z-index: 1;
    -webkit-transition: -webkit-transform 0.3s ease-in-out;
    transition: -webkit-transform 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}

.page {
  background-color: #fff;
}
.normal-padding {
  padding: 0 360px;
}
.icon {
  width: 34px;
  height: 34px;
  margin: 103px auto 18px auto;
  display: flex;
}
.recommend-bg {
  width: 80px;
  height: 80px;
  margin: 78px auto 39px auto;
  display: flex;
}
.border-line {
  width: 30%;
  height: 2px;
  background-color: #eee;
}
.pro-header {
  height: 340px;
  background-image: url(../../assets/images/pro-header.png);
  background-size: cover;
  margin-bottom: 76px;
}
// 推荐产品
.recommend-product {
  height: 500px;
  margin-bottom: 68px;
}
.pro-title {
  margin: 76px 0 52px 0;
  text-align: center;
  font-size: 30px;
  color: #020202;
}

.recommend-lists {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.item {
  flex: 1;
  align-items: center;
  overflow: hidden;
  transition: .4s;
  border: 1px solid #ebebeb;
  max-width: 200px;
  height: 280px;
  cursor: pointer;
}

.title {
  font-size: 16px;
  color: #343434;
  font-weight: 400;
  text-align: center;
}

.desc {
  font-size: 14px;
  color: #666666;
  font-weight: 400;
  padding: 33px 80px 75px 71px;
}

.item > span {
  margin: 78px 0 39px 0 ;
  font-size: 18px;
  display: block;
  text-align: center;
}

.item > p {
  width: 100%;
  transition: 5s;
}

.active {
  flex: 1 1 40%;
  height: 360px;
  max-width: 600px;
  animation: move .3s;
}
@keyframes move {
  0% {
    max-width: 280px;
  }
  100% {
    max-width: 600px;
  }
}

// 软件产品
.software {
  width: 100%;
  height: 500px;
  background-color: #F6F8FB;
}
.swCls {
  font-size: 30px;
  color: #020202;
  padding: 50px 0;
  text-align: center;
}
.swContainer {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.swFlex {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  width: 380px;
  height: 300px;
  padding: 20px 22px 67px 22px;
  cursor: pointer;

}
.sw-img {
  width: 336px;
  height: 120px;
  margin: 0 auto;
}
.swDesc {
  margin-top: 31px;
  font-weight: 400;
  color: #666666;
  line-height: 24px;
  font-size: 14px;
}

.position-x {
  position: absolute;
  left: 42%;
  top: 52px;
  color: #ffffff;
  font-size: 14px;
}
.pos-img {
  padding: 0 16px;
}

// 硬件产品
.hdware {
  background-color: #FFFFFF;
  // height: 906px;
  margin: 70px 0 51px 0;
}
.hdCls {
  text-align: center;
  margin-bottom: 50px;
  font-size: 30px;
  line-height: 28px;
  color: #666666;
}
.tabPane {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  // height: 697px;

}
.tabContent {
  position: relative;
  width: 290px;
  height: 230px;
  border: 1px solid #eeeeee;
  margin-top: 78px;
  margin-left: 2px;
  margin-right: 3px;
  box-shadow: 1px 3px 6px 0px #F6F8FB;
}

.left-pos {
  position: absolute;
  bottom: 0;
  margin-top: 27px;
  margin-left: 31px;
  margin-bottom: 23px;
  .tab-img {
    width: 248px;
    height: 149px;
  }
  .left-title {
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    margin-bottom: 12px;
  }
  .left-desc {
    font-size: 14px;
    font-weight: 400;
    color: #333333;

  }
}
.bg-hd {
  margin-top: 71px;
  background-image: url('../../assets/images/tc190.png');
  background-size: cover;
  width: 100%;
  height: 851px;

}

.contact-us {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F6F8FB;
  height: 250px;
}
.con-title {
  font-size: 30px;
  color: #020202;
  margin: 50px 0 27px 0;
}
.con-desc {
  font-size: 14px;
  color: #333333;
  margin-bottom: 20px;
}

.con-func {
  width: 150px;
  height: 36px;
  background-color: #00BAFF;
  color: #fff;
  font-size: 16px;
  text-align: center;
  line-height: 36px;
}

.side-catalog {
    position: fixed;
    top: 50%;
    right: 4%;
}

</style>