
<template>
  <div class="page">
    <!-- 搜索框 -->
    <div class="search-header flex">
      <div class="search-header-info">
        <Input search enter-button placeholder="请输入想要搜索的关键词" />
        <div class="search-hot">
          <span class="f-size-14">热词：</span>
          <span
            class="f-size-14"
            v-for="(item, index) in [
              '云服务器',
              '云数据库',
              '对象存储',
              '即时通信',
              '网站备案',
              '域名注册',
              '移动直播',
              '短信',
            ]"
            >{{ item }}</span
          >
        </div>
      </div>
    </div>
    <!-- 搜索结果列表 -->
    <div class="result-content">
      <div class="result-content-info flex">
        <!-- 搜索结果 -->
        <div class="result-list">
          <Tabs value="全部">
            <TabPane
              :label="item"
              :name="item"
              v-for="(item, index) in ['全部', '产品', '方案', '文档']"
            >
              <div class="result-list-info">
                <div class="result-box" v-for="(item, index) in 3" :key="index">
                  <p class="f-size-18">云服务器</p>
                  <span class="f-size-14"
                    >windows 系统通过 ftp 上传文件到云服务器,linux 系统通过 scp
                    上传文件到 linux ,linux 常用操作及命令,无公网 cvm 通过带公网
                    cvm 出访公网,初始化数据盘（windows
                    ）,价格总览,调整实例配置,计费概述,计费模式,欠费说明,云硬盘价格总览,共享镜像,云硬盘价格总览,资源
                    ...</span
                  >
                  <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>来自：</el-breadcrumb-item>
                    <el-breadcrumb-item
                      :to="{ path: '/' }"
                      v-for="(item, index) in 2"
                      >首页{{ index + 1 }}</el-breadcrumb-item
                    >
                  </el-breadcrumb>
                </div>
              </div>
              <div class="result-pagination">
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="1000"
                >
                </el-pagination>
              </div>
            </TabPane>
          </Tabs>
        </div>
        <!-- 推荐产品列表 -->
        <div class="recommond-list">
          <div class="recommond-box" v-for="(item, index) in 2" :key="index">
            <p class="f-size-18">推荐云产品</p>
            <p class="f-size-14 cup">云服务器</p>
            <p class="f-size-14 cup">对象存储</p>
            <p class="f-size-14 cup">即时通讯</p>
            <p class="f-size-14 cup">云直播</p>
            <p class="f-size-14 cup">云数据库</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import treeMenu from "./tree-menu";
export default {
  name: "details",
  components: {
    "tree-menu": treeMenu,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
/deep/.el-breadcrumb__inner {
  color: #999999 !important;
}
.page {
  .search-header {
    width: 1200px;
    margin: auto;
    background-color: #f7f8fa;
    justify-content: space-between;
    .search-header-info {
      width: 900px;
      padding: 50px 0 37px;
      .search-hot {
        margin-top: 10px;
        span:first-child {
          color: #999999;
        }
        span {
          color: #444444;
          margin-right: 10px;
        }
      }
    }
  }
  .result-content {
    width: 100%;
    background-color: #ffffff;
    padding: 30px 0;
    .result-content-info {
      width: 1200px;
      margin: auto;
      justify-content: space-between;
      .result-list {
        width: 900px;
        .result-box {
          padding: 10px 0;
          margin-bottom: 20px;
          > p {
            color: #020202;
            margin-bottom: 10px;
          }
          > span {
            display: block;
            color: #666666;
            margin-bottom: 18px;
          }
        }
      }
      .result-pagination {
        width: 900px;
        display: flex;
        justify-content: center;
        padding-top: 30px;
        border-top: 2px solid #eeeeee;
      }
      .recommond-list {
        .recommond-box {
          margin-bottom: 30px;
          p:first-child {
            color: #020202;
            margin-bottom: 15px;
          }
          p {
            color: #666666;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>