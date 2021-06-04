<!--
 * @Author: your name
 * @Date: 2020-09-29 13:10:35
 * @LastEditTime: 2020-10-09 10:08:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \open-platform-ui\platform-pc-ui\src\view\payfor\checkInfo.vue
 -->
<template>
    <div class="page">
        <div class="header normal">
            <p class="check">支付</p>
            <steps :active="active"></steps>
        </div>
        <div class="contain normal-m">
            <div class="head">
                <div class="flex p-fs-14">
                    <p class="p-color-9 ">交易对象：</p>
                    <p class="p-color-3">旅游开放平台</p>
                </div>
                <div class="flex ">
                    <p class="p-color-3 p-fs-14">总计费用：</p>
                    <p class="p-color-f6 p-fs-30">48.00</p>
                </div>
            </div>
            <div class="chk head">
                <el-checkbox v-model="checked">使用余额（可用余额0.01元）</el-checkbox>
                <div class="flex">
                    <p class="p-color-f6 p-fs-12">支付：</p>
                    <p class="p-color-f6 p-fs-14">0.01</p>
                </div>
            </div>

            <div class="others">
                <div class="head other-pb">
                    <el-checkbox v-model="checked">
                        使用其他支付方式（在线支付支持以下3种支付渠道，点击“立即支付”后您可在新开页面选择其中任意一种渠道进行支付。）交易限额说明 
                            <el-tooltip class="item" effect="light"  placement="top">
                                <div slot="content" class="slot-content p-color-4">
                                    <ul>
                                        <li>
                                            1.旅游开放平台的交易限额：0.01-99999999元
                                        </li>
                                        <li>
                                            2.微信支付/支付宝/网银会依据银行要求进行交易额度的限制，以保证您的资金安全。不同支付平台、不同银行、不同类型对应限额额度不同，具体额度请以您实际支付中提示为准或参考文档；
                                        </li>
                                        <li>
                                            3.大额交易建议您可使用线下汇款充值。
                                        </li>
                                    </ul>
                                </div>
                                <i class="tips">?</i>
                            </el-tooltip>
                    </el-checkbox>
                    <div class="flex">
                        <p  class="p-color-f6 p-fs-12">支付：</p>
                        <p class="p-color-f6 p-fs-14">47.99
                            <el-tooltip class="item" effect="light"  placement="top">
                                <div slot="content" class="p-color-4">
                                   <p>支付金额=应付金额+欠费金额</p>
                                    <p>应付金额：￥48.00</p>
                                    <p>欠费金额：￥-0.01</p>
                                </div>
                                <i class="tips">?</i>
                            </el-tooltip>
                        </p>
                    </div>
                </div>
                <div class="pf">
                    <div class="flex">
                        <el-radio-group v-model="radioVal">
                            <el-radio :label="3">
                                <div class="flex block">
                                    <img :src="require('../../assets/images/payfor/wechat.png')" alt="">
                                    <p class="p-fs-14">微信支付</p>
                                </div>
                            </el-radio>
                            <el-radio :label="6">
                                <div class="flex block">
                                    <img :src="require('../../assets/images/payfor/zfb.png')" alt="">
                                    <p class="p-fs-14">支付宝支付</p>
                                </div>
                            </el-radio>
                            <el-radio :label="9">
                                <div class="flex block">
                                    <img :src="require('../../assets/images/payfor/ylk.png')" alt="">
                                    <p class="p-fs-14">网银支付</p>
                                </div>
                            </el-radio>
                        </el-radio-group>
                        <!-- <div class="flex block">
                            <img :src="require('../../assets/images/payfor/wechat.png')" alt="">
                            <p class="p-fs-14">微信支付</p>
                        </div>
                        <div class="flex block">
                            <img :src="require('../../assets/images/payfor/zfb.png')" alt="">
                            <p class="p-fs-14">支付宝支付</p>
                        </div>
                        <div class="flex block">
                            <img :src="require('../../assets/images/payfor/ylk.png')" alt="">
                            <p class="p-fs-14">网银支付</p>
                        </div> -->
                    </div>
                    <p class="p-color-9 p-fs-12 mb">除以上在线支付方式外，您也可使用  线下汇款充值 的方式先充值到您的腾讯云账户，再使用账户余额进行支付。</p>
                </div>
            </div>
            <div class="btns">
                <p class="btn" @click="toPayfor">确认购买</p>
            </div>


        </div>
        <wait-payfor @success="getModel" :centerDialogVisible="centerDialogVisible"></wait-payfor>
        
    </div>
