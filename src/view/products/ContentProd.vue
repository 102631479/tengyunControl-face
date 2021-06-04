
<template>
    <div class="page">
        <div class="head">
            <div class="head-box">
                <p class="head-title">立即购买</p>
                <p class="head-title">产品价格</p>
                <p class="head-doc">帮助文档＞</p>
            </div>
        </div>
        <div class="block-1">
            <p class="title">
                事件直播
            </p>
            <div class="box normal">
                <div class="item">
                    <img :src="require('../../assets/images/product/tc190.png')" alt="" class="item-img">
                    <p class="item-title">小程序直播</p>
                    <p class="line"></p>
                    <p class="item-desc">创建直播间、横竖屏直播、美颜</p>
                </div>
                <div class="item">
                    <img :src="require('../../assets/images/product/tc190.png')" alt="" class="item-img">
                    <p class="item-title">网页直播</p>
                    <p class="line"></p>
                    <p class="item-desc">PPT+摄像头+画笔，轻松在线培训</p>
                </div>
                <div class="item">
                    <img :src="require('../../assets/images/product/tc190.png')" alt="" class="item-img">
                    <p class="item-title">云导播台</p>
                    <p class="line"></p>
                    <p class="item-desc">16路高清视频流在线切换、制作</p>
                </div>
                <div class="item">
                    <img :src="require('../../assets/images/product/tc190.png')" alt="" class="item-img">
                    <p class="item-title">云端剪辑</p>
                    <p class="line"></p>
                    <p class="item-desc">直播视频在线毫秒级精剪、合并</p>
                </div>
            </div>
        </div>
        <div class="block-2 normal ">
            <p class="title special">直播案例</p>
            <div class="pic-items">
                <div class="items" @mouseenter="showActive" @mouseout="out">
                    <img :src="require('../../assets/images/product/tc193.png')" alt="" v-if="!active" >
                    <div class="hover" v-if="active">
                        <p class="im-p0">中国银行2017~2018中国银行中银直播间系列节目</p>
                        <p class="im-p1 pad">2017年年度</p>
                        <p class="im-p2 pad">5个模块， 30场直播</p>
                        <p class="im-p3 pad">0故障实施</p>
                        <p class="pad">全程直播策划/运营服务</p>
                        <p class="pad">
                                累计直播触达
                                1000万
                                用户群体
                            </p>
                    </div>
                </div>
                <div class="items" @mouseenter="showActive" @mouseout="out">
                    <img :src="require('../../assets/images/product/tc193.png')" alt="" v-if="!active" >
                    <div class="hover" v-if="active">
                        <p class="im-p0">中国银行2017~2018中国银行中银直播间系列节目</p>
                        <p class="im-p1 pad">2017年年度</p>
                        <p class="im-p2 pad">5个模块， 30场直播</p>
                        <p class="im-p3 pad">0故障实施</p>
                        <p class="pad">全程直播策划/运营服务</p>
                        <p class="pad">
                                累计直播触达
                                1000万
                                用户群体
                            </p>
                    </div>
                </div>
                <div class="items" @mouseenter="showActive" @mouseout="out">
                    <img :src="require('../../assets/images/product/tc193.png')" alt="" v-if="!active" >
                    <div class="hover" v-if="active">
                        <p class="im-p0">中国银行2017~2018中国银行中银直播间系列节目</p>
                        <p class="im-p1 pad">2017年年度</p>
                        <p class="im-p2 pad">5个模块， 30场直播</p>
                        <p class="im-p3 pad">0故障实施</p>
                        <p class="pad">全程直播策划/运营服务</p>
                        <p class="pad">
                                累计直播触达
                                1000万
                                用户群体
                            </p>
                    </div>
                </div>
                <div class="items" @mouseenter="showActive" @mouseout="out">
                    <img :src="require('../../assets/images/product/tc193.png')" alt="" v-if="!active" >
                    <div class="hover" v-if="active">
                        <p class="im-p0">中国银行2017~2018中国银行中银直播间系列节目</p>
                        <p class="im-p1 pad">2017年年度</p>
                        <p class="im-p2 pad">5个模块， 30场直播</p>
                        <p class="im-p3 pad">0故障实施</p>
                        <p class="pad">全程直播策划/运营服务</p>
                        <p class="pad">
                                累计直播触达
                                1000万
                                用户群体
                            </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="block-3 normal">
            <p class="title">直播服务</p>
            <div class="sev-lists">
                <div class="sev-item">
                    <img :src="require('../../assets/images/product/tc190.png')" class="sev-img" alt="">
                    <p class="sev-title">视频直播执行</p>
                    <p class="sev-desc">为您提供从拍摄、页面装修设计，到直播执行，数据结果交付的直播服务。</p>
                </div>
                                <div class="sev-item">
                    <img :src="require('../../assets/images/product/tc190.png')" class="sev-img" alt="">
                    <p class="sev-title">视频直播执行</p>
                    <p class="sev-desc">为您提供从拍摄、页面装修设计，到直播执行，数据结果交付的直播服务。</p>
                </div>
                                <div class="sev-item">
                    <img :src="require('../../assets/images/product/tc190.png')" class="sev-img" alt="">
                    <p class="sev-title">视频直播执行</p>
                    <p class="sev-desc">为您提供从拍摄、页面装修设计，到直播执行，数据结果交付的直播服务。</p>
                </div>
            </div>
        </div>
        <div class="block-4 normal">
            <p class="title">直播价值</p>
            <div class="liver">
                <div class="live-item">
                    <p class="live-title">50+纬度用户属性 精准生成用户画像</p>
                    <img :src="require('../../assets/images/product/product5-1.png')" alt="" class="live-img">
                </div>
                <div class="live-item">
                    <p class="live-title">50+纬度用户属性 精准生成用户画像</p>
                    <img :src="require('../../assets/images/product/product5-2.png')" alt="" class="live-img">
                </div>
                <div class="live-item">
                    <p class="live-title">50+纬度用户属性 精准生成用户画像</p>
                    <img :src="require('../../assets/images/product/product5-3.png')" alt="" class="live-img">
                </div>
            </div>
        </div>


        <bottom></bottom>

    </div>
