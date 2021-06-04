<!--
 *                   ___====-_  _-====___
 *             _--^^^#####//      \\#####^^^--_
 *          _-^##########// (    ) \\##########^-_
 *         -############//  |\^^/|  \\############-
 *       _/############//   (@::@)   \############\_
 *      /#############((     \\//     ))#############\
 *     -###############\\    (oo)    //###############-
 *    -#################\\  / VV \  //#################-
 *   -###################\\/      \//###################-
 *  _#/|##########/\######(   /\   )######/\##########|\#_
 *  |/ |#/\#/\#/\/  \#/\##\  |  |  /##/\#/  \/\#/\#/\#| \|
 *  `  |/  V  V  `   V  \#\| |  | |/#/  V   '  V  V  \|  '
 *     `   `  `      `   / | |  | | \   '      '  '   '
 *                      (  | |  | |  )
 *                     __\ | |  | | /__
 *                    (vvv(VVV)(VVV)vvv)
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *                神兽保佑            永无BUG
 * 
 * @Author: 大司马
 * @Date: 2020-09-30 13:44:30
 * @LastEditors: 大司马
 * @LastEditTime: 2020-10-09 16:42:58
 * @FilePath: \open-platform-ui\platform-pc-ui\src\view\payfor\waitPayfor.vue
 -->

<template>
    <div class="page">
        <el-dialog
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
            <div class="dialog">
                <p class="dialog-title">请在新开的支付页面上完成付款</p>
                <p class="dialog-desc">支付完成前请勿关闭页面！</p>
            </div>

            <span slot="footer" class="dialog-footer">
                <el-button @click="close">已完成支付</el-button>
                <el-button type="primary" @click="requestOk">支付遇到问题</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'waitPayfor',
    props: {
        centerDialogVisible: {
            type: Boolean,
            default: () => false
        }
    },
    data() {
        return {
        }
    },

    methods: {
        requestOk() {
            console.log('我是子组件传递事件Ok')
            this.$emit('success')
        },
        close() {
            this.$emit('success')
        }
    },
}
</script>

<style lang="scss" scoped>
    .dialog-footer {
        background-color: #F0F4F7;
        width: 100%;
    }
    /deep/.el-dialog__footer {
        padding: 10px 20px 20px;
        text-align: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        background: #F0F4F7;
        border-top: 1px solid #DDDDDD;
    }
    /deep/.el-dialog--center .el-dialog__body {
        text-align: initial;
        padding: 25px 25px 30px;
        height: 140px;
    }

    .dialog {
        display: flex;
        flex-direction: column;
        align-items: center;
        .dialog-title {
            font-size: 18px;
            font-weight: bold;
            color: #000000;
            line-height: 42px;
        }
        .dialog-desc {
            height: 14px;
            font-size: 14px;
            font-weight: 400;
            color: #000000;
            line-height: 42px;
        }
    }
</style>