</template>
<script>
import Steps from './steps'
import waitPayfor from './waitPayfor'
export default {
    components: {
        Steps,
        waitPayfor
    },
    data() {
        return {
            active: 2,
            checked: false,
            radioVal: 3,
            centerDialogVisible: false,
            payfor: 0, // 测试是否支付 0：否[弹出] 1：是
        }
    },
    methods: {
        toPayfor() {
            this.centerDialogVisible = true
        },
        getModel() {
            this.centerDialogVisible = false
        },
    },
    beforeRouteLeave (to, from, next) {
        // ...
        console.log('即将离开!!!');
        if(this.payfor == 0) {
            setTimeout(() => {
                this.centerDialogVisible = true
            }, 500)
        } else {
            next();
        }
    }
}
</script>

<style lang="scss" scoped>
        
    /deep/.el-checkbox__label {
        display: inline-block;
        padding-left: 10px;
        line-height: 19px;
        color: #333333;
        font-size: 12px;
    }
    /deep/.el-radio {
        color: #606266;
        cursor: pointer;
        margin-top: -30px;
    }
    /deep/.el-radio__inner {
        border: 1px solid #DCDFE6;
        border-radius: 100%; 
        width: 0;
        height: 0;
        background-color: #FFF;
        cursor: pointer;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .page {
        background-color: rgb(240, 242, 245);
    }
    .normal {
        padding: 0 360px;
    }
    .normal-m {
        margin: 20px 360px 0 360px;
    }
    .p-color-4 {
        color: #444444;
        color: 12px;
    }
    .slot-content {
        width: 336px;
        padding: 10px;
    }
    .header {
        display: flex;
        justify-content: space-between;
        width:100%;
        height: 90px;
        line-height: 90px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px 0px rgba(4, 0, 0, 0.02);
    }
    .check {
        color: #000000;
        font-size: 26px;
        font-weight: 500;
    }
    .tips {
        font-style: normal;
        width: 14px;
        height: 14px;
        line-height: 14px;
        text-align: center;
        border-radius: 50%;
        display: inline-block;
        border: 1px solid #666666;
    }

    .p-color-9 {
        color: #999999;
    }
    .p-color-3 {
        color: #333333;
    }

    .p-color-f6 {
        color: #ff6600;
    }

    .p-fs-12 {
        font-size: 12px;
    }

    .p-fs-14 {
        font-size: 14px;
    }
    .p-fs-30 {
        font-size: 30px;
    }
    .mb {
        margin-top: 15px;
    }


    .contain {
        background-color: #fff;
        height: 500px;
        padding: 55px 44px 63px 51px;
    }

    .head {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .flex {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .chk {
        height: 60px;
        line-height: 60px;
        background: #F5F9FA;
        padding: 0 22px 0 15px;
    }

    .others {
        padding: 26px 15px 17px 15px;
        background: #F5F9FA;
    }
    .other-pb {
        padding-bottom: 26px;
    }

    .pf {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        padding: 36px;
    }

    .block {
        margin-left: 26px;
    }
    .btns {
        display: flex;
        justify-content: flex-end;
    }
    .btn {
        width: 98px;
        height: 35px;
        line-height: 35px;
        background: #FF7000;
        border: 1px solid #ED6A01;
        border-radius: 2px;
        text-align: center;
        color: #fff;
        margin-top: 20px;
        cursor: pointer;
    }

    

</style>