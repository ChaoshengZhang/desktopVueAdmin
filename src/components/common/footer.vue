<template>
    <footer id="footer" :style="{left:positionLeft+'px'}">
        <div class="footer-left">
            <a href="javascript;;" class="my-item">
                <el-tooltip content="Home" placement="top">
                    <i class="el-icon-menu"></i>
                </el-tooltip>
            </a>
            <div class="my-item">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        章超胜<i class="el-icon-caret-top el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人信息</el-dropdown-item>
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="active-window">
                <ul>
                    <li>
                        <a href="">安全态势感知</a>
                    </li>
                    <li>
                        <a href="">漏洞告警</a>
                    </li>
                    <li>
                        <a href="">攻击统计</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-right">
            <div class="item">
                <el-tooltip content="清除缓存" placement="bottom-end">
                    <a href="javascript:;"><i class="iconfont icon-qingchuhuancun"></i></a>
                </el-tooltip>
            </div>
            <div class="item">
                <el-tooltip placement="bottom-end">
                    <div slot="content" v-html="CPUAlarmContent"></div>
                    <el-badge is-dot>
                        <a href="javascript:;"><i class="iconfont icon-ecs-disk"></i></a>
                    </el-badge>
                </el-tooltip>
            </div>
            <div class="item">
                <el-tooltip placement="bottom-end">
                    <div slot="content" v-html="memoryAlarmContent"></div>
                    <el-badge is-dot>
                        <a href="javascript:;"><i class="iconfont icon-neicun"></i></a>
                    </el-badge>
                </el-tooltip>
            </div>
            <div class="item">
                <el-tooltip placement="bottom-end">
                    <div slot="content" v-html="CPUAlarmContent"></div>
                    <el-badge is-dot>
                        <a href="javascript:;"><i class="iconfont icon-CPU"></i></a>
                    </el-badge>
                </el-tooltip>
            </div>
        </div>
    </footer>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../style/mixin";
    #footer{
        position: absolute;
        height:40px;
        background-color: chocolate;
        color: #fff;
        left:0;
        bottom:0;
        right:0;
        z-index: 1;
        @include transition();
        .footer-left{
            float: left;
            .active-window{
                display: inline-block;
                margin-left:5px;
                ul{
                    overflow: hidden;
                    li{
                        float: left;
                        margin-left:1px;
                        padding-top:2px;
                        a{
                            display: inline-block;
                            padding:0 10px;
                            line-height:34px;
                            color: #fff;
                            border: 1px solid rgba(255,255,255,0.4);
                            box-shadow: inset 0 0 20px rgba(255,255,255,0.4);
                            transition: all 0.3s linear;
                            &:hover{
                                box-shadow: inset 0 0 20px rgba(0,0,0,0.6);
                            }
                        }
                    }
                }
            }
            .my-item{
                font-size: 18px;
                line-height:40px;
                padding: 0 10px;
                float: left;
                text-align: center;
                color: #fff;
                border-right:1px solid rgba(255,255,255,0.15);
                span{
                    color: #fff;
                }
            }
        }
        .footer-right{
            float: right;
            .item{
                display: inline-block;
                text-align: center;
                width: 40px;
                line-height:40px;
                border-left: 1px solid rgba(255,255,255,0.15);
                a{
                    color: #fff;
                    i{
                        font-size: 24px;
                    }
                }

            }
        }
    }
</style>
<script>

    export  default({
        props:['positionLeft'],
        data(){
            return {
                diskAlarm:{
                    value:1,
                    text:"磁盘警告",

                },
                CPUAlarm:{
                    value:2,
                    text:"CPU警告"
                },
                memoryAlarm:{
                    value:2,
                    text:"内存警告"
                }
            }
        },
        computed:{
            diskAlarmContent: function(){
                return this.diskAlarm.text+'<span class="alarm-num">'+this.diskAlarm.value+'</span>'
            },
            CPUAlarmContent: function(){
                return this.CPUAlarm.text+'<span class="alarm-num">'+this.CPUAlarm.value+'</span>'
            },
            memoryAlarmContent: function(){
                return this.memoryAlarm.text+'<span class="alarm-num">'+this.memoryAlarm.value+'</span>'
            }
        }
    })

</script>