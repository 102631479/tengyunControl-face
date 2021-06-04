
<template>
    <div class="page">
        <!-- 头部 -->
        <div class="head">
            <div class="head-left">
                <p class="head-title">大数据平台</p>
                <p class="head-desc">为您提供简单、高效、开放的一站式大数据服务。</p>
                <div class="help">
                    <p class="t1">我要咨询</p>
                    <p class="pro-desc">产品文档</p>
                </div>
            </div>
            <div class="head-right">
                <img :src="require('../../assets/images/big-data/banner-dashuju-right-zh.png')" class="hr-img" alt="">
            </div>
        </div>
        <!-- 产品架构 -->
        <div class="product-architecture normal">
            <div class="breadCrum">产品>大数据平台详情</div>
            <p class="normal-title">产品架构</p>
            <img :src="require('../../assets/images/big-data/img_cpjg.png')" class="pa-img" alt="">
        </div>
        <!-- 产品优势 -->
        <div class="product-advantage normal">
            <p class="normal-title">产品优势</p>
            <div class="adv-list">
                <div class="item">
                    <img :src="require('../../assets/images/big-data/icon-gaoxiaowending.png')" alt="" class="item-img">
                    <p class="item-title">简单</p>
                    <p class="item-desc"> 无需大数据技术背景，开箱即用极易上手，可视化展示分析结果</p>
                </div>
                <div class="item">
                    <img :src="require('../../assets/images/big-data/icon-gaoxiaowending.png')" alt="" class="item-img">
                    <p class="item-title">简单</p>
                    <p class="item-desc">低成本高质量的轻松应对海量数据处理用户可将资源聚焦于业务价值提升无需关注复杂的大数据实现技术</p>
                </div>
                <div class="item">
                    <img :src="require('../../assets/images/big-data/icon-gaoxiaowending.png')" alt="" class="item-img">
                    <p class="item-title">简单</p>
                    <p class="item-desc"> 支持多数据源接入，完美结合七牛云生态高度可定制化，支持私有化部署为用户赋能应用大数据的核心能力</p>
                </div>
            </div>
        </div>
        <!-- 核心服务以及功能 -->
        <div class="serve-func normal">
            <p class="normal-title">核心服务及功能</p>
            <div class="server">
                <div class="sev-left">

                    <div class="search-log">
                        <p class="log-title">日志检索服务</p>
                        <p class="log-desc">提供针对日志类数据的存储与检索服务，用户无需开发就能快速实现数据定制化分词、存储、检索、分析功能。高效索引和搜索海量数据，提升运维/运营效率，快速查找和定位问题。</p>
                        <img :src="require('../../assets/images/big-data/icon-shixushujuku.png')" class="spark-img" alt="">
                    </div>

                    <div class="spark-serve">
                        <p class="log-title">Spark 服务</p>
                        <p class="log-desc">基于容器技术研发的 Spark 服务。支持快速一键式集群部署，计算资源弹性伸缩，按需收费，为用户提供快餐式大数据消费能力。</p>
                        <img :src="require('../../assets/images/big-data/icon-dashujugongzuoliu.png')" class="serv-img" alt="">
                    </div>

                </div>
                <div class="sev-right">
                    <div class="bigDataFlow">
                        <img :src="require('../../assets/images/big-data/icon-rizhijiansuo.png')" class="sortDb-img" alt="">
                        <p class="log-title">时序数据库</p>
                        <p class="log-desc">存储时序数据的高性能数据库，专为处理高写入和高并发查询而研制，支持对时序数据进行函数计算与分组聚合。</p>
                    </div>
                    <div class="bigDataFlow">
                        <img :src="require('../../assets/images/big-data/icon-baobiaogongzuoshi.png')" class="bigDataFlow-img" alt="">
                        <p class="log-title">大数据工作流引擎</p>
                        <p class="log-desc">可视化大数据接入、计算、导出引擎，高效优雅的实现海量数据的处理。拓扑式数据流管理，方便用户快速进行数据流建模，直观把握业务数据流向。</p>
                    </div>
                </div>

            </div>
        </div>
        <!-- 典型应用场景 -->
        <div class="application-scenarios normal">
            <p class="application-title">典型应用场景</p>
            <Tabs>
                <TabPane label="标签一">
                    <div class="item">
                        <img :src="require('../../assets/images/big-data/img_1.png')" class="item-tab-img" alt="">
                        <div>
                            <p class="item-tab-title">数据化运维</p>
                            <p class="item-tab-desc">统一日志管理，实时监控业务质量现状，为用户系统的日常诊断调优和追踪安全问题提供更全面的数据支撑。赋予技术支持人员实时高效搜索日志的能力，从而可以快速定位信息，发现问题根源，提升运维效率。</p>
                        </div>
                    </div>
                    <div class="item">
                        <img :src="require('../../assets/images/big-data/img_2.png')" class="item-tab-img" alt="">
                        <div>
                            <p class="item-tab-title">数据化运维</p>
                            <p class="item-tab-desc">统一日志管理，实时监控业务质量现状，为用户系统的日常诊断调优和追踪安全问题提供更全面的数据支撑。赋予技术支持人员实时高效搜索日志的能力，从而可以快速定位信息，发现问题根源，提升运维效率。</p>
                        </div>
                    </div>
                    <div class="item">
                        <img :src="require('../../assets/images/big-data/img_3.png')" class="item-tab-img" alt="">
                        <div>
                            <p class="item-tab-title">数据化运维</p>
                            <p class="item-tab-desc">统一日志管理，实时监控业务质量现状，为用户系统的日常诊断调优和追踪安全问题提供更全面的数据支撑。赋予技术支持人员实时高效搜索日志的能力，从而可以快速定位信息，发现问题根源，提升运维效率。</p>
                        </div>
                    </div>
                    <div class="item">
                        <img :src="require('../../assets/images/big-data/img_4.png')" class="item-tab-img" alt="">
                        <div>
                            <p class="item-tab-title">数据化运维</p>
                            <p class="item-tab-desc">统一日志管理，实时监控业务质量现状，为用户系统的日常诊断调优和追踪安全问题提供更全面的数据支撑。赋予技术支持人员实时高效搜索日志的能力，从而可以快速定位信息，发现问题根源，提升运维效率。</p>
                        </div>
                    </div>
                     <div class="item">
                        <img :src="require('../../assets/images/big-data/img_5.png')" class="item-tab-img" alt="">
                        <div>
                            <p class="item-tab-title">数据化运维</p>
                            <p class="item-tab-desc">统一日志管理，实时监控业务质量现状，为用户系统的日常诊断调优和追踪安全问题提供更全面的数据支撑。赋予技术支持人员实时高效搜索日志的能力，从而可以快速定位信息，发现问题根源，提升运维效率。</p>
                        </div>
                    </div>
                </TabPane>
                <TabPane label="标签二">标签二的内容</TabPane>
                <TabPane label="标签三">标签三的内容</TabPane>
            </Tabs>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    created() {
    },
    methods: {
        
    },

}
</script>
<style lang="scss" scoped>

    .page {
        width: 100%;
        background-color: #fff;
    }
    .normal {
        padding: 0 360px;
    }

    .normal-title {
        height: 28px;
        font-size: 30px;
        font-weight: 500;
        color: #333333;
        line-height: 28px;
        margin-bottom: 29px;
        text-align: center;
    }

    .log-title {
        height: 23px;
        font-size: 24px;
        font-weight: 500;
        color: #333333;
        line-height: 23px;
        margin-bottom: 26px;
    }
    .log-desc {
        height: 45px;
        font-size: 14px;
        font-weight: 400;
        color: #666666;
        line-height: 30px;
    }

    .head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%; 
        height: 100%;
        background: #1F2229;
        padding-left: 360px;
        padding-right: 346px;
        padding-top: 39px;
        padding-bottom: 39px;
        .head-title {
            height: 34px;
            font-size: 36px;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 34px;
        }
        .head-desc {
            margin: 27px 0 58px 0;
            height: 14px;
            font-size: 14px;
            font-weight: 500;
            color: #FFFFFF;
        }
        .help {
            display: flex;
            .t1 {
                width: 100px;
                height: 34px;
                background: #0084FF;
                text-align: center;
                line-height: 34px;
                color: #fff;

            }
            .pro-desc {
                width: 100px;
                height: 34px;
                border: 1px solid #0084FF;
                color: #0084FF;
                text-align: center;
                line-height: 34px;
                margin-left: 20px;
            }
        }
    }


    .product-architecture {
        margin: 20px 0 113px 0;
        .breadCrum {
            height: 14px;
            font-size: 14px;
            font-weight: 400;
            color: #666666;
            margin-bottom: 38px;
        }
        .pa-img {
            width: 1206px;
            height: 650px;
        }
    }

    .product-advantage {
        padding-top: 43px;
        padding-bottom: 34px;
        background: #F5F4F7;
        .adv-list {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .item-img {
                    width: 46px;
                    height: 43px;
                    margin: 21px 0 25px 0;
                }
                .item-title {
                    height: 23px;
                    font-size: 24px;
                    font-weight: 500;
                    color: #333333;
                    line-height: 23px;
                    margin-bottom: 31px;
                }
                .item-desc {
                    width: 250px;
                    height: 78px;
                    font-size: 14px;
                    font-weight: 400;
                    color: #666666;
                    line-height: 20px;
                    text-align: center
                }
            }
        }
    }
    
    .serve-func {
        padding-top: 70px;
        .server  {
            display: flex;
            justify-content: space-between;
            .sev-left {
                margin-top: 44px;
                margin-right: 98px;
                .spark-img {
                    margin-left: 80px;
                    width: 276px;
                    height: 162px;
                    margin-top: 141px;
                    margin-bottom: 29px;
                }
                .serv-img {
                    width: 303px;
                    height: 178px;
                    margin-left: 56px;
                    margin-top: 141px;
                    margin-bottom: 66px;
                }
            }
            .sev-right {
                margin-top: 24px;
                .sortDb-img {
                    margin-left: 33px;
                    margin-bottom: 49px;
                    width: 305px;
                    height: 179px;
                }
                .bigDataFlow-img {
                    width: 294px;
                    height: 173px;
                    margin-left: 8px;
                    margin-bottom: 17px;
                    margin-top: 156px;
                }

            }

        }
    }

    .application-scenarios {
        background-color: #F5F4F7;
        padding-top: 73px;
        .application-title {
            font-size: 30px;
            color: #333333;
            margin-bottom: 81px;
            text-align: center;
        }
        .item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            .item-tab-img {
                width: 226px;
                height: 150px;
                margin-right: 107px;
            }
        }
        .item-tab-title {
            height: 23px;
            font-size: 24px;
            font-weight: 500;
            color: #333333;
            line-height: 20px;
            margin-top: 41px;
            margin-bottom: 21px;
        }
        .item-tab-desc {
            height: 45px;
            font-size: 14px;
            font-weight: 400;
            color: #666666;
            line-height: 30px;
        }
    }
    /deep/.ivu-tabs-bar {
        border-bottom: none;
        margin-bottom: 28px;
    }
    /deep/.ivu-tabs-nav {
        padding-left: 0;
        margin: 0;
        text-align: center;
        float: none;
        list-style: none;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
        -webkit-transition: -webkit-transform 0.5s ease-in-out;
        transition: -webkit-transform 0.5s ease-in-out;
        transition: transform 0.5s ease-in-out;
        transition: transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out;
    }
    /deep/.ivu-tabs-ink-bar {
        height: 2px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        background-color: #00BAFF;
        position: absolute;
        left: 38.7%;
        bottom: 1px;
        z-index: 1;
        -webkit-transition: -webkit-transform 0.3s ease-in-out;
        transition: -webkit-transform 0.3s ease-in-out;
        transition: transform 0.3s ease-in-out;
        transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
    }
</style>
