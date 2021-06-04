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
 * @Author: 大司马
 * @Date: 2020-10-09 16:47:31
 * @LastEditors: 大司马
 * @LastEditTime: 2020-10-10 13:44:36
 * @FilePath: \open-platform-ui\platform-pc-ui\src\view\payfor\lists\payment.vue
 -->


<template>
  <div class="page">
    <div class="top normal-padding">
      <div class="top-left">
        <p class="title">智慧旅游开放平台</p>
        <p class="desc">订单支付</p>
      </div>
      <p class="top-right">账号：100012083424</p>
    </div>

    <div class="content normal-margin">
      <div class="status">
            <img :src="require('../../../assets/images/payfor/ok.png')" class="imgs" alt="">
            <p class="payStatus">支付中...</p>
      </div>

      <div class="details">
        <div class="flex">
          <p class="title">商品订单：</p>
          <p class="desc">2019120901003918203902865845123010</p>
        </div>
        <div class="flex">
          <p class="title">支付金额：</p>
          <p class="price">￥1.00</p>
          <p class="orders">订单详情 <i class="arrows"></i> </p>
        </div>
        <!-- <div class="flex">
          <p class="title">商品名称：</p>
          <p class="desc">账号100012083424-旅游开放平台</p>
        </div>
        <div class="flex">
          <p class="title">支付订单：</p>
          <p class="desc">E-2023031035306363203203363</p>
        </div>
        <div class="flex">
          <p class="title">应付金额：</p>
          <p class="desc">￥1.00</p>
        </div>
        <div class="flex">
          <p class="title">支付方式：</p>
          <p class="desc">微信支付</p>
        </div>
        <div class="flex">
          <p class="title"> 购买时间：</p>
          <p class="desc">2020年03月27日 </p>
        </div> -->
        <p class="desc">如有疑问请与客服联系，我们将尽快为您提供服务。</p>
        <p class="desc">客服电话：666666</p>
        <p class="back" @click="back">返回</p>
        <!-- <Button class="back" @click="back">返回1</Button> -->
      </div>
      <el-dialog
            title="提示"
            :visible.sync="modal1"
            :show-close=false
            width="30%"
            top=300px
            >
            <div class="center title">
                <img :src="require('../../../assets/images/payfor/warn.png')" class="img" alt="">
                <p>您尚未支付成功，请继续支付!!!</p>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="modal1 = false">我知道了</el-button>
            </span>
        </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        status: 0,
        modal1: false
    };
  },
  methods: {
      ok() {},
      cancel() {},
      back() {
          this.modal1 = true
          console.log('loading')
        //   if(!this.status) {
        //      this.$Modal.confirm({
        //          title:'提示',
        //          width: 600,
        //          height: 400,
        //          content: '您尚未支付成功，请继续支付!',
        //          okText: '我知道了',
        //          onOk: () => {
        //              alert('ok!')
        //          }
        //      })
        //   } else {
        //       console.log('支付成功')
        //   }
      }
  },
};
</script>

<style lang="scss" scoped>
.dialog-footer {
    display: flex;
    justify-content: center;
    align-items: center;
}
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.page {
  background-color: rgb(240, 242, 245);
  box-sizing: border-box;
  padding-bottom: 180px;
}
.normal-padding {
  padding: 0 420px;
}
.normal-margin {
  margin: 0 430px 0 408px;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 62px;
  height: 62px;
  background-color: #fff;
}

.top-left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    color: #272727;
    font-size: 18px;
    margin-right: 37px;
  }
  .desc {
    color: #000000;
    font-size: 16px;
  }
}
.top-right {
  font-size: 14px;
  color: #343434;
}

// 支付状态 样式

.content {
  display: flex;
  flex-direction: column;
  margin-top: 49px;
}
// 支付状态
.status {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 98px;
  line-height: 98px;
  background-color: #f5fef3;
  padding-left: 167px;
}
.imgs {
    width: 24px;
    height: 24px;
    margin-right: 5px;
}

.payStatus {
  color: #000;
  font-size: 18px;
}

// 支付详情

.details {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding-left: 167px;
  padding-top: 48px;
  padding-bottom: 56px;
  margin-bottom: 42px;
}
.flex {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 23px;
}
.title {
    color: #000;
    font-size: 14px;
}
.price {
    color: #888888;
    font-size: 16px;
}
.orders {
    position: relative;
    top: 0;
    color: #666666;
    font-size:14px;
    padding-left: 37px;
}

.arrows {
    position: absolute;
    right: -20px;
    top: 5px;
    border-color: #8e8e8e transparent transparent transparent;
    border-width: 5px;
    border-style: solid;
}

.desc {
    color: #888;
    font-size:14px
}

.back {
    margin-top: 42px;
    width: 130px;
    height: 50px;
    line-height: 50px;
    background: #4580CB;
    border-radius: 4px;
    color: #fff;
    text-align: center;
    cursor: pointer;
}


</style>