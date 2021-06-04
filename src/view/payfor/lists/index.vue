<!--
 * 
 *    ┏┓　　　┏┓
 *  ┏┛┻━━━┛┻┓
 *  ┃　　　　　　　┃
 *  ┃　　　━　　　┃
 *  ┃　＞　　　＜　┃
 *  ┃　　　　　　　┃
 *  ┃...　⌒　...　┃
 *  ┃　　　　　　　┃
 *  ┗━┓　　　┏━┛
 *      ┃　　　┃　
 *      ┃　　　┃
 *      ┃　　　┃
 *      ┃　　　┃  神兽保佑
 *      ┃　　　┃  代码无bug　　
 *      ┃　　　┃
 *      ┃　　　┗━━━┓
 *      ┃　　　　　　　┣┓
 *      ┃　　　　　　　┏┛
 *      ┗┓┓┏━┳┓┏┛
 *        ┃┫┫　┃┫┫
 *        ┗┻┛　┗┻┛
 * 
 * @Author: 大司马
 * @Date: 2020-10-09 16:50:07
 * @LastEditors: 大司马
 * @LastEditTime: 2020-10-09 16:50:15
 * @FilePath: \open-platform-ui\platform-pc-ui\src\view\payfor\lists\index.vue
 -->

<template>
    <div class="page">
        <div class="top normal-padding ">
            <div class="top-left">
                <p class="title">智慧旅游开放平台</p>
                <p class="desc">订单支付</p>
            </div>
            <p class="top-right">账号：100012083424</p>
        </div>

        <div class="order-lists normal-margin">
            <div class="item">
                <p class="p-text">商品订单：  </p>
                <p class="coder">2019120901003918203902865845123010</p>
            </div>
            <div class="payMoney">
                <div class="item">
                    <p class="p-text">支付金额：  </p>
                    <p class="prices">￥ <i class="price">1.00</i> </p>
                    <p class="arrow" @click="showArrow">订单详情 <i :class="[active ? 'active' : 'arr']"></i> </p>
                </div>

                <div class="show" v-show="active">
                    <p class="is">商品名称：账号100012083424-旅游开放平台</p>
                    <p class="is">支付订单：E-2023031035306363203203363</p>
                    <p class="is">应付金额：￥47.99</p>
                    <p class="is">购买时间：2020年03月27日</p>
                </div>
            </div>
            <p class="line"></p>
            <div class="items">
                <p class="p-text">支付方式：</p>
                <div class="py-lists">
                    <el-radio-group v-model="radio2" size="medium" @change="change">
                        <el-radio-button label="1" >
                            <div class="list">
                                <img :src="require('../../../assets/images/payfor/wechat.png')" alt="" class="img">
                                <p>微信支付</p>
                            </div>
                        </el-radio-button>
                        <el-radio-button label="2">
                            <div class="list">
                                <img :src="require('../../../assets/images/payfor/alipay.png')" alt="" class="img">
                                <p >支付宝支付</p>
                            </div>
                        </el-radio-button>
                        <el-radio-button label="3">
                            <div class="list">
                                <img :src="require('../../../assets/images/payfor/online-bank.png')" alt="" class="img">
                                <p>网银支付</p>
                            </div>
                        </el-radio-button>
                    </el-radio-group>
                </div>
            </div>
            <div class="item mt-33" v-if="radio2 == 1">
                <div class="col">
                    <img :src="require('../../../assets/images/payfor/ewm.png')" alt="">
                    <p class="sao">请打开手机微信，扫一扫完成支付</p>
                </div>
                <img :src="require('../../../assets/images/payfor/iphone.png')" alt="">
            </div>
            <div class="item mt-33" v-if="radio2 == 2">
                <div class="col">
                    <img :src="require('../../../assets/images/payfor/ewm.png')" alt="">
                    <p class="sao">请打开手机支付宝，扫一扫完成支付</p>
                </div>
                <img :src="require('../../../assets/images/payfor/alipayt.png')" alt="">
            </div>
            <div class="items mt-33" v-if="radio2 == 3">
                <div class="type">
                    <p class="bkSty">银行类型：</p>
                    <el-radio-group v-model="bkType" @change="typeChange">
                        <el-radio :label="1">个人银行</el-radio>
                        <el-radio :label="2">企业银行</el-radio>
                    </el-radio-group>
                </div>
                <div class="type">
                    <p class="bks bkSty">选择银行：</p>
                    <el-radio-group v-model="bk" @change="bkChange">
                        <el-radio-button :label="1" >
                            <div class="flex">
                                <i class=" bk gs"></i>
                                <p>工商银行</p>
                            </div>  
                        </el-radio-button>
                        <el-radio-button label="2">
                            <div class="flex">
                                <i class="bk ny"></i>
                                <p>农业银行</p>
                            </div>  
                        </el-radio-button>
                        <el-radio-button label="3">
                            <div class="flex">
                                <i class=" bk zs"></i>
                                <p>招商银行</p>
                            </div>  
                        </el-radio-button>
                        <el-radio-button label="4">
                            <div class="flex">
                                <i class=" bk js"></i>
                                <p>建设银行</p>
                            </div>  
                        </el-radio-button>
                        <el-radio-button label="5">
                            <div class="flex">
                                <i class=" bk cn"></i>
                                <p>中国银行</p>
                            </div>  
                        </el-radio-button>
                        <el-radio-button label="6">
                            <div class="flex">
                                <i class=" bk yz"></i>
                                <p>邮政银行</p>
                            </div>  
                        </el-radio-button>
                        <el-radio-button label="7">
                            <div class="flex">
                                <i class=" bk jt"></i>
                                <p>交通银行</p>
                            </div>  
                        </el-radio-button>
                        <el-radio-button label="8">
                            <div class="flex">
                                <i class=" bk gf"></i>
                                <p>广发银行</p>
                            </div>  
                        </el-radio-button>
                        <el-radio-button label="9">
                            <div class="flex">
                                <i class=" bk ms"></i>
                                <p>民生银行</p>
                            </div>  
                        </el-radio-button>
                        <el-radio-button label="10">
                            <div class="flex">
                                <i class=" bk pa"></i>
                                <p>平安银行</p>
                            </div>  
                        </el-radio-button>
                        <el-radio-button label="11">
                            <div class="flex">
                                <i class=" bk gd"></i>
                                <p>广大银行</p>
                            </div>  
                        </el-radio-button>
                        <el-radio-button label="12">
                            <div class="flex">
                                <i class=" bk xy"></i>
                                <p>兴业银行</p>
                            </div>  
                        </el-radio-button>
                        <el-radio-button label="13">
                            <div class="flex">
                                <i class=" bk zx"></i>
                                <p>中信银行</p>
                            </div>  
                        </el-radio-button>
                                                <el-radio-button label="14">
                            <div class="flex">
                                <i class=" bk bj"></i>
                                <p>北京银行</p>
                            </div>  
                        </el-radio-button>
                                                <el-radio-button label="15">
                            <div class="flex">
                                <i class=" bk sh"></i>
                                <p>上海农商</p>
                            </div>  
                        </el-radio-button>
                                                <el-radio-button label="16">
                            <div class="flex">
                                <i class=" bk nb"></i>
                                <p>宁波银行</p>
                            </div>  
                        </el-radio-button>
                                                <el-radio-button label="17">
                            <div class="flex">
                                <i class=" bk nj"></i>
                                <p>南京银行</p>
                            </div>
                        </el-radio-button>
                                                <el-radio-button label="18">
                            <div class="flex">
                                <i class=" bk dy"></i>
                                <p>东亚银行</p>
                            </div>
                        </el-radio-button>

                    </el-radio-group>
                </div>

                <div class="type">
                    <p class="bkSty">选择卡种：</p>
                    <el-radio-group v-model="card" @change="cardChange">
                        <el-radio :label="1">储蓄卡</el-radio>
                        <el-radio :label="2">信用卡</el-radio>
                    </el-radio-group>
                </div>
                <p class="toPay">立即支付</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            radio2: 1,
            bk: 1,
            bkType: 1,
            card: 1,
            active: false
        }
    },
    methods: {
        change(e) {
            console.log(e);
            this.radio2 = e
        },
        typeChange(e) {
            console.log('银行类型：', e)
            this.bkType = e
        },
        bkChange(e) {
            console.log('银行种类：', e)
            this.bk  = e
        },
        cardChange(e) {
            console.log('选择卡种：', e)
            this.card = e
        },
        showArrow() {
            this.active = !this.active
        }

    },
}
</script>

