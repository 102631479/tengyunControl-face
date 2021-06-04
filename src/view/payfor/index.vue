<template>
  <div class="page normal">
    <p class="nav">购买</p>
    <div class="content">
      <p class="p-class">版本介绍</p>
       <el-table
        :data="tableData"
        :span-method="objectSpanMethod"
        border
      >
      <el-table-column
        prop="id"
        width="180">
      </el-table-column>

      <el-table-column
        prop="name"
        align="center"
        label="基础版">
      </el-table-column>

      <el-table-column
        prop="amount1"
        align="center"
        label="企业版">
      </el-table-column>
    </el-table>
    </div>
   
    <div class="buy">
      <div class="flex">
        <p class="p-class">默认数量</p>
        <p class="p-size-12 p-color">24个</p>
      </div>
      <div class="flex">
        <p  class="p-class">购买时长</p>
        <el-radio-group v-model="chkVal" @change="getVal">
          <el-radio-button v-for="item in radiolist" :key="item.id" :label="item.radio">
          <!-- <i v-show="item.tag">85折</i> -->

          </el-radio-button>
        </el-radio-group>
       
      </div>
      <div class="flex">
        <p  class="p-class">自动续费</p>
        <el-checkbox v-model="checked" class="p-color">账户余额足够时，到期后按月续费</el-checkbox>
      </div>
      <div class="flex">
        <p  class="p-class">总计费用</p>
        <p class="p-price">500元</p>
      </div>
      <div class="btn-buy">
        立即购买
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        chkVal: '1个月',
        checked: true,
        radiolist: [{
          radio: '1个月',
          id: 120
        },
        {
          radio: '2个月',
          tag: 0,
          id: 121

        },{
          radio: '3个月',
          tag: 0,
          id: 122

        },{
          radio: '半年',
          tag: 0,
          id: 123

        },{
          radio: '1年',
          tag: 1,
          id: 124

        },{
          radio: '2年',
          tag: 1,
          id: 125

        },{
          radio: '3年',
          tag: 1,
          id: 126

        }],
        tableData: [{
          id: '发布分享',
          name: '公开发布',
          amount1: '-',
          amount2: '-',
        }, {
          id: '发布分享',
          name: '加密发布',
          amount1: '165',
          amount2: '-',
        }, {
          id: '发布分享',
          name: '动态鉴权',
          amount1: '324',
          amount2: '1.9',
        }, {
          id: '发布分享',
          name: '拷贝给他人',
          amount1: '621',
          amount2: 9

        }, {
          id: '模板',
          name: '王小虎',
          amount1: '539',
          amount2: 9
        }, {
          id: '发布分享',
          name: '动态鉴权',
          amount1: '324',
          amount2: '1.9',
        }, {
          id: '发布分享',
          name: '拷贝给他人',
          amount1: '621',
          amount2: 9

        }, {
          id: '模板',
          name: '王小虎',
          amount1: '539',
          amount2: 9
        }, {
          id: '发布分享',
          name: '动态鉴权',
          amount1: '324',
          amount2: '1.9',
        }, {
          id: '发布分享',
          name: '拷贝给他人',
          amount1: '621',
          amount2: 9

        }, {
          id: '模板',
          name: '王小虎',
          amount1: '539',
          amount2: 9
        }, {
          id: '发布分享',
          name: '动态鉴权',
          amount1: '324',
          amount2: '1.9',
        }, {
          id: '发布分享',
          name: '拷贝给他人',
          amount1: '621',
          amount2: 9

        }, {
          id: '模板',
          name: '王小虎',
          amount1: '539',
          amount2: 9
        }]
      };
    },
    methods: {
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 1 === 0) {
            return {
              rowspan: 1,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      },
      getVal(e) {
        console.log(e)
        this.chkVal = e
      }
    }
  };
</script>
<style lang="scss" scoped>
    .page {
        background-color: #F2F2F2;
    }
    .normal {
        padding: 0 360px;
    }
    .p-class {
      margin-right: 20px;
      font-size: 12px;
      color: #999999;
      height: 48px;
      line-height: 48px;
      padding-bottom: 32px;
    }
    .p-color {
      color: #000;
    }
    .p-size-12 {
      font-size: 12px;
    }
    .p-size-14{
      font-size: 14px;
    }
    .p-price {
      font-size: 24px;
      color: #FF6600;
    }
    .flex {
        position: relative;
        display: flex;
        align-items: center;
    }
    i {
      position: absolute;
      left: 9.6%;
      top: 0;
      font-style: normal;
      font-size: 12px;
      color: #fff;
      width: 33px;
      height: 16px;
      background: #FF6600;
      z-index: 111;
    }
    .nav {
        height: 54px;
        line-height: 54px;
        background-color: #fff;
        color: #000;
        font-size: 18px;
        margin-bottom: 22px;
        padding-left: 21px;
    }

    .content {
      display: flex;
      justify-content: flex-start;
      padding: 0 10px;
    }

    .buy {
      display: flex;
      flex-direction: column;
      padding: 22px 0 31px 10px;
    }

    .btn-buy {
      width: 90px;
      text-align: center;
      height: 30px;
      line-height: 30px;
      background-color: #FF9700;
      color: #fff;
      font-size: 14px;
    }






</style>