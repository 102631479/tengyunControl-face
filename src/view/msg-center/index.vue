<template>
  <div class="page">
    <div class="page-content">
      <div class="title color-02">消息中心</div>

      <ul class="btns">
        <li class="btn" :class="{act:btnIndex === 0 }" @click="btnIndex = 0">全部</li>
        <li class="btn" :class="{act:btnIndex === 1 }" @click="btnIndex = 1">未读</li>
        <li class="btn" :class="{act:btnIndex === 2 }" @click="btnIndex = 2">已读</li>
        <li class="btn" :class="{act:btnIndex === 3 }" @click="btnIndex = 3">全部标为已读</li>
      </ul>

      <ul class="body f-size-12" style="margin-bottom: 128px;">
        <li class="head flex justify-between pl-36 pr-36 pt-22 pb-18 color-333">
          <div class="flex-treble">消息内容</div>
          <div class="flex-sub">接收时间</div>
        </li>
        <li
          class="item border-top flex justify-between align-center cup flex-wrap"
          v-for="(item, index) in list "
          :key="index"
          @click="itemClick(item)"
        >
          <div class="color-999 flex-treble padding">{{item.title}}</div>
          <div class="flex-sub pr-46">{{item.dataCreateTime}}</div>
          <ul class="color-666 w-100p bg-fa lh-30 transi margin" :class="{h0: !item.open}">
            <li>尊敬的用户您好：</li>
            <li>{{item.noticeContent}}</li>
            <li>腾云开放平台 {{item.dataCreateTime}}</li>
          </ul>
          <img class="arr" :class="{open: item.open}" src="@/assets/images/arr-b.png" />
        </li>
        <Page
          :total="total"
          class="t-center"
          show-total
          show-elevator
          @on-page-size-change="changePageSize"
          @on-change="changePage"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { msgAllList, msgItem, msgModify } from "@/api/msg";
export default {
  data() {
    return {
      total: 0,
      btnIndex: 0,
      pageInfo: {
        limit: {
          currentPage: 1,
          pageSize: 10
        }
      },
      list: []
    };
  },
  watch: {
    btnIndex(val) {
      // if(val )
      // if(val === 1) {}
      // val === 1 ? this.init(0)
      val === 3 ? this.lockAll() : this.init(val);
    }
  },
  created() {
    this.init();
  },
  methods: {
    init(viewType = 0) {
      msgAllList({
        ...this.pageInfo,
        receiveId: this.$store.state.user.userInfo.id,
        viewType
      }).then(d => {
        this.list = d.data.list.map(item => {
          item.open = false;
          return item;
        });
      });
    },
    itemClick(item) {
      let { id } = item;
      item.open = !item.open;
      msgItem({ id, receiveId: this.$store.state.user.userInfo.id });
    },
    // 全部标为已读
    lockAll() {
      msgModify({ receiveId: this.$store.state.user.userInfo.id })
        .then(d => {
          this.$Modal.success({ title: "提示", content: "标记成功" });
        })
        .catch(err => this.$Modal.error({ title: "提示", content: err.msg }));
    },
    /**
     * 分页
     */
    changePage(num) {
      this.pageInfo.limit.currentPage = num
      this.init(this.btnIndex);
    },
    /**
     * 切换每页大小
     */
    changePageSize(size) {
      this.pageInfo.limit.pageSize = size
      this.init(this.btnIndex);
    }
  }
};
</script>

<style scoped lang="scss">
.page {
  overflow: hidden;
  min-height: 500px;
  .title {
    background-color: #fff;
    padding: 13px 20px;
    box-shadow: 0px 3px 13px 0px rgba(12, 63, 64, 0.1);
    margin-top: 21px;
  }
  .btns {
    display: flex;
    margin-top: 7px;
    .btn {
      margin-right: 9px;
      padding: 9px 20px;
      color: #444;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(221, 221, 221, 1);
      font-size: 12px;
      cursor: pointer;
    }
    .btn.act {
      border: 1px solid rgba(0, 132, 255, 1);
      background-color: transparent;
      color: rgba(0, 132, 255, 1);
    }
  }
  .body {
    margin-top: 10px;
    background-color: #fff;
    padding: 0 23px 35px;
    .head {
      background-color: #eee;
    }
    li {
    }
    .item {
      position: relative;
      .arr {
        position: absolute;
        right: 20px;
        top: 25px;
        transform: rotate(-90deg);
        cursor: pointer;
        transition: transform 0.3s ease;
      }
      .arr.open {
        transform: rotate(0);
      }
    }
  }
}

.border-top {
  border-top: 1px solid #eee;
}
.padding {
  padding: 22px 36px 18px 36px;
}
.margin {
  padding: 22px 36px 18px 36px;
}
.h0 {
  padding: 0;
  height: 0;
  overflow: hidden;
}
.transi {
  // transition: all .4s ease;
}
</style>