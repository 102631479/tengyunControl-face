<!--
 * @Author: your name
 * @Date: 2020-10-09 10:10:21
 * @LastEditTime: 2020-10-09 16:09:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \open-platform-ui\platform-pc-ui\src\view\payfor\testServ.vue
 -->
<template>
    <div class="contain" >
        <div class="topTitle con-pad">
            <p class="test">申请测试服务</p>
        </div>
        <div class="con-process pad">
            <div class="conFle">
                <p class="fs-14 mr-50 color-6">选购产品</p>
                <Select :model.sync="model1" style="width:108px; height: 33px">
                    <Option v-for="item in cityList" :key="item.index" :value="item.value">{{ item.label }}</Option>
                </Select>
            </div>
            <div class="conFle">
                <p class="fs-14 mr-50 color-6">付费方式</p>
                <el-radio-group v-model="radio" @change="change">
                    <el-radio :label="3" border>按套餐</el-radio>
                    <el-radio :label="6" border>按量</el-radio>
                </el-radio-group>
            </div>
            <div class="conFle">
                <p class="fs-14 mr-50 color-6">购买数量</p>
                <div class="block">
                    <el-slider
                        v-model="value"
                        show-input
                        :step="20"
                        :marks="marks">
                    </el-slider>
                </div>
            </div>
            <div class="fle-text">
                <p class="title">VUM价格采用阶梯定价，购买越多，单价越低。<i class="desc">产看定价规则</i></p>
                <p  class="title">注：VUM=并发人数*分钟数</p>
            </div>
            <div class="conFle">
                <p class="fs-14 mr-50 color-6">最大并发</p>
                <p class="fs-14 color-4">10万人</p>
            </div>
            <div class="conFle">
                <p class="fs-14 mr-50 color-6">使用时效</p>
                <p class="fs-14 color-4">无限制</p>
            </div>
            <div class="conFle">
                <p class="fs-14 mr-50">所属项目</p>
                <Select :model.sync="model1" style="width:200px">
                    <Option v-for="item in cityList" :key="item.index" :value="item.value">{{ item.label }}</Option>
                </Select>
            </div>
        </div>
        <div class="pay pad">
            <div class="conFlex">
                <p class="fs-14 mr-50 color-6">总计费用：</p>
                <p class="fs-14 color-4">
                    <i class="zp">28.80</i>
                    <i class="danwei">元</i>
                    <i class="price">32.00元</i>
                </p>
            </div>
            <p class="line"></p>
            <div class="btn">
                <p class="text">立即购买</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: '测试服务',
            cityList: [
                {
                    value: 'beijing',
                    label: '北京市'
                },
                {
                    value: 'shanghai',
                    label: '上海市'
                },
                {
                    value: 'shenzhen',
                    label: '深圳市'
                },
                {
                    value: 'hangzhou',
                    label: '杭州市'
                },
                {
                    value: 'nanjing',
                    label: '南京市'
                },
                {
                    value: 'chongqing',
                    label: '重庆市'
                }
            ],
            model1: 'beijing',
            radio: '',
            value: 0,
            marks: {
                0: '1万VUM',
                20: '200万VUM',
                40: '400万VUM',
                60: '600万VUM',
                80: '800万VUM',
                100: '1000万VUM'
            }
        }
    },
        methods: {
            change(e) {
                console.log(e)
                this.disabledGroup  = e
            }
        },
}
</script>

<style lang="scss" scoped>
/deep/.el-slider::after {
        clear: both;
        width: 740px;
    }
/deep/.el-slider__marks-text {
        position: absolute;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        font-size: 12px;
        width: 80px;
        color: #909399;
        margin-top: 21px;
        margin-left: 25px;
    }
/deep/.el-slider__button {
    width: 18px;
    height: 35px;
    border: none;
    background-color: #FFF;
    border-radius: 0;
    -webkit-transition: .2s;
    transition: .2s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: url('../../assets/images/payfor/gp1.png');
}
    .contain {
        background-color: rgb(240,242,245);
        height: auto;
        margin-bottom: 84px;

    }

    .con-pad {
        padding-left: 381px;
    }

    .pad {
        margin: 0 370px;
    }

    .fs-14 {
        font-size: 14px;
    }

    .color-6 {
        color: #666666;
    }

    .color-4 {
        color: #444444;
    }

    .topTitle {
        height: 60px;
        background-color: #fff;
        margin-bottom: 22px;
        .test {
            color: #000;
            font-size: 24px;
            line-height: 60px;
            font-weight: 400;
        }
    }

    .con-process {
        background-color: #fff;
        padding: 41px 0 21px 0;
    }

    .conFle {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 20px;
        margin-left: 42px;
    }
    .conFlex {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 26px;
    }
    .block {
        display: flex;
        flex-direction: column;
        width: 740px;

    }

    .fle-text {
        display: flex;
        flex-direction: column;
        margin-left: 165px;
        margin-top: 20px;
        margin-bottom: 20px;
        .title {
            height: 11px;
            font-size: 12px;
            font-weight: 400;
            color: #9A9A9A;
            padding: 10px 0;
            .desc {
                font-style: normal;
                color: #0084FF;
                font-size: 12px;
                cursor: pointer;
            }
        }
    }

    .pay {
        background: #FFFFFF;
        box-shadow: 0px -2px 7px 0px #DCE3E4;
        padding: 30px 0 20px 41px;
    }
    i {
        font-style: normal;
    }

    .zp {
        color: #FF6600;
        font-size: 24px;
    }
    .danwei {
        color: #FF6000;
        font-size: 14px;
        padding: 0 7px;
    }
    .price {
        text-decoration: line-through;
        color: #9A9A9A;
    }

    .line {
        height: 2px;
        background: #F0F2F5;
    }

    .btn {
        width: 90px;
        height: 30px;
        line-height: 30px;
        background-color: #FF9800;
        margin-top: 20px;
        cursor: pointer;
        .text {
            color: #FFFFFF;
            text-align: center;
            font-size: 14px;
        }
    }
</style>