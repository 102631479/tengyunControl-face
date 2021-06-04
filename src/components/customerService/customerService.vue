<template>
  <div class="customer-service">
    <header class="header ">
      <div>
        <span class="f-size-18 color-02 f-size-18">智能客服</span>
        <span class="color-999 f-size-12 ml-24">协助您高效解决问题</span>
      </div>
      <div class="color-999 f-size-12">智能助手24小时为您解答问题</div>
    </header>
    <div class="flex">
      <div class="content">
        <ul class="aop">
          <li class="aop-title">Hi,欢迎使用智慧文旅云智能QQ客服</li>
          <li class="aop-q1">
            <img
              :src="require('../../assets/images/QQ@2x (1).png')"
              style="width: 32px"
              alt=""
              srcset=""
            />
            <a href="https://wpa.qq.com/msgrd?v=3&uin=2227879064&site=qq&menu=yes">3215635730 加我直接聊天</a>
            
          </li>
          <li class="aop-q1">
            <img
              :src="require('../../assets/images/QQ@2x (1).png')"
              style="width: 32px"
              alt=""
              srcset=""
            />
            3088357490 加我直接聊天
          </li>
          <li class="timeline">
            服务时间：周一到周五 9:00-18:00
          </li>
        </ul>
      </div>
      <div class="flex-sub pl-20 pt-28 color-333">
        <div class="f-size-14 mb-22">热门问题</div>
        <div class="mb-12 f-size-12">1.如何登录？</div>
        <div class="f-size-12">2.企业实名认证问题</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.customer-service {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 978px;
  height: 800px;
  background: rgba(255, 255, 255, 1);
  flex-direction: column;
  box-shadow: 0px 4px 8px 0px rgba(0, 186, 255, 0.12);
  z-index: 999;
  .header {
    box-sizing: border-box;
    padding: 0 24px 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 58px;
    border-bottom: 1px solid #eee;
  }
  .content {
    width: 683px;
    height: 558px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  // 谈话框
  .aop {
    margin: 40px;
    padding: 20px;
    background-color: #f5f5f5;
    &-title {
      font-size: 14px;
      color: #333;
      font-family: Microsoft YaHei Regular, Microsoft YaHei Regular-Regular;
      font-weight: 400;
    }
    &-q1 {
      display: flex;
      align-items: center;
      color: #00baff;
      font-size: 14px;
      // margin-top: 16px;
    }
    .timeline {
      font-size: 14px;
      color: #333333;
      margin-top: 34px;
    }
  }
  .aop::before {
    position: relative;
    top: -12px;
    left: -50px;
    content: '';
    width: 0;
    height: 0;
    border-top: 10px solid #f5f5f5;
    border-right: 0px solid transparent;
    border-left: 30px solid transparent;
  }
}
</style>
