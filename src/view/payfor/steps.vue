<!--
 * @Author: your name
 * @Date: 2020-09-29 13:40:26
 * @LastEditTime: 2020-09-30 10:49:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \open-platform-ui\platform-pc-ui\src\view\payfor\steps.vue
 -->
<template>
    <div class="pages">
        <el-steps :active="active" :space="200">
            <el-step  description="核对信息"></el-step>
            <el-step  description="支付"></el-step>
            <el-step  description="支付结果"></el-step>
        </el-steps>
    </div>
</template>
<script>
export default {
    props:{
        active: {
            type: Number,
            default: () => 1
        }
    },
    data() {
        return {
            
        }
    },
}
</script>
<style lang="scss" scoped>
.pages {
    background-color: #fff;
    width: 90%;
    display: flex;
    justify-content: flex-end;
}
    /deep/.el-step.is-horizontal .el-step__line {
        height: 2px;
        top: 42px;
        left: 0;
        right: 0;
    }

    /deep/.el-steps {
        display: flex;
        width: 30%;
    }

    /deep/.el-step__head {
        position: relative;
        top: 0%;
        width: 100%;
        height: 70%;
    }

    /deep/.el-step__main {
        white-space: normal;
        text-align: center;
    }
    
    /deep/.el-step__description {
        padding-right: 10%;
        margin-top: -5px;
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
        position: relative;
        left: -36%;
    }
</style>