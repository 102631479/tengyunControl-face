
<template>
  <div class="page">
      <div class="left">
        <p class="doc-title" ref="t1">文档中心</p>
        <div class="doc-desc">
            <p class="serve-title">云服务器</p>
            <i-input class="serve-btn" icon="ios-search" placeholder="搜索本产品内容"></i-input>
        </div>
        <p class="doc-line"></p>
        <div class="list">
            <ul class="tree_container" v-for="(item, index) in list" :key="index">
                <tree-menu :model="item"></tree-menu>
            </ul>
        </div>

      </div>

    <div class="display-content">
        我是内容详情页
    </div>
    <div class="side-catalog">
        <side-catalog  v-bind="catalogProps" ></side-catalog>
    </div>
  </div>
</template>
<script>
import treeMenu from './tree-menu'
// 动态侧边目录
import SideCatalog from 'vue-side-catalog'
import 'vue-side-catalog/lib/vue-side-catalog.css'
export default {
  name: 'details',
  components: {
    "tree-menu":treeMenu,
    SideCatalog
  },
  data() {
    return {      
    catalogProps:{
        // containerElementSelector: '.demo',
        openDomWatch: true,
        // 自定义动态目录标识
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
    };
  },
};
</script>
<style lang="scss" scoped>
/deep/.ivu-input-icon {
    width: 32px;
    height: 32px;
    line-height: 32px;
    font-size: 18px;
    text-align: center;
    color: #808695;
    position: absolute;
    right: 35px;
    top: 10px;
    z-index: 100000;
}
/deep/.ivu-input {
    display: inline-block;
    width: 180px;
    height: 32px;
    line-height: 1.5;
    margin-top: 10px;
    padding-left: 10px;
    font-size: 14px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    color:#888888;
    background-color: #fff;
    background-image: none;
    position: relative;
    cursor: text;
    -webkit-transition: border 0.2s ease-in-out, background 0.2s ease-in-out, -webkit-box-shadow 0.2s ease-in-out;
    transition: border 0.2s ease-in-out, background 0.2s ease-in-out, -webkit-box-shadow 0.2s ease-in-out;
    transition: border 0.2s ease-in-out, background 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    transition: border 0.2s ease-in-out, background 0.2s ease-in-out, box-shadow 0.2s ease-in-out, -webkit-box-shadow 0.2s ease-in-out;
}
.page {
    display: flex;
    justify-content: flex-start;
    height: 100%;
    background-color: #fff;
    overflow: hidden;
}
    .left {
        display: flex;
        flex-direction: column;
        padding-left: 280px;
        width: 487px;
        padding-top: 42px;
        background-color: #F7F8FA;
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
            background: #DDDDDD;
            margin-bottom: 20px;
        }
    }
    .tree_container {
        width: 180px;
        margin-right: 28px;
        color: red;
    }

    .display-content {
        width: 954px;
        height: 1000px;
        padding-top: 42px;
        padding-left: 56px;
        flex: 1;
        background-color:#FFFFFF;
    }
    .side-catalog {
        position: fixed;
        top: 30%;
        right: 10%;
    }
</style>