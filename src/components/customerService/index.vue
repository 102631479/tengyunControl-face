<template>
  <div>
    <div class="customer">
      <!-- <div class="box" @click="customer = !customer"></div> -->

      <div class="box" @click="customer = !customer"></div>

      <div class="txt" @click="leftBox = !leftBox">联系我们</div>

      <div v-show="customer" @click="customer = false" class="unDev">
        此功能正在开发中...
      </div>
      <!-- 聊天 -->
      <div class="left-box" v-if="leftBox" @click="leftBox = false">
        <div class="flex item" @click="$router.push({ path: 'contact' })">
          <img src="@/assets/images/phone.png" style="width: 25px" />
          <div class="contact">
            <span class="tit">售前咨询电话</span>
            <span class="tit phone">18201401676</span>
          </div>
          <!-- <span class="tit" @click="$router.push({ path: 'contact' })">联系我们</span> -->
        </div>
        <div class="flex item" @click="toPath">
          <img src="@/assets/images/edit.png" style="width: 25px" />
          <span class="tit">建议反馈</span>
        </div>
      </div>
      <!-- 回到顶部 -->
      <div class="arr" @click="toTop">
        <img src="@/assets/images/arr-top.png" />
      </div>
    </div>

    <!-- 客服对话框 -->
    <!-- <customerService v-if="customer" /> -->
  </div>
</template>

<script>
import customerService from "./customerService";
export default {
  components: { customerService },
  data() {
    return {
      customer: false,
      leftBox: false,
    };
  },
  methods: {
    toPath() {
      if (!this.$store.state.user.userInfo.id) {
        this.$Message.error("请先登录，再反馈");
        this.$router.push("./login");
        return;
      }
      this.$router.push({ path: "feedback" });
    },

    toTop() {
      var scrollToTop = window.setInterval(function () {
        var pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 100); // how far to scroll on each step
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16); // how fast to scroll (this equals roughly 60 fps)
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.unDev {
  position: fixed;
  top: 60%;
  right: 3.5%;
  width: 140px;
  height: 48px;
  padding: 0 6px;
  line-height: 48px;
  color: #999;
  background-color: #f4f4f4;
  font-size: 14px;
}

.customer {
  position: fixed;
  width: 48px;
  height: 134px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 8px 0px rgba(0, 186, 255, 0.12);
  border-radius: 2px;
  right: 20px;
  top: 60%;
  cursor: pointer;
  z-index: 999;
  .box {
    width: 48px;
    height: 48px;
    background-color: #00baff;
    background-image: url("~@/assets/icons/msg.png");
    background-size: 60% 60%;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .left-box {
    box-sizing: border-box;
    position: absolute;
    padding-left: 20px;
    left: -230px;
    top: 0;
    width: 220px;
    height: 111px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 8px 0px rgba(0, 186, 255, 0.12);
    .item {
      display: flex;
      align-items: center;
      height: 50%;
      .tit {
        margin-left: 20px;
        font-size: 14px;
        color: #333;
      }
      .phone {
        color: #00baff;
        font-size: 14px;
      }
    }
  }
  .txt {
    writing-mode: tb-rl;
    text-align: center;
    width: 100%;
    line-height: 48px;
    text-indent: 10px;
  }
  .arr {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 8px 0px rgba(0, 186, 255, 0.12);
    border-radius: 2px;
    bottom: -60px;
    left: 0;
    right: 0;
    margin: auto;
    img {
      width: 21px;
    }
  }
}
</style>
