<!--
 * @Author: your name
 * @Date: 2020-09-23 18:28:18
 * @LastEditTime: 2020-09-24 11:16:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \open-platform-ui\platform-pc-ui\src\view\activity\details.vue
 -->
<template>
    <div class="page">
        <div class="head">
            <img class="headImg" icon :src="require('../../assets/images/txyxxtyactivity.png')" alt="">
            <p class="headDesc">以类似朋友的原创内容形式在用户朋友圈进行展示的原生广告。通过整合亿级优质用户流量，朋友圈广告位广告主提供了一个国内独一无二的互联网社交推广营销平台。</p>
        </div>
        <img class="normal-padding" :src="require('../../assets/images/tc176.png')" style="textAlign:center;width: 100%" alt="">
        <div class="lists normal-padding">
            <div class="item">
                <img class="itemImg" :src="require('../../assets/images/tc168.png')" alt="">
                <p class="itemDesc">推广品牌活动</p>
            </div>
            <div class="item">
                <img class="itemImg" :src="require('../../assets/images/tc168.png')" alt="">
                <p class="itemDesc">推广品牌活动</p>
            </div>
            <div class="item">
                <img class="itemImg" :src="require('../../assets/images/tc168.png')" alt="">
                <p class="itemDesc">推广品牌活动</p>
            </div>
            <div class="item">
                <img class="itemImg" :src="require('../../assets/images/tc168.png')" alt="">
                <p class="itemDesc">推广品牌活动</p>
            </div>
            <div class="item">
                <img class="itemImg" :src="require('../../assets/images/tc168.png')" alt="">
                <p class="itemDesc">推广品牌活动</p>
            </div>
            <div class="item">
                <img class="itemImg" :src="require('../../assets/images/tc168.png')" alt="">
                <p class="itemDesc">推广品牌活动</p>
            </div>
        </div>
        <div class="moreStyle">
            <div class="styleTop">
                <img class="stImg" :src="require('../../assets/images/gp11.png')" alt="">
                <div class="stDesc">
                    <p class="descTitle">推广品牌活动</p>
                    <p class="descContent">微信拥有超过11亿月活跃用户，可以帮助您实现海量品牌曝光，传递品牌文化，强化品牌形象，并配合精准定向，让更多用户参与品牌活动，实现品效合一。</p>
                </div>
            </div>
            <div class="styleBottom">
                <p>您的广告能够以更丰富的样式呈现, 查看 <i> 更多广告样式。</i></p>
            </div>
        </div>
        <div class="reports normal-padding">
            <p class="address">活动地点：河南省郑州市二七区南三环建业大楼总部3-15</p>
            <p class="fujian">附件：活动详细流程及规则 .doc</p>
            <p class="reportFunc" @click="report">立即报名</p>
        </div>
        <el-dialog title="正在报名" :visible.sync="showOrHide" class="dialog" center >
            <el-form :model="form" class="dialog-header">
                <el-form-item>
                    <img :src="require('../../assets/images/tc176.png')" style="width:737px;height:33px;" alt="">
                </el-form-item>
                <el-form-item label="公司名称" :label-width="formLabelWidth">
                    <el-input v-model="form.company" autocomplete="off" placeholder="请输入公司名称"  style="width: 400px;height:46px;color:#DDDDDD"></el-input>
                </el-form-item>
                <el-form-item label="报名人数" :label-width="formLabelWidth">
                    <el-input v-model="form.count" autocomplete="off" placeholder="请输入报名人数" style="width: 400px;height:46px;color:#DDDDDD"></el-input>
                </el-form-item>
                <el-form-item label="手机号" :label-width="formLabelWidth">
                    <el-input v-model="form.phoneNum" autocomplete="off" placeholder="请输入手机号" style="width: 400px;height:46px;color:#DDDDDD"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" :label-width="formLabelWidth">
                    <el-input v-model="form.email" autocomplete="off" placeholder="请输入邮箱" style="width: 400px;height:46px;color:#DDDDDD"></el-input>
                </el-form-item>
               
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancel" class="normal">取 消</el-button>
                <el-button  class="normal" @click="ok">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>
