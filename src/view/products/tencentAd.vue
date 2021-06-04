
<template>
    <div class="page">
        <div class="head"></div>
        <div class="desc normal">
            <p class="title">游云南</p>
            <div class="desc-box">
                <p class="content">
                    <i>“一部手机游云南”</i>
                    平台是利用物联网、云计算、大数据、人工智能技术打造的“中国第一，世界一流”的全域旅游数字化平台。 为游客提供“吃、住、行、游、购、娱、养”的智慧旅行服务，打造诚信消费的环境与快捷投诉的管理体系，实现“游客体验自由自在，政府服务无处不在”。
                </p>
                <p class="line"></p>
                <p class="content">全面助推云南旅游产业转型升级、数字经济创新与实践，建设一个智能、健康、便利的云南全域旅游生态。</p>
                <p class="spv">云南旅游权威平台，提升旅客行旅体验 ，规范旅游市场生态。</p>
            </div>
            <img :src="require('../../assets/images/tencent/cloud-color.png')" class="desc-img" alt="">
        </div>
        <div class="preview normal">
            <p class="title">平台介绍</p>
            <div class="box">
                <div class="box-item">
                    <img :src="require('../../assets/images/tencent/ic_cxx.png')" alt="" class="bi-img">
                    <p class="bi-title">权威发布</p>
                    <p class="bi-line"></p>
                    <p class="bi-desc">云南省政府、旅发委发起腾讯发公司牵头参与建设</p>
                </div>
                <div class="box-item">
                    <img :src="require('../../assets/images/tencent/ic_qwfb.png')" alt="" class="bi-img">
                    <p class="bi-title"> 一站式服务</p>
                    <p class="bi-line"></p>
                    <p class="bi-desc">云南省政府、旅发委发起腾讯发公司牵头参与建设</p>
                </div>
                                <div class="box-item">
                    <img :src="require('../../assets/images/tencent/ic_yzs.png')" alt="" class="bi-img">
                    <p class="bi-title">创新性旅游</p>
                    <p class="bi-line"></p>
                    <p class="bi-desc">云南省政府、旅发委发起腾讯发公司牵头参与建设</p>
                </div>
                <div class="box-item">
                    <img :src="require('../../assets/images/tencent/ic_dyt.png')" alt="" class="bi-img">
                    <p class="bi-title">多业态合作</p>
                    <p class="bi-line"></p>
                    <p class="bi-desc">云南省政府、旅发委发起腾讯发公司牵头参与建设</p>
                </div>

            </div>
        </div>

        <div class="fund-mgt normal">
            <p class="title">产品体验</p>
            <div class="fund-list">
                <div class="fund-item">
                    <p class="fund-title">游云南Android下载</p>
                    <img :src="require('../../assets/images/tencent/anzhuo.png')" alt="">
                    <img :src="require('../../assets/images/tencent/android.png')" alt="">
                </div>
                <div class="fund-item">
                    <p class="fund-title">游云南iPhone下载</p>
                    <img :src="require('../../assets/images/tencent/pingguo.png')" alt="">
                    <img :src="require('../../assets/images/tencent/ios.png')" alt="">
                </div>
                 <div class="fund-item">
                    <p class="fund-title">游云南直播小程序体验</p>
                    <img :src="require('../../assets/images/tencent/cloud.png')" alt="">
                    <img :src="require('../../assets/images/tencent/xiaochengxu.png')" alt="">
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
        background-image: url('../../assets/images/tencent/bg88.png');
        background-repeat: no-repeat;
    }

    .desc {
        padding: 70px 560px;
    }

    .desc-box {
        display: flex;
        flex-direction: column;
        .content {
            font-size: 14px;
            font-weight: 400;
            color: #666666;
            line-height: 48px;
            text-indent: 2em;
            i {
                color: #020202;
                font-style: normal;
            }
        }
        .line {
            height: 1px;
            background-color: #eee;
            margin: 20px 0;
        }
        .spv {
            font-size: 14px;
            color: #020202;
            line-height: 48px;
            text-indent: 2em;
        }
    }
    .desc-img { 
            padding: 0 376px;
        }

   
    .preview {
        display: flex;
        flex-direction: column;
        margin: 50px 0;
    }
    .box {
        display: flex;
        justify-content: space-between;
        margin-top: 51px;
    }
    .box-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 230px;
        height: 360px;
        padding: 48px 15px 62px 15px;
        margin-top: 51px;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
        margin: 0 6px;
    }
    .box-item:hover {
        position: relative;
        top: -10px;
        box-shadow: 0px -7px 4px 0px rgba(0, 0, 0, 0.02), 0px 6px 6px 0px rgba(0, 0, 0, 0.08);
    }
    .bi-img {
        width: 50px;
        height: 50px;
    }

    .bi-line {
        width: 100%;
        border: 1px solid #dddddd;
    }

    .bi-title {
        font-size: 18px;
        color: #323232;
        padding: 33px 0 22px 0;
    }

    .bi-desc {
        font-size: 14px;
        padding: 0 15px;
        
        font-weight: 400;
        color: #666666;
        line-height: 20px;
    }


    .fund-mgt {
        margin: 70px 0;
    }

    .fund-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .fund-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 51px;
        width: 390px;
        height: 360px;
    }
    .fund-title {
        font-size: 18px;
        color:#323232;
        margin: 37px 0 46px 0;
    }
    .fund-desc {
        font-size: 14px;
        color: #999999;
        text-align: center;
        padding: 0 39px;
    }


</style>
