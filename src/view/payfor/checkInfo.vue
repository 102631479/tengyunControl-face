<!--
 * @Author: your name
 * @Date: 2020-09-29 13:10:35
 * @LastEditTime: 2020-09-30 10:46:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \open-platform-ui\platform-pc-ui\src\view\payfor\checkInfo.vue
 -->
<template>
    <div class="page">
        <div class="header normal">
            <p class="check">核对信息</p>
            <steps :active="active"></steps>
        </div>
        <p class="tip normal-m">下列订单包含促销订单，不能使用代金券，促销订单60分钟内未完成支付，订单自动关闭。</p>
        <div class="tab normal">
            <Table :columns="columns" :data="testData" :border="false"></Table>
        </div>

        <div class="infoToBtn">
            <p class="info info-ml">购买/开通/续费 均可开票，支付成功后可前往 控制台 > 费用中心 <i>开发票</i></p>
            <div class="free">
                <p class="info">总计费用：</p>
                <p class="prices">131.00</p>
            </div>
            <p class="btnBuy">确认购买</p>
        </div>
    </div>
</template>
<script>
import Steps from './steps'
export default {
    components: {
        Steps
    },
    data() {
        return {
            active: 1,
            testData: [
                {
                    name: '产品转码包新',
                    age: '套餐有限期：半年-极速 产品流量：产品转码包',
                    address: '149.00元',
                    num: '1',
                    method: '预付费',
                    time: '一次性购买',
                    Discount: '折扣8.79折',
                    cost: '131.00元 (原价 149.00元)'
                }
            ],
            columns: [
                {
                    title: '产品名称',
                    key: 'name',
                    // render (row, column, index) {
                    //     return `<Icon type="person"></Icon> <strong>${row.name}</strong>`;
                    // }
                },
                {
                    title: '配置信息',
                    key: 'age',
                    width: '140px'
                },
                {
                    title: '单价',
                    key: 'address'
                },
                {
                    title: '数量',
                    key: 'num'
                },
                {
                    title: '付费方式',
                    key: 'method'
                },
                {
                    title: '购买时长 ',
                    key: 'time'
                },
                {
                    title: '优惠',
                    key: 'Discount'
                },
                {
                    title: '费用',
                    key: 'cost',
                    width: '200px'
                }
            ],
        }
    },
}
</script>

<style lang="scss" scoped>

    .page {
        background-color: rgb(240, 242, 245);
    }
    .normal {
        padding: 0 370px;
    }
    .normal-m {
        margin: 20px 370px;
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

    .tip {
        
        height: 35px;
        line-height: 35px;
        background: #E5F0FF;
        border: 1px solid #97C7FF;
        border-radius: 2px;
        color: #FF6600;
        font-size: 12px;

    }
// 表格样式
    .tab {
        margin-bottom: 20px;
    }

    // 购买
    .infoToBtn {
        display: flex;
        align-items: center;
        height: 77px;
        line-height: 77px;
        background: #FFFFFF;
        border: 1px solid #E6EBF2;
        margin: 0 370px;
    } 

    .info {
        font-size: 14px;
        color: #333333;
    }
    .info-ml {
        margin-left: 324px;
    }
    i {
        font-style: normal;
        font-size: 14px;
        color: #00BAFF;
    }

    .free {
        display: flex;
        margin-left: 35px;
        width: 189px;
        .prices {
            font-size: 30px;
            color: #FF6600;
        }
    }

    .btnBuy {
        margin-left: 40px;
        width: 98px;
        height: 35px;
        line-height: 35px;
        background: #FF7000;
        border: 1px solid #ED6A01;
        border-radius: 2px;
        text-align: center;
        color: #ffffff;
        font-size: 14px;
        font-weight: 500;
    }

</style>