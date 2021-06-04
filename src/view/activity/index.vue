<!--
 * @Author: your name
 * @Date: 2020-09-23 17:24:27
 * @LastEditTime: 2020-11-09 09:45:58
 * @LastEditors: huangfu
 * @Description: In User Settings Edit
 * @FilePath: \open-platform-ui\platform-pc-ui\src\view\activity\index.vue
 -->

<template>
    <div class="page">
        <div class="top-head"></div>
        <div class="top-content normal-padding">
            <p class="top-title">最新活动</p>
            <div class="top-items">
                <div class="item">
                    <img class="item-img" :src="require('../../assets/images/g8.png')" alt="">
                    <p class="item-title">线下实体活动报名</p>
                    <p class="item-btn">立即参加</p>
                </div>
                <div class="item">
                    <img class="item-img" :src="require('../../assets/images/g9.png')" alt="">
                    <p class="item-title">线下实体活动报名</p>
                    <p class="item-btn">立即参加</p>
                </div>
                <div class="item">
                    <img class="item-img" :src="require('../../assets/images/g10.png')" alt="">
                    <p class="item-title">线下实体活动报名</p>
                    <p class="item-btn">立即参加</p>
                </div>
                <div class="item">
                    <img class="item-img" :src="require('../../assets/images/g8.png')" alt="">
                    <p class="item-title">线下实体活动报名</p>
                    <p class="item-btn">立即参加</p>
                </div>
                <div class="item">
                    <img class="item-img" :src="require('../../assets/images/g9.png')" alt="">
                    <p class="item-title">线下实体活动报名</p>
                    <p class="item-btn">立即参加</p>
                </div>
                <div class="item">
                    <img class="item-img" :src="require('../../assets/images/g10.png')" alt="">
                    <p class="item-title">线下实体活动报名</p>
                    <p class="item-btn">立即参加</p>
                </div>
                                <div class="item">
                    <img class="item-img" :src="require('../../assets/images/g8.png')" alt="">
                    <p class="item-title">线下实体活动报名</p>
                    <p class="item-btn">立即参加</p>
                </div>
                <div class="item">
                    <img class="item-img" :src="require('../../assets/images/g9.png')" alt="">
                    <p class="item-title">线下实体活动报名</p>
                    <p class="item-btn">立即参加</p>
                </div>
                <div class="item">
                    <img class="item-img" :src="require('../../assets/images/g10.png')" alt="">
                    <p class="item-title">线下实体活动报名</p>
                    <p class="item-btn">立即参加</p>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>
    .normal-padding {
        padding: 76px 0px 70px 0px;
    }
    .page {
        background-color: #fff;
    }
    .top-head {
        background-image: url('../../assets/images/tc59.png');
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 340px;
    }
    .top-content {
        margin: 0 auto;
        width: 100%;
        max-width: 1200px;
        min-width: 500px;
        .top-title {
            font-size: 30px;
            color: #020202;
            line-height: 28px;
            font-weight: 500;
            text-align: center;
            margin-bottom: 21px;
        }
        .top-items {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            .item {
                margin-top: 30px;
                .item-img {
                    width: 380px;
                    height: 86px;
                }
                .item-title {
                    margin: 13px 0 29px 36px;
                    font-size: 16px;
                    color: #333333;
                    font-weight: 400;

                }
                .item-btn {
                    width: 128px;
                    height: 35px;
                    border: 1px solid #00BAFF;
                    
                    font-size: 14px;
                    font-weight: 400;
                    color: #00BAFF;

                    text-align: center;
                    line-height: 35px;
                    margin: 0 0 20px 36px;
                }
                .item-btn:hover {
                    color: #ffffff;
                    background-color: #00BAFF;
                }

            }
        }
    }
</style>