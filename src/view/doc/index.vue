<!--
 * @Author: your name
 * @Date: 2020-09-23 13:10:58
 * @LastEditTime: 2021-01-20 15:55:40
 * @LastEditors: 大司马
 * @Description: In User Settings Edit
 * @FilePath: \open-platform-ui\platform-pc-ui\src\view\doc\index.vue
 -->
<template>
  <div class="page">
    <div class="header" ref="header">
      <p class="f-size-34">智慧文旅云文档中心</p>
      <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearch"
        placeholder="请输入文档关键词"
        @select="handleSelect"
        style="width: 514px"
      >
        <i class="el-input__icon el-icon-search" slot="suffix"> </i>
        <template slot-scope="{ item }">
          <div @click="handleJump('/docSearch')">
            <p class="f-size-14" style="padding-top: 10px; line-height: 16px">
              {{ item.value }}
            </p>
            <span class="f-size-12" style="color: #999999">{{
              item.address
            }}</span>
          </div>
        </template>
      </el-autocomplete>
      <div class="search-hot">
        <span class="f-size-14">搜索热词：</span>
        <span
          class="f-size-14 cup"
          v-for="(item, index) in [
            '智慧景区',
            '票务系统',
            '大数据接口',
            '微信小程序接口',
            '云数据库调取',
          ]"
          :key="index"
          >{{ item }}</span
        >
      </div>
    </div>
    <div class="content normal-padding">
      <div class="content-left">
        <div class="left-side">
          <p class="type title">产品类别</p>
          <i-input
            icon="ios-search"
            placeholder="请输入..."
            style="width: 140px"
          ></i-input>
        </div>
        <div class="href-tree-list" :class="isFixed ? 'href-fixed' : ''">
          <div class="href-tree" v-for="(item, index) in listData" :key="index">
            <div
              class="href-category-title flex cup"
              @click="handleHrefCheck(item, index)"
            >
              <p class="f-size-14">
                {{ item.title }}
              </p>
              <Icon
                type="ios-arrow-down"
                class="icon"
                :style="{
                  transform: item.checked ? 'rotate(180deg)' : 'rotate(0)',
                  color: item.checked ? '#00A4FF' : '#CACACA',
                }"
              />
            </div>
            <div class="href-tree-text" v-if="item.checked">
              <p
                v-for="(child, childIndex) in item.children"
                :key="childIndex"
                class="f-size-14 cup"
                :style="{
                  color:
                    isHref == `index${index}-child${childIndex}`
                      ? '#00BAFF'
                      : '#333333',
                }"
                :ref="`index${index}-child${childIndex}`"
                @click.stop="handleHref(index, childIndex)"
              >
                {{ child.title }}
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="left-side">
          <div class="side-header" @click="changeArrow(1)">
            <p>快速入门</p>
            <img
              v-if="flag && index == 1"
              :src="require('../../assets/images/tc131.png')"
              alt=""
            />
            <img
              v-else
              :src="require('../../assets/images/tc130.png')"
              alt=""
            />
          </div>
          <ul v-show="flag && index == 1">
            <li @click="handleJump">如何登录</li>
            <li>如何付款</li>
            <li>如何下单</li>
          </ul>
        </div>
        <div class="left-side">
          <div class="side-header" @click="changeArrow(2)">
            <p>KPI中心</p>
            <img
              v-if="flag && index == 2"
              :src="require('../../assets/images/tc131.png')"
              alt=""
            />
            <img
              v-else
              :src="require('../../assets/images/tc130.png')"
              alt=""
            />
          </div>
          <ul v-show="flag && index == 2">
            <li>数据接口</li>
            <li>付款接口</li>
            <li>资金接口</li>
          </ul>
        </div>
        <div class="left-side">
          <div class="side-header" @click="changeArrow(3)">
            <p>政策文档</p>
            <img
              v-if="flag && index == 3"
              :src="require('../../assets/images/tc131.png')"
              alt=""
            />
            <img
              v-else
              :src="require('../../assets/images/tc130.png')"
              alt=""
            />
          </div>
          <ul v-show="flag && index == 3">
            <li>景区政策</li>
            <li>采购政策</li>
            <li>建设意见</li>
          </ul>
        </div> -->
      </div>
      <div class="doc-list">
        <div class="doc-head" ref="docHead">
          <p class="f-size-30">产品文档</p>
          <p class="f-size-16">
            腾云产品文档从产品简介，购买指导，操作指南，API参考，SDK资源下载，常见问题等方面阐述，助你快速部署上云。
          </p>
        </div>
        <div class="doc-modal" v-for="(item, index) in listData" :key="index">
          <div
            class="doc-box"
            v-for="(child, childIndex) in item.children"
            :key="childIndex"
          >
            <div class="doc-title flex">
              <img src="@/assets/images/download1.png" alt="" srcset="" />
              <span class="f-size-16">{{ child.title }}</span>
            </div>
            <div class="doc-info-list flex">
              <p
                class="f-size-14 cup"
                v-for="(res, resIndex) in child.children"
                :key="resIndex"
                @click="handleJump('/docDetail')"
              >
                {{ res.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer normal-padding">
      <div class="foot-item">
        <img
          class="foot-img"
          :src="require('../../assets/images/group9.png')"
          alt=""
        />
        <p class="tech title">技术交流中心</p>
        <p class="desc">汇集前言技术，分享干货</p>
      </div>
      <div class="foot-item">
        <img
          class="foot-img"
          :src="require('../../assets/images/group11.png')"
          alt=""
        />
        <p class="tech title">技术交流中心</p>
        <p class="desc">汇集前言技术，分享干货</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      index: 0,
      state: "",
      listData: [
        {
          title: "快速入门",
          children: [
            {
              title: "如何登录",
              children: [
                {
                  title: "平台登录",
                },
                {
                  title: "后台登录",
                },
                {
                  title: "产品登录",
                },
              ],
            },
            {
              title: "数据接口",
              children: [
                {
                  title: "平台数据",
                },
                {
                  title: "APP数据",
                },
              ],
            },
          ],
        },
        {
          title: "KPI中心",
          children: [
            {
              title: "数据接口",
              children: [
                {
                  title: "平台数据",
                },
                {
                  title: "APP数据",
                },
              ],
            },
            {
              title: "付款接口",
              children: [
                {
                  title: "资金展示",
                },
                {
                  value: "资金分佣",
                },
              ],
            },
          ],
        },
      ],
      scroll: "",
      isHref: "index0-child0",
      isFixed: false,
    };
  },
  watch: {
    scroll: function () {
      this.handleLoadSroll();
    },
  },
  methods: {
    // 监听滚动位置
    handleScroll() {
      this.scroll = document.documentElement.scrollTop;
      this.isFixed = this.scroll > 600;
    },
    // 控制锚点滚动
    handleHref(index, childIndex) {
      let jump = document
        .getElementsByClassName("doc-modal")
        [index].getElementsByClassName("doc-box"); //获取当前点击的元素
      let total =
        jump[childIndex].offsetTop - this.$refs.header.offsetHeight + 240; //计算当前的offset在浏览窗口的整体偏移量
      let step = total / 50; //平滑滚动的效果，把总距离分成50个小段，每10ms执行一次
      let distance =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset; //获取滚动条的高度(兼容三种浏览器版本)
      if (total > distance) {
        smoothDown(); //向下滑动
      } else if (total < distance) {
        let newTotal = distance - total; //当div到窗口的距离<滚动条的距离，向上滑动，此时滑动的距离是distance - total
        step = newTotal / 20;
        smoothUp();
      } else {
        document.body.scrollTop = total;
        document.documentElement.scrollTop = total;
        window.pageYOffset = total;
      }
      //向下滑动
      function smoothDown() {
        if (distance < total) {
          distance = distance + step;
          document.body.scrollTop = distance;
          document.documentElement.scrollTop = distance;
          window.pageYOffset = total;
          setTimeout(smoothDown, 10);
        }
      }
      //向上滑动
      function smoothUp() {
        if (distance > total) {
          distance -= step;
          document.body.scrollTop = distance;
          document.documentElement.scrollTop = distance;
          window.pageYOffset = total;
          setTimeout(smoothUp, 10);
        }
      }
      // // 基于浏览器窗口对scrollTop进行复制
      // // Chrome
      // document.body.scrollTop = total;
      // // Firefox
      // document.documentElement.scrollTop = total;
      // // Safari
      // window.pageYOffset = total;
      this.isHref = `index${index}-child${childIndex}`;
    },
    handleLoadSroll() {
      let _this = this;
      let sections = document.getElementsByClassName("doc-modal");
      let index = 0;
      for (var i = 0; i < sections.length; i++) {
        if (_this.scroll >= sections[i].offsetTop - 120) {
          index = i;
        }
      }
      let href = sections[index].getElementsByClassName("doc-box");
      for (var i = href.length - 1; i >= 0; i--) {
        if (_this.scroll >= href[i].offsetTop - 120) {
          _this.isHref = `index${index}-child${i}`;
          break;
        }
      }
    },
    handleHrefCheck(item, index) {
      item.checked = !item.checked;
      this.$set(this.listData, index, item);
    },
    handleJump(path) {
      this.$router.push(path);
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号",
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113",
        },
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    handleIconClick(ev) {
      console.log(ev);
    },
  },
  mounted() {
    this.restaurants = this.loadAll();
    this.listData.map((res) => {
      res.checked = false;
    });
    this.listData[0].checked = true;
    // 监听滚动位置
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    // 移除监听滚动
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="scss" scoped>
.page {
  background-color: #fff;
}

.header {
  background-image: url("../../assets/images/doc/banner_bg_wd.png");
  background-position: center;
  width: 100%;
  height: 340px;
  background-repeat: no-repeat;
  border: none;
  margin-top: -2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > p {
    color: #ffffff;
    margin-bottom: 20px;
    font-weight: 700;
  }
  .search-hot {
    color: #ffffff;
    margin-top: 30px;
    span {
      margin-right: 10px;
    }
    span:last-child {
      margin-right: 0;
    }
  }
}
.content {
  width: 95%;
  max-width: 1200px;
  min-width: 600px;
  display: flex;
  justify-content: flex-start;
  background-color: #fff;
  margin: 70px auto;
}
.content-left {
  width: 140px;
  margin-top: 115px;
  margin-right: 44px;
  .left-side {
    margin-bottom: 20px;
    .side-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 12px;
      cursor: pointer;
    }
    .type {
      margin-bottom: 21px;
    }
    ul li {
      padding: 19px 0 0 16px;
      font-size: 14px;
      color: #333333;
      cursor: pointer;
    }
    ul li:hover,
    ul li:active {
      font-size: 14px;
      color: #00a4ff;
    }
  }
  .href-tree-list {
    position: relative;
    .href-tree {
      .href-category-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        margin-bottom: 15px;
      }
      .href-tree-text {
        > p {
          padding-left: 15px;
          margin-bottom: 20px;
        }
        p:hover {
          color: #00a4ff !important;
        }
      }
      .icon {
        position: relative;
        transition: transform 0.3s linear;
      }
    }
  }
  .href-fixed {
    width: 140px;
    position: fixed;
    top: 150px;
  }
}

.doc-list {
  width: 100%;
  .doc-head {
    p:first-child {
      text-align: center;
      margin-bottom: 10px;
      color: #000000;
    }
    p:last-child {
      margin-bottom: 40px;
      color: #333333;
    }
  }
  .doc-box {
    padding: 30px 25px;
    border: 1px solid #eeeeee;
    margin-bottom: 37px;
    .doc-title {
      align-items: center;
      margin-bottom: 25px;
      img {
        width: 20px;
        height: 20px;
        margin-right: 4px;
      }
      span {
        color: #020202;
      }
    }
    .doc-info-list {
      flex-wrap: wrap;
      p {
        display: flex;
        width: 150px;
        color: #333333;
      }
      p:hover {
        color: #00baff;
      }
    }
  }
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f8fb;
  height: 220px;
  padding: 55px 0 58px 0;
  .foot-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 27px;
    .foot-img {
      width: 44px;
      height: 44px;
    }
    .tech {
      margin: 16px 0 16px 0;
      font-weight: 500;
    }
  }
  .title {
    font-size: 16px;
    color: #020202;
  }

  .desc {
    font-size: 14px;
    color: #666666;
  }
}
</style>