</template>

<script>
import bottom from './bottom'
export default {
    components: {
        bottom
    },
    data() {
        return {
            active: false
        }
    },
    methods: {
        showActive() {
            this.active = true
        },
        out() {
            this.active = false
        }
    },
}
</script>

<style lang="scss" scoped>
    .page {
        background-color: #fff;
    }
    .normal {
        padding: 0 360px;
    }
    .title {
        height: 28px;
        line-height: 28px;
        font-size: 30px;
        font-weight: 500;
        color: #333333;
        text-align: center;
    }

    .head {
        display: flex;
        width: 100%;
        height: 340px;
        background-image: url('../../assets/images/product/bg.png');
        background-repeat: no-repeat;
        margin-top: -5px;
    }
    .head-box {
        position: relative;
        top: 65%;
        left: 19%;
        display: flex;
    }
    .head-title {
        width: 100px;
        height: 34px;
        text-align: center;
        line-height: 34px;
        font-size: 14px;
        color: #00BAFF;
        margin-right: 20px;
        border: 1px solid #00BAFF;
        
    }
    .head-title:hover {
        background: #00BAFF;
        color: #fff;
    }

    .head-doc {
        font-size: 14px;
        color: #CCCCCC;
        line-height: 34px;
    }
    .special {
        color: #fff;
        margin-top: 69px;
    }
    .block-1 {
        margin: 65px 0 118px 0 ;

    }

    .box {
        display: flex;
        margin-top: 53px;
    }
    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 290px;
        height: 280px;
        margin: 0 6px;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
    }
    .item:hover {
        position: relative;
        top: -10px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    }
    .item-img {
        width: 50px;
        height: 50px;
        margin-top: 48px;
    }
    .item-title {
        font-size: 18px;
        color: #333333;
        padding: 33px 0 22px 0;
    }
    .line {
        width: 100%;
        height: 1px;
        background-color: #eee;
        padding: 0 15px;
    }
    .item-desc {
        font-size: 14px;
        color: #666666;
        margin: 27px 36px 68px 58px;
    }

    .block-2 {
        display: flex;
        flex-direction: column;
        background-color: #171F32;

    }

    .pic-items {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 54px;
    }

    .items {
        width: 300px;
        height: 470px;
        margin: 0 3px;
        overflow: hidden;
    }

    .hover {
        padding: 78px 21px 106px 21px;
        background-color: #055DB7;
        opacity: 0.7;
    }

    .im-p0 {
        font-size: 20px;
        color: #EEEEEE;
        font-weight: 500;
        line-height: 36px;
    }
    .im-p1 {
        font-size: 16px;
        color: #EEEEEE;
        margin-top: 27px;
    }

    .im-p2 {
        margin-top: 18px;
        font-size: 16px;
        margin-bottom: 30px;
    }

    .im-p3 {
        font-size: 16px;
        margin-bottom: 22px;;
    }
    .pad {
        padding: 0 12px;
        color: #EEEEEE;
    }


    .block-3 {
        margin: 64px 0 69px 0;  
    }
    .sev-lists {
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
    .sev-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 390px;
        height: 360px;
        margin-top: 41px;
border: 1px solid #EEEEEE;

    }
    .sev-item:hover {
        position: relative;
        top: -10px;
    }
    .sev-img {
        width: 100%;
        height: 170px;
    }
    .sev-title {
        font-size: 18px;
        color: #323232;
        margin: 37px 0 46px 0;
    }
    .sev-desc {
        font-size: 14px;
        color: #999999;
        padding: 0 39px 46px 39px;
        text-align: center;
    }

    .block-4 {
        display: flex;
        flex-direction: column;
        background-color: #F6F8FB;
        width: 100%;
        height: 508px;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .liver {
        display: flex;
        justify-content: space-between  ;
        margin-top: 50px ;
    }
    .live-item {
        display: flex;
        flex-direction: column;
        width: 380px;
        height: 38px;
        line-height: 38px;
    }
    .live-title {
        font-size: 16px;
        background-color: #00BAFF;
        text-align: center;
        margin-bottom: 22px;
    }
    .live-img {
        width: 380px;
        height: 269px;
    }



</style>
