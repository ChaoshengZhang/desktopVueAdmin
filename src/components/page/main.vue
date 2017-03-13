<template>
    <div id="main" :style="{left:positionLeft+20+'px'}">
        <div class="head-title">
            <span>中新金盾高级持续性威胁防御平台</span>
        </div>
        <div class="main-list">
            <el-row>
                <el-col :xs="24" :sm="12" :md="8" :lg="6">
                    <div class="item" type="1">
                        <div class="item-title">
                            <span>安全态势感知</span>
                        </div>
                        <div class="item-cont">
                            <div class="cate">
                                <a href="">
                                    <i class="iconfont icon-anquan"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="12" :md="8" :lg="6">
                    <div class="item" type="2">
                        <div class="item-title">
                            <span>风险告警展示</span>
                        </div>
                        <div class="item-cont">
                            <div class="cate">
                                <a href="">
                                    <i class="el-icon-information"></i>
                                    <p>攻击统计</p>
                                </a>
                            </div>
                            <div class="cate">
                                <a href="">
                                    <i class="el-icon-document"></i>
                                    <p>攻击态势</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="12" :md="8" :lg="6">
                    <div class="item" type="3">
                        <div class="item-title">
                            <span>案件行为回溯</span>
                        </div>
                        <div class="item-cont">
                            <div class="cate">
                                <a href="">
                                    <i class="el-icon-information"></i>
                                    <p>漏洞告警</p>
                                </a>
                            </div>
                            <div class="cate">
                                <a href="">
                                    <i class="el-icon-document"></i>
                                    <p>文件告警</p>
                                </a>
                            </div>
                            <div class="cate">
                                <a href="">
                                    <i class="el-icon-information"></i>
                                    <p>流量告警</p>
                                </a>
                            </div>
                            <div class="cate">
                                <a href="">
                                    <i class="el-icon-document"></i>
                                    <p>案件管理</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="12" :md="8" :lg="6">
                    <div class="item" type="1">
                        <div class="item-title">
                            <span>入侵数据挖掘</span>
                        </div>
                        <div class="item-cont">
                            <div class="cate">
                                <a href="">
                                    <i class="iconfont icon-sjwj"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="12" :md="8" :lg="6">
                    <div class="item" type="1">
                        <div class="item-title">
                            <span>报表定制分析</span>
                        </div>
                        <div class="item-cont">
                            <div class="cate">
                                <a href="">
                                    <i class="iconfont icon-tjbb"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="12" :md="8" :lg="6">
                    <div class="item" type="3">
                        <div class="item-title">
                            <span>防御平台管理</span>
                        </div>
                        <div class="item-cont">
                            <div class="cate">
                                <a href="">
                                    <i class="el-icon-information"></i>
                                    <p>漏洞告警</p>
                                </a>
                            </div>
                            <div class="cate">
                                <a href="">
                                    <i class="el-icon-document"></i>
                                    <p>文件告警</p>
                                </a>
                            </div>
                            <div class="cate">
                                <a href="">
                                    <i class="el-icon-information"></i>
                                    <p>流量告警</p>
                                </a>
                            </div>
                            <div class="cate">
                                <a href="">
                                    <i class="el-icon-document"></i>
                                    <p>案件管理</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>

</template>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../style/mixin";
    #main{
        position: absolute;
        top:30px;
        right:80px;
        bottom:60px;
        overflow-y: auto;
        @include transition();
        .head-title{
            background: url('../../assets/images/logo.png') no-repeat left center;
            padding-left:35px;
            font-size: 18px;
            color: #fff;
            height:40px;
            line-height:40px;
            margin-left:10px;
        }
        .main-list{
            color: #fff;
            .item{
                margin:15px 8px 0;
                a{
                    display: block;
                    color: #fff;
                }
                .item-title{
                    font-size: 14px;
                }
                .item-cont{
                    margin-top:11px;
                    text-align: center;
                    display: -webkit-flex;
                    display: flex;
                    align-items: stretch;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    .cate{
                        display: -webkit-flex;
                        display: flex;
                        align-items: center;
                        text-align: center;
                        justify-content: center;
                        background-color: darkgoldenrod;
                        margin-top:4px;
                        p{
                            line-height:30px;
                        }
                    }
                }
                &[type="1"]{
                    .cate{
                        width: 100%;
                        height:200px;
                    }
                    i{
                        font-size: 60px;
                    }
                }
                &[type="2"]{
                    .cate{
                        width: calc(50% - 2px);
                        height:200px;
                    }
                    i{
                        font-size: 40px;
                    }
                }
                &[type="3"]{
                    .cate{
                        width: calc(50% - 2px);
                        height:98px;
                    }
                    i{
                        font-size: 30px;
                    }
                }
            }
        }
    }
</style>
<script>

    export  default({
        props:["positionLeft"]
    })

</script>