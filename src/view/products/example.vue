<!--
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 * 
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *            佛祖保佑       永不宕机     永无BUG
 * 
 *        佛曰:  
 *                写字楼里写字间，写字间里程序员；  
 *                程序人员写程序，又拿程序换酒钱。  
 *                酒醒只在网上坐，酒醉还来网下眠；  
 *                酒醉酒醒日复日，网上网下年复年。  
 *                但愿老死电脑间，不愿鞠躬老板前；  
 *                奔驰宝马贵者趣，公交自行程序员。  
 *                别人笑我忒疯癫，我笑自己命太贱；  
 *                不见满街漂亮妹，哪个归得程序员？
 * 
 * @Author: 大司马
 * @Date: 2020-10-12 16:53:19
 * @LastEditors: huangfu
 * @LastEditTime: 2020-11-06 16:04:29
 * @FilePath: \open-platform-ui\platform-pc-ui\src\view\products\example.vue
 -->

<template>
  <div class="page">
    <div class="header">
      <div>
        <p class="ex-title">刷脸就行</p>
        <p class="ex-desc">
          刷脸即可完成支付，准确率高，安全可靠，有效提升购物体验
        </p>
      </div>
      <img
        :src="
          require('../../assets/images/example/c5e3d925f9851f5ba03861eafa174a09.png')
        "
        style="width: 530px; height: 380px; margin-top: 96px; margin-right: 160px;"
        alt=""
      />
    </div>
    <div class="content-box">
      <div class="cb-one">
        <div class="cb-one-left">
          <img
            :src="
              require('../../assets/images/example/e3c27d5ca690266a0718103199ceccc9.svg')
            "
            alt=""
            class="imgs"
          />
          <div class="article">
            <p class="title">刷脸就行</p>
            <p class="desc">
              刷脸就行是“一部手机游云南”项目中，基于微信
              刷脸支付平台打造是一套全新的O2O双端智慧商业平台，
              可能是全国第一家也是唯一的一家基于微信刷脸支付服
              务实现电子会员应用系统。设想之初是希望我们在迪士尼、
              长隆等综合性度假景区，免除繁复的购买、预订、核验环
              节，实现吃喝玩乐的刷脸就行。我们将刷脸就行的基础功能定义为微信卡券核验、会员刷脸扣费扣次
              应用、智慧商业和电子支付四项功能，并配套开发了无人
              书吧、无人自助服务驿站、无人超市等应用。
            </p>
          </div>
        </div>
        <img src="" alt="" class="cb-one-rt-img" />
      </div>

      <div class="cb-two normal">
        <p class="command-title">产品子功能</p>
        <div class="lists">
          <div class="items">
            <img
              :src="
                require('../../assets/images/example/b69d059df9695a6fec168628abccb5f2.svg')
              "
              alt=""
              class="center"
            />
            <p class="c-media-heading">系统管理</p>
            <p class="c-media-info">
              包括商户基础信息、支付配置、微信支付配置、微信公众号配置、微信发票模板等模块，主要用来设置商户的基础信息作为支撑，让商户能够维护商户信息、收款、收款方式以及具备开发票功能。
            </p>
          </div>
          <div class="items">
            <img
              :src="
                require('../../assets/images/example/b69d059df9695a6fec168628abccb5f2.svg')
              "
              alt=""
              class="center"
            />
            <p class="c-media-heading">门店管理</p>
            <p class="c-media-info">
              主要是商户用来管理所有的门店，并为每个门店设置相关设备及管理人员便于管理。
            </p>
          </div>
          <div class="items">
            <img
              :src="
                require('../../assets/images/example/b69d059df9695a6fec168628abccb5f2.svg')
              "
              alt=""
              class="center"
            />
            <p class="c-media-heading">订单管理</p>
            <p class="c-media-info">
              可管理商户的所有商品订单，商户可查看所有订单信息以及对用户发起的退款做出处理，在订单详情里了解用户的使用情况，并可查看商品的开发票信息。
            </p>
          </div>
          <div class="items">
            <img
              :src="
                require('../../assets/images/example/b69d059df9695a6fec168628abccb5f2.svg')
              "
              alt=""
              class="center"
            />
            <p class="c-media-heading">商品管理</p>
            <p class="c-media-info">
              主要管理所有商品的上下架，并可对用户对商品的评价以及投诉进行查看管理。
            </p>
          </div>
          <div class="items">
            <img
              :src="
                require('../../assets/images/example/b69d059df9695a6fec168628abccb5f2.svg')
              "
              alt=""
              class="center"
            />
            <p class="c-media-heading">营销工具</p>
            <p class="c-media-info">
              主要是微信卡券管理，卡卷的创建包括代金券，团购卷，折扣卷，兑换卷，优惠卷和会员卡的创建。
            </p>
          </div>
        </div>
      </div>

      <div class="cb-three">
        <p class="command-title">优势</p>
        <div class="lists">
          <div class="items">
            <img
              :src="
                require('../../assets/images/example/accc48e4abd9b47ba5058048b829c06c.svg')
              "
              alt=""
              class="center"
            />
            <p class="c-media-heading">双端O2O电商模式</p>
            <p class="c-media-info">
                    刷脸就行同时支持移动智能终端和刷脸智能终端双端的电商交易。相比与传统电商平台，可摆脱手机、电脑等智能终端的限制, 智慧生活刷脸就行。
                
            </p>
          </div>
          <div class="items">
            <img
              :src="
                require('../../assets/images/example/accc48e4abd9b47ba5058048b829c06c.svg')
              "
              alt=""
              class="center"
            />
            <p class="c-media-heading">人脸识别</p>
            <p class="c-media-info">
              刷脸就行依托于微信刷脸支付服务打造，相比传统人脸识别
                优势明显：
                会员的实名身份信息，可用于安全喝药或刷脸入住等场景。
            </p>
          </div>
          <div class="items">
            <img
              :src="require('../../assets/images/example/accc48e4abd9b47ba5058048b829c06c.svg')"
              alt=""
              class="center"
            />
            <p class="c-media-heading">刷脸自助无人服务</p>
            <p class="c-media-info">
            无人服务可以为刷脸就行的会员提供各类无人共享服务，同时这些无人共享服务也将为刷脸就行共贡献大量的会员和成交量。
            </p>
          </div>
        </div>
      </div>
      <div class="cb-four">
        <p class="command-title">应用场景</p>
        <Tabs active-key="key1">
          <Tab-pane label="景区" key="key1">
            <div class="tabs">
              <div class="tabs-top">
                <h4>业务场景</h4>
                <p>景区采用的还是传统方式，利用打印好的门票进行售票、手撕副卷检票流程，导致游客现场购买景区门票滞留情况、管理混乱，游客不能快速入园造成体验度下降，景区实际市场客源区域占比数据不精准，大数据统计不清晰。</p>
                <h4>解决方案</h4>
                <p>
                  刷脸就行应用到智慧景区中可实现“吃住行游购娱展演赛”刷脸就行，免除繁复的购买、预定、核验环节。游客可通过小程序订购单一产品、组合产品、年卡等产品，也可通过线下刷脸终端机、刷脸闸机进行核验。<br />
                  1、门票销售、预约<br />
                  2、会员刷脸扣费扣次应用、刷脸核验<br />
                  3、预约制游览、联票组合票
                </p>
                <img
                  :src="require('../../assets/images/example/b59b1bbbc8798cb852c141716cef4624.png')"
                  style="width: 100%; height: 100%; margin-top: 20px"
                  alt=""
                />
              </div>
            </div>
          </Tab-pane>
          <Tab-pane label="零售" key="key2">
            <div class="tabs">
              <div class="tabs-top">
                <h4>业务场景</h4>
                <p>高峰期排队长，人工收银效率低，导致购物体验急速下降，客户流失；人员成本高居不下，零售企业不堪重负；缺乏可靠可视化统一商品、交易数据，导致管理决策困难。</p>
                <h4>解决方案</h4>
                <p>
                  智慧零售是运用互联网、物联网技术进而感知消费习惯，预测消费趋势，引导生产制造，为消费者提供多样化、个性化的产品和服务。<br />
                  自助收银：通过刷脸终端自定选购商品后支付<br />
                  无人超市、区块链电子发票、AI智能客服<br />
                  支持支付宝、微信、刷脸、银联支付方式<br />
                </p>
                <img
                  :src="
                    require('../../assets/images/example/b5c4b11ca0843c80ce4d6203ddda0a6b.png')
                  "
                  style="width: 100%; height: 100%; margin-top: 20px"
                  alt=""
                />
              </div>
            </div>
          </Tab-pane>
          <Tab-pane label="餐饮" key="key3">
            <div class="tabs">
              <div class="tabs-top">
                <h4>业务场景</h4>
                <p>
                 人工收银，对账麻烦；营销方式过于单一，难寻突破口；收银排队找零麻烦；门店管理比较混乱。
                </p>
                <h4>解决方案</h4>
                <p>
                    智慧餐厅解决方案中，支持扫码点餐、自助终端机点餐、后厨互动传菜、排队叫号系统等功能，可显著解决用工数量、降低经营成本、提升管理绩效。<br />
                  1、行人重识别（人体ReID）：通过识别行人的穿着、体态、发型等属性信息，实现跨摄像头、跨场景下行人的识别与检索，可有效降低视频搜索成本。<br />
                  2、行人重识别+人脸识别：使用行人重识别实现人体的跨镜追踪及识别，再利用人脸搜索定位个人身份，可用在智慧零售、智慧安防等场景，帮助确认行人身份。
                </p>
                <img
                  :src="
                    require('../../assets/images/example/9733ef20946b955d6b7492df53cfafa3.png')
                  "
                  style="width: 100%; height: 100%; margin-top: 20px"
                  alt=""
                />
              </div>
            </div>
          </Tab-pane>
        </Tabs>
      </div>
    </div>
    <div class="footer">
      <div class="f-left">
        <h4 class="home-recommend-tit">开始使用腾讯云人体分析</h4>
        <div class="home-recommend-on">
          <p class="home-recommend-desc">
            按照我们的 入门指南，只需点几次鼠标，<br />
            即可轻松体验人体分析。
          </p>
          <p class="home-recommend-btn">开始使用</p>
        </div>
      </div>

      <div class="f-right">
        <div class="f-r-left">
          <h4 class="home-recommend-tit">联系我们</h4>
          <div class="home-recommend-on">
            <p class="home-recommend-desc">
              手机扫码关注公众号“腾讯云 AI”，获取最新产品动态及活动信息。<br />
              点击“联系我们”按钮，获得全面的技术售后服务
            </p>
            <p class="home-recommend-btn">联系我们</p>
          </div>
        </div>
        <img
          src="https://main.qcloudimg.com/raw/e36ace7af5c40ba6c8379d8786ca22f8.png"
          alt=""
          class="f-r-top"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: ``,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./example.scss";
</style>