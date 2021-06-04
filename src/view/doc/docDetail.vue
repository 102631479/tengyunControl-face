
<template>
  <div class="page">
    <!-- 左侧导航栏 -->
    <div class="tree-menu">
      <p class="doc-title" ref="t1">文档中心</p>
      <div class="doc-desc">
        <p class="serve-title">云服务器</p>
        <i-input
          class="serve-btn"
          icon="ios-search"
          placeholder="搜索本产品内容"
          style="width: 180px; margin-top: 10px"
        ></i-input>
      </div>
      <p class="doc-line"></p>
      <div class="list">
        <ul class="tree_container" v-for="(item, index) in list" :key="index">
          <tree-menu
            :model="item"
            :routerId="detailId"
            @on-change="
              handleClick();
              (val) => (detailId = val.id);
            "
          ></tree-menu>
        </ul>
      </div>
    </div>
    <!-- 右侧内容 -->
    <div class="detail-content" id="detail-content">
      <!-- 页面面包屑 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/doc' }" v-for="(item, index) in 2"
          >首页{{ index + 1 }}</el-breadcrumb-item
        >
      </el-breadcrumb>
      <div class="detail-html" id="detail-html">
        <h1>测试标签</h1>
        <h2>我是详情内容</h2>
        <p>123456789745646</p>
        <p>123456789745646</p>
        <p>123456789745646</p>
        <p>123456789745646</p>
        <p>123456789745646</p>
        <p>123456789745646</p>
        <h2>我是详情内容</h2>
        <p>123456789745646</p>
        <p>123456789745646</p>
        <p>123456789745646</p>
        <p>123456789745646</p>
        <p>123456789745646</p>
        <p>123456789745646</p>
        <h3>我是详情内容</h3>
      </div>
    </div>

    <!-- 详情内容右侧导航 -->
    <div class="fixed-side">
      <div class="href-tree" v-for="(item, index) in hrefList" :key="index">
        <div
          class="href-category-title flex cup"
          @click="handleHrefCheck(item, index)"
          :style="{ color: isHref == item.ref ? '#000000' : '#666666' }"
        >
          <p class="f-size-14">
            {{ item.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import treeMenu from "./tree-menu";
export default {
  components: {
    "tree-menu": treeMenu,
  },
  data() {
    return {
      list: [
        {
          id: "YH",
          name: "产品简介",
          pid: 0,
          childList: [
            {
              id: "YH******",
              name: "协议一",
              pid: "YH",
              childList: [
                {
                  id: "YH*****3",
                  name: "协议三一",
                  pid: "YH******",
                  childList: [],
                },
              ],
            },
            {
              id: "YH*****1",
              name: "协议二",
              pid: "YH******",
              childList: [],
            },
            {
              id: "YH*****2",
              name: "协议三",
              pid: "YH******",
              childList: [],
            },
          ],
        },
        {
          id: "YH",
          name: "API文档",
          pid: 0,
          childList: [
            {
              id: "YH******",
              name: "协议一",
              pid: "YH",
              childList: [
                {
                  id: "YH*****3",
                  name: "协议三一",
                  pid: "YH******",
                  childList: [],
                },
              ],
            },
            {
              id: "YH*****1",
              name: "协议二",
              pid: "YH******",
              childList: [],
            },
            {
              id: "YH*****2",
              name: "协议三",
              pid: "YH******",
              childList: [],
            },
          ],
        },
      ],
      detailId: "YH******", //当前详情展示的对应id
      listData: [{ title: "123" }],
      scroll: "",
      isHref: "",
      isFixed: false,
      catalogProps: {
        container: ".detail-html",
      },
      levelList: ["h1", "h2", "h3", "h4", "h5", "h6"], //根据标签获取等同的dome元素
      hrefList: [], //根据文章内容获取的导航列表
    };
  },
  watch: {
    scroll: function () {
      this.handleLoadSroll();
    },
    detailId(val) {
      this.$Message.success("请求详情接口");
    },
  },
  methods: {
    // 监听滚动位置
    handleScroll() {
      this.scroll = document.documentElement.scrollTop;
      this.isFixed = this.scroll > 600;
    },
    handleLoadSroll() {
      let _this = this;
      for (var i = _this.hrefList.length - 1; i >= 0; i--) {
        if (_this.scroll >= _this.hrefList[i].offsetTop - 90) {
          _this.isHref = _this.hrefList[i].ref;
          break;
        }
      }
    },
    handleHrefCheck(item, index) {
      item.checked = !item.checked;
      this.$set(this.listData, index, item);
      let total = item.offsetTop - 90;
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
      this.isHref = item.ref;
    },
    handleClick() {
      console.log("------");
    },
  },
  mounted() {
    // 监听滚动位置
    window.addEventListener("scroll", this.handleScroll);
    // let headlevel = {};
    // this.levelList.forEach((item, index) => {
    //   headlevel[item] = index + 1;
    // });
    const childrenList = Array.from(
      document.querySelectorAll(".detail-html>*")
    );
    childrenList.forEach((item, index) => {
      const nodeName = item.nodeName.toLowerCase();
      if (this.levelList.includes(nodeName)) {
        this.hrefList.push({
          ref: `${item.nodeName}-${index}`,
          title: item.innerText,
          offsetTop: item.offsetTop,
        });
      }
    });
    this.isHref = this.hrefList[0].ref;
  },
  destroyed() {
    // 移除监听滚动
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: flex-start;
  height: 100%;
  background-color: #fff;
  overflow: hidden;
  .tree-menu {
    display: flex;
    flex-direction: column;
    padding-left: 280px;
    width: 487px;
    padding-top: 42px;
    background-color: #f7f8fa;
    .doc-title {
      margin-bottom: 28px;
      .serve-title {
        font-size: 16px;
        color: #020202;
      }
    }
    .doc-desc {
      font-size: 14px;
      color: #222222;
      margin-bottom: 32px;
    }
    .doc-line {
      width: 180px;
      height: 1px;
      background: #dddddd;
      margin-bottom: 20px;
    }
  }
  .tree_container {
    width: 180px;
    margin-right: 28px;
  }
  .detail-content {
    width: 954px;
    height: 1000px;
    padding-top: 42px;
    padding-left: 56px;
    flex: 1;
    background-color: #ffffff;
    .detail-html {
      width: 900px;
      padding-top: 43px;
    }
  }
  .fixed-side {
    position: fixed;
    top: 200px;
    right: 200px;
    z-index: 1;
    border-left: 2px solid #dddddd;
    padding-left: 12px;
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
}
</style>