<style lang="scss" scoped>

/deep/.el-radio-button__orig-radio:checked+.el-radio-button__inner {
    color: #000;
    background-color: rgba(#fff, .8);
    border-color: #fff;
    width: 132px;
    height: 46px;
    background-image: url('../../../assets/images/payfor/checked.png');
    -webkit-box-shadow: 0px 0 0 0 #409EFF;
    box-shadow: 0px 0 0 0 #409EFF;
}

/deep/.el-radio-button__inner {
    white-space: nowrap;
    background: #FFF;
    border: 1px solid #DCDFE6;
    font-weight: 500;
    width: 132px;
    height: 46px;
    /* line-height: 31px; */
    // border-left: 0;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 5px;
    position: relative;
    cursor: pointer;
    -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 0;
}
    .page {
        background-color: rgb(240,242,245);
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


    .order-lists {
        background-color: #fff;
        margin-top: 30px;
        padding: 51px 0 120px 0;
    }
    .payMoney {
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }
    .show {
        padding: 0 230px;
        color: #666;
        font-size: 14px;
    }
    .is {
        margin-bottom: 25px;
    }

    .active {
        border-width: 5px;
        border-color: transparent transparent #8E8E8E transparent;
        border-style: solid;
        position: absolute;
        right: -20px;
        top: 2px;
    }

    .item {
        display: flex;
        align-items: center;
        // padding-left: 252px;
        // padding-right: 271px;
        padding: 0 160px;
        margin-bottom: 22px;
        .p-text {
            color: #000000;
            font-size: 14px;
        }
        .coder {
            color: #666666;
            font-size: 16px;
        }
        .prices {
            color: #0BC266;
            font-size: 16px;
        }
        .price {
            font-style: normal;
            height: 18px;
            line-height:18px;
            font-size: 24px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #0BC266;
        }
        .arrow {
            color: #666666;
            font-size: 14px;
            margin-left: 21px;
            position: relative;
            .arr {
                position: absolute;
                top: 8px;
                right: -20px;
                width: 0;
                height: 0;
                border-width: 5px;
                border-color: #8E8E8E transparent transparent transparent;
                border-style: solid;
            }
        }
    }
    .line {
        height: 2px;
        background-color: #F3F3F3;
        // margin: 0 271px 20px 252px;
        margin: 0 160px 20px 160px;
        opacity: .9;
    }

    .mt-33 {
        margin-top: 33px;
    }

    .items {
        display: flex;
        flex-direction: column;
        // padding: 0 271px 0 252px;
        padding: 0 160px;

    }
    .py-lists {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .list {
            display: flex;
            justify-content: center;
            align-items: center;
            .img {
                width: 28px;
                height: 18px;
            }
        }
    }

    .col {
        display: flex;
        flex-direction: column;
        font-size: 12px;
        color: #fff;
        margin-right: 38px;
        .sao {
            margin-top: 10px;
            background-color: #00C800;

        }
    }


    .type {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 25px;
    }

    .flex {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .bkSty {
        font-size: 14px;
        color: #707070;
        margin-right: 20px;
    }

    .bks {
        width: 50%;
    }

    .bk {
        background-image: url(/img/banks.28c0fbc8.png);
        background-position: 0 0;
        background-repeat: no-repeat;
        padding-left: 15px;
        width: 19px;
        height: 18px;
    }
    .gs {
        background-image: url(/img/banks.28c0fbc8.png);
        background-position: 0 0;
    }

    .ny {
        background-image: url(/img/banks.28c0fbc8.png);
        background-position: -53px 0;
    }
    .zs {
               background-image: url(/img/banks.28c0fbc8.png);
        background-position: -18px 0; 
    }

    .js {
        background-image: url(/img/banks.28c0fbc8.png);
        background-position: -35px 0; 
    }

    .cn {
        background-image: url(/img/banks.28c0fbc8.png);
        background-position: -70px 0; 
    }

    .yz {
        background-image: url(/img/banks.28c0fbc8.png);
        background-position: -19px -19px; 
    }

    .jt {
        background-image: url(/img/banks.28c0fbc8.png);
        background-position: -35px -19px; 
    }
    .gf {
        background-image: url(/img/banks.28c0fbc8.png);
        background-position: -71px -19px; 
    }
    .ms {
        background-image: url(/img/banks.28c0fbc8.png);
        background-position: -89px -18px; 
    }
    .pa {
        background-image: url(/img/banks.28c0fbc8.png);
        background-position: -71px -19px; 
    }
    .gd {
        background-image: url(/img/banks.28c0fbc8.png);
        background-position: -90px 0px; 
    }
    .xy {
        background-image: url(/img/banks.28c0fbc8.png);
        background-position: 0px -19px; 
    }
    .zx {
        background-image: url(/img/banks.28c0fbc8.png);
        background-position: -126px 0px; 
    }
    .bj {
        background-image: url(/img/banks.28c0fbc8.png);
        background-position: -126px -18px; 
    }
    .sh {
        background-image: url(/img/banks.28c0fbc8.png);
        background-position:  -71px -37px; 
    }
    .nb {
        background-image: url(/img/banks.28c0fbc8.png);
        background-position: -90px -37px; 
    }
    .nj {
        background-image: url(/img/banks.28c0fbc8.png);
        background-position: -108px -37px; 
    }

    .dy {
        background-image: url(/img/banks.28c0fbc8.png);
        background-position: -53px -54px; 
    }

    .toPay {
        width: 130px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        background: #4580CB;
        border-radius: 4px;
        margin-top: 50px;
        cursor: pointer;
    }



</style>