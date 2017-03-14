<template>
    <div id="favorite" :style="{left:positionLeft-60+'px'}">
        <a href="#" @click.stop.prevent="changePosition()" class="toggle-btn">
            <i class="el-icon-caret-right"></i>
        </a>
        <div class="favorite-title">关注</div>
        <div class="favorite-list">
            <ul>
                <li v-for="(value,key) in favoriteList">
                    <el-tooltip class="item" effect="dark" :content="value.name" placement="right">
                        <a :href="value.url">
                            <i class="iconfont" :class="value.icon"></i>
                        </a>
                    </el-tooltip>
                </li>
            </ul>
        </div>
        <el-tooltip class="item" effect="dark" :content="fullScreenText" placement="top-start">
            <a href="#" @click.stop.prevent="launchFullScreen()" class="fullScreenBtn">
                <i class="iconfont icon-quanping"></i>
            </a>
        </el-tooltip>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../style/mixin";
    #favorite{
        width: 60px;
        bottom:0;
        top:0;
        position: absolute;
        background-color: brown;
        @include transition();
        .toggle-btn{
            position: absolute;
            left:100%;
            top:50%;
            transform: translate(0,-50%);
            color: #fff;
            height:100px;
            background-color: brown;
            line-height:100px;
        }
        .favorite-title{
            color: #fff;
            text-align: center;
            background-color: cadetblue;
            line-height:28px;
        }
        .favorite-list{
            text-align: center;
            li{
                border-bottom: 1px solid rgba(255,255,255,0.15);
            }
            a{
                display: inline-block;
                width: 50px;
                height:50px;
                line-height:50px;
                color: #fff;
            }
            i{
                font-size: 30px;
            }
        }
        .fullScreenBtn{
            position: absolute;
            left:0;
            right:0;
            bottom:0;
            height:60px;
            line-height:60px;
            text-align: center;
            color: #fff;
            border-top:1px solid rgba(255,255,255,0.15);
            i{
                font-size: 30px;
            }
        }
    }
</style>
<script>

    export default({
        props:['positionLeft'],
        data(){
            return {
                fullScreenText:"全屏展示",
                favoriteList:[
                    {
                        "name":"安全态势感知",
                        "icon":"icon-fengxian",
                        "url":"securitySituation"
                    },
                    {
                        "name":"案件行为回溯",
                        "icon":"icon-ajdc",
                        "url":"caseManagement"
                    },
                    {
                        "name":"入侵数据挖掘123",
                        "icon":"icon-sjwj",
                        "url":"intrusionData"
                    },
                    {
                        "name":"防御平台管理",
                        "icon":"icon-guanli",
                        "url":"menuManagement"
                    }
                ]
            }
        },
        methods:{
            changePosition:function(){
                this.$emit('changePosition', 'success!');
            },
            IsFullScreen:function() {
                return (window.screenLeft == 0 && window.document.body.clientWidth == window.screen.width);
            },
            launchFullScreen:function(){
                var element = document.documentElement;
                if(!this.IsFullScreen()){
                    if(document.exitFullscreen){
                        document.exitFullscreen();
                    }else if(document.mozCancelFullScreen){
                        document.mozCancelFullScreen();
                    }else if(document.webkitExitFullscreen){
                        document.webkitExitFullscreen();
                    }
                    this.fullScreenText = "全屏展示";
                }else{
                    if (element.requestFullscreen){
                        element.requestFullscreen();
                    } else if (element.mozRequestFullScreen){
                        element.mozRequestFullScreen();
                    } else if (element.webkitRequestFullscreen){
                        element.webkitRequestFullscreen();
                    } else if (element.msRequestFullscreen){
                        element.msRequestFullscreen();
                    }
                    this.fullScreenText = "退出全屏";
                }
            }
        }
    })

</script>