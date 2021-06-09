<!--
 * @Author: Echo
 * @Date: 2021-02-21 15:33:19
 * @LastEditors: Echo
 * @LastEditTime: 2021-02-25 15:33:19
 * @FilePath: \open-platform-ui\platform-pc-ui\src\view\products\example.vue
 -->
<template>
  <div class="page" ref="page" id="page">
    <!-- 占位广告图 -->
    <div class="banner" ref="banner">
      <div class="banner-text">
        <p class="f-size-40">智慧文旅云产品</p>
        <span class="f-size-16"
          >从基础设施到行业应用领域，智慧文旅云提供完善的产品体系，助力您的业务腾飞</span
        >
        <!-- <Input
          suffix="ios-search"
          placeholder="请输入你想了解的产品名称"
          style="width: 720px"
        /> -->
      </div>
      <img src="@/assets/images/product/banner_cp.png" />
    </div>
    <!-- 热门、最新、最新发布产品 -->
    <div class="product-activity flex" ref="hotProHeight">
      <div class="product-activity-info flex" style="justify-content: space-evenly;">
        <!-- 热门产品 -->
        <div class="product-activity-box">
          <div class="product-activity-title flex">
            <img src="@/assets/images/product/ic_tytb_hot.png" alt="" />
            <span class="f-size-20">热门产品</span>
          </div>
          <!-- <div
            class="product-activity-text cup"
            v-for="item in 3"
            :key="item"
            @click="handleJump"
          >
            <p class="f-size-16">刷脸就行</p>
            <p class="f-size-14">吃喝玩乐，刷脸就行</p>
          </div> -->
          <div class="activity-box-popular">
               <div class="popularRepeat"
                v-for="item in HotProducts"
                :key="item.id"
               @click="handleJump(item.id)">
                 <p class="f-size-16">{{item.businessName}}</p>
                 <p class="f-size-14" style="margin-top: 10px">{{item.productDescribe}}</p>
               </div>
          </div>
        </div>
        <!-- 最新产品 -->
        <div class="product-activity-box">
          <div class="product-activity-title flex">
            <img src="@/assets/images/product/ic_tytb_new.png" alt="" />
            <span class="f-size-20">最新产品</span>
          </div>
          <!-- <div
            class="product-activity-text cup"
            v-for="item in 3"
            :key="item"
            @click="handleJump"
          >
            <p class="f-size-16">刷脸就行</p>
            <p class="f-size-14">吃喝玩乐，刷脸就行</p>
          </div> -->
          <div class="activity-box-popular">
              <div class="popularRepeat"
              v-for="item in NewProducts"
              :key="item.id"
              @click="handleJump(item.id)"
              >
                <p class="f-size-16">{{item.businessName}}</p>
                <p class="f-size-14" style="margin-top: 10px">{{item.productDescribe}}</p>
              </div>
          </div>
        </div>
        <!-- 最新发布 -->
        <!-- <div class="product-activity-box">
          <div class="product-activity-title flex">
            <img src="@/assets/images/product/ic_tytb_sub.png" alt="" />
            <span class="f-size-20">最新发布</span>
          </div>
          <div
            class="product-activity-text cup"
            v-for="item in 3"
            :key="item"
            @click="handleJump"
          >
            <p class="f-size-16">刷脸就行</p>
            <p class="f-size-14">吃喝玩乐，刷脸就行</p>
          </div>
        </div> -->
      </div>
    </div>
    <!-- 全部产品列表 -->
    <div class="product-content flex">
      <!-- 产品列表 -->
      <div class="product-list">
        <!-- 一级 -->
        <div
          class="product-category"
          v-for="(item, index) in listData"
          :key="index"
        >
          <p class="product-category-title f-size-30" :ref="`t${index + 1}`">
            {{ item.name }}
          </p>
          <!-- 二级 -->
          <div
            class="product-box"
            v-for="(child, childIndex) in item.children"
            :key="childIndex"
          >
            <p
              class="font-size-20 href-select"
              :id="`id${childIndex}`"
              :ref="`t${index + 1}-${childIndex + 1}`"
            >
              {{ child.name }}
            </p>
            <!-- 三级 -->
            <div class="product-map-list flex">
              <div
                class="product-map-box cup"
                v-for="(res, resIndex) in child.navigateBusinessVos"
                :key="resIndex"
                @click="handleJump(item.id)"
              >
                <p class="f-size-16">{{ res.businessName }}</p>
                <span class="f-size-14">
                  {{res.businessDescribe}}
                  <!-- 暂无数据 -->
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 锚点列表展示 -->
      <div class="product-href" :class="isFixed ? 'product-href-fixed' : ''">
        <p class="product-href-title f-size-16">产品类别</p>
        <div
          class="product-href-tree"
          v-for="(item, index) in listData"
          :key="index"
        >
          <div
            class="href-category-title flex cup"
            :class="item.checked ? 'href-category-active' : ''"
            @click="handleHrefCheck(item, index)"
          >
            <p
              class="f-size-14"
              :style="{ color: item.checked ? '#000000' : '#999999' }"
            >
              {{ item.name }}
            </p>
            <Icon
              type="ios-arrow-down"
              class="icon"
              :style="{
                transform: item.checked ? 'rotate(180deg)' : 'rotate(0)',
              }"
            />
          </div>
          <div class="product-href-tree-text" v-if="item.checked">
            <p
              v-for="(child, childIndex) in item.children"
              :key="childIndex"
              class="f-size-14 cup"
              :style="{
                color:
                  isHref == `index${index}-child${childIndex}`
                    ? '#00BAFF'
                    : '#999999',
              }"
              :ref="`index${index}-child${childIndex}`"
              @click.stop="handleHref(index, childIndex)"
            >
              {{ child.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 联系我们 -->
    <div class="contact-us content-box">
      <div class="contact-us-info content-box-info flex">
        <div class="contact-us-box flex">
          <p class="contact-us-title f-size-24">开始体验免费套餐</p>
          <span class="f-size-16"
            >注册即可领取N+宽免费体验产品，为您提供便捷优质的智慧上云</span
          >
          <span class="f-size-16"
            >机会。企业用户最高可获取***天**体验成长，</span
          >
          <Button type="primary" @click="navgetConsole">开始使用</Button>
        </div>
        <div class="contact-us-box flex">
          <p class="contact-us-title f-size-24">联系我们</p>
          <span class="f-size-16">我们为您提供个性化的售前购买咨询服务，</span>
          <span class="f-size-16">以及全面的技术售后服务</span>
          <Button type="primary" ghost>联系我们</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHotProducts, getNewProducts, getBasicProduct } from '../../api/products.js'
// 动态侧边目录
export default {
  data () {
    return {
      isFixed: false, // 锚点定位模块是否固定定位状态
      HotProducts: [], // 热门产品
      NewProducts: [], // 最新产品
      listData: [
        {
          // title: "智慧景区",
          // children: [
          //   {
          //     title: "基础设施",
          //     children: [
          //       {
          //         title: "电力系统",
          //         value: "为景区提供数据展示和数据分析",
          //       },
          //       {
          //         title: "网格系统",
          //         value: "为景区提供数据展示和数据分析",
          //       },
          //     ],
          //   },
          //   {
          //     title: "智慧管理",
          //     children: [
          //       {
          //         title: "门票",
          //         value: "为景区提供数据展示和数据分析",
          //       },
          //     ],
          //   },
          // ],
        }
        // {
        //   title: "特色小镇",
        //   children: [
        //     {
        //       title: "一部手机系列",
        //       children: [
        //         {
        //           title: "特色名片",
        //           value: "为景区提供数据展示和数据分析",
        //         },
        //         {
        //           title: "导游导览",
        //           value: "为景区提供数据展示和数据分析",
        //         },
        //       ],
        //     },
        //     {
        //       title: "刷脸就行",
        //       children: [
        //         {
        //           title: "青蛙刷脸支付",
        //           value: "为景区提供数据展示和数据分析",
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
      scroll: '',
      isHref: ''
    }
  },
  watch: {
    scroll: function () {
      this.handleLoadSroll()
    }
  },
  created () {
    this.init()
  },
  methods: {
    // 监听滚动位置
    handleScroll () {
      //   window.pageYOffset ||
      //   document.documentElement.scrollTop ||
      //   document.body.scrollTop;
      this.scroll = document.documentElement.scrollTop
      this.isFixed = this.scroll > 400
    },
    // 控制锚点滚动
    handleHref (index, childIndex) {
      let jump = document
        .getElementsByClassName('product-category')[index]
        .getElementsByClassName('href-select') // 获取当前点击的元素
      let bannerHeight = this.$refs.banner.offsetHeight // 获取banner高度以计算偏移量
      let hotProHeight = this.$refs.hotProHeight.offsetHeight // 获取banner高度以计算偏移量
      let total = jump[childIndex].offsetTop + bannerHeight + hotProHeight - 20 // 计算当前的offset在浏览窗口的整体偏移量
      let step = total / 50 // 平滑滚动的效果，把总距离分成50个小段，每10ms执行一次
      let distance =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset // 获取滚动条的高度(兼容三种浏览器版本)
      if (total > distance) {
        smoothDown() // 向下滑动
      } else if (total < distance) {
        let newTotal = distance - total // 当div到窗口的距离<滚动条的距离，向上滑动，此时滑动的距离是distance - total
        step = newTotal / 20
        smoothUp()
      } else {
        document.body.scrollTop = total
        document.documentElement.scrollTop = total
        window.pageYOffset = total
      }
      // 向下滑动
      function smoothDown () {
        if (distance < total) {
          distance = distance + step
          document.body.scrollTop = distance
          document.documentElement.scrollTop = distance
          window.pageYOffset = total
          setTimeout(smoothDown, 10)
        }
      }
      // 向上滑动
      function smoothUp () {
        if (distance > total) {
          distance -= step
          document.body.scrollTop = distance
          document.documentElement.scrollTop = distance
          window.pageYOffset = total
          setTimeout(smoothUp, 10)
        }
      }
      this.isHref = `index${index}-child${childIndex}`
    },
    handleLoadSroll () {
      let _this = this
      let sections = document.getElementsByClassName('product-category')
      let index = 0
      for (var i = 0; i < sections.length; i++) {
        if (
          _this.scroll >=
          sections[i].offsetTop +
            this.$refs.banner.offsetHeight +
            this.$refs.hotProHeight.offsetHeight -
            100
        ) {
          index = i
        }
      }
      let href = sections[index].getElementsByClassName('href-select')
      for (var i = href.length - 1; i >= 0; i--) {
        if (
          _this.scroll >=
          href[i].offsetTop +
            this.$refs.banner.offsetHeight +
            this.$refs.hotProHeight.offsetHeight -
            100
        ) {
          _this.isHref = `index${index}-child${i}`
          break
        }
      }
    },
    // 跳转
    handleJump (id) {
      this.$router.push({ // GET
        path: '/productDetail',
        query: { id }
      })
      // this.$router.push({  //POST
      //   name:"productDetail",
      //   params:{id}
      // });
    },
    handleHrefCheck (item, index) {
      item.checked = !item.checked
      this.$set(this.listData, index, item)
    },
    init () {
      // 获取热门产品
      getHotProducts().then(res => {
        this.HotProducts = res.data
      }).catch(err => {
        console.log(err)
      })
      // 获取最新产品
      getNewProducts().then(res => {
        this.NewProducts = res.data
      }).catch(err => {
        console.log(err)
      })
      // 获取产品列表
      getBasicProduct('001').then(res => {
        let BasicList = JSON.parse(res.data)
        this.listData = BasicList
        console.log(222, BasicList)
      }).catch(err => {
        console.log(err)
      })
    },
    navgetConsole () {
      console.log('跳转控制台个人中心,在页面中申请使用')
    }

  },
  mounted () {
    this.listData.map((res) => {
      res.checked = false
    })
    this.listData[0].checked = true
    // 监听滚动位置
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    // 移除监听滚动
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