<script>
import { Modal } from 'iview'
export default {
    data() {
        return {
            showOrHide: false,
            form: {
                count: '',
                company: '',
                phoneNum: '',
                email: ''
            },
            formLabelWidth: '70px'
        }
    },
    methods: {
        report()  {
            this.showOrHide = true
            console.log(this.showOrHide)
        },
        ok(e) {
            e.preventDefault();
            this.showOrHide = false
            console.log(this.form)
        },
        cancel(e) {
            e.preventDefault();
            console.log(e)
            this.showOrHide = false
            
        }
    },
}
</script>
<style lang="scss" scoped>
.dialog-header {
    color: #D7A967;
    padding: 0 154px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.dialog-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 800px;
    padding: 10px 230px 20px 230px;
}
.normal {
    width: 150px;
    height: 50px;
    border: 1px solid #AF772B;
    border-radius: 6px;
    font-size: 20px;
    font-weight: 500;
    color: #AF772B;

}

.normal:hover {
    width: 150px;
    height: 50px;
    font-size: 20px;
    background: #AF772B;
    border-radius: 6px;
    color: #fff;
}
/deep/.el-dialog__header {
    padding: 0;
}
/deep/.el-dialog__headerbtn .el-dialog__close {
    color: #fff;
    font-size: 20px;
}
/deep/.el-dialog__body {
    padding: 0;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
    width: 800px;
}
/deep/.el-dialog__title {
    line-height: 28px;
    font-size: 30px;
    color: #000000;
    padding: 50px 330px 36px 330px;
    display: block;
    text-align: center;
}
/deep/.el-dialog, .el-pager li {
    background: #fff;
    background-image: url('../../assets/images/circle6.png');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 12px;
    width: 800px;

}
/deep/    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
        }
    }
    .normal-padding {
        padding: 0 360px;
    }
    .page {
        background-image: url('../../assets/images/tc167.png');
        background-size: cover;
        width: 100%;
        height: 1680px;
    }
    .head{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding-top: 140px;
        .headImg{
            width: 517px;
            height: 57px;
        }
        .headDesc{
            width: 636px;
            height: 41px;
            font-size: 14px;
            font-weight: 400;
            color: #EEEEEE;
            line-height: 30px;
            margin-top: 46px;
            margin-bottom: 51px;
        }
    }

    .lists {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .item {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 200px;
            height: 200px;
            margin: 25px 0 82px 0;
            .itemImg {
                width: 90px;
                height: 90px;
                margin: 34px auto 30px auto;
            }
            .itemDesc {
                color: #DEB173;
                font-size: 14px;
                margin: 0 auto;

            }
        }
        .item:hover {
            width: 200px;
            height: 200px;
            border: 1px solid #AAAAAA;
            opacity: 0.5;
            cursor: pointer;
        }
    }
    .moreStyle {
        display: flex;
        flex-direction: column;
        padding: 0 560px 70px 560px;
        .styleTop {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 70px;
            .stImg {
                margin: 0  147px 0 32px;
            }
            .stDesc {
                color: #fff;
                .descTitle {
                    margin: 204px 0 41px 0;
                    height: 23px;
                    font-size: 24px;
                    font-weight: bold;
                    color: #DEB173;
                    line-height: 30px;
                }
                .descContent {
                    width: 311px;
                    height: 104px;
                    font-size: 14px;
                    font-weight: 400;
                    color: #DEB173;
                    line-height: 30px;
                }
            }
        }
        .styleBottom {
            height: 15px;
            font-size: 14px;
            font-weight: 400;
            color: #DEB173;
            line-height: 30px;
            margin: 0 auto;
            i{
                font-style: normal;
                color: #fff;
                cursor: pointer;

            }
        }
    }
    .reports {
        height: 210px;
        .address {         
            height: 14px;
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #D7A967;
            line-height: 30px;
            
        }
        .fujian { 
            height: 14px;
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #D7A967;
            line-height: 30px;
            margin: 19px 0 60px 0;
            cursor: pointer;

        }
        .reportFunc {
            height:60px;
            font-size: 24px;
            font-weight: 500;
            line-height: 60px;
            text-align: center;
            color: #FFFFFF;
            background-image: url('../../assets/images/circle5.png');
            background-repeat: no-repeat;
            background-position: 50% 50%;
            cursor: pointer;
        }
    } 

</style>