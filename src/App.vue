<template>
    <div id="app">
        <v-footer :position-left="positionLeft">
            <div class="active-window">
                <ul>
                    <li v-for="(value,key) in windowList">
                        <a href="" @click.stop.prevent="handleWindow(value,key,'show')">
                            {{value.text}}
                        </a>
                    </li>
                </ul>
            </div>
        </v-footer>
        <v-favorite :position-left="positionLeft"  @changePosition="changePositionLeft"></v-favorite>
        <v-main :position-left="positionLeft"></v-main>
        <div id="web-main-content">
            <div v-bind:style="value.style" class="iFrame-show" :id="value.id" v-for="(value,key) in windowList">
                <div class="iFrame-show-title" >
                    <span class="name">{{value.text}}</span>
                    <div class="handle-icon">
                        <a href="#" @click.stop.prevent="handleWindow(value,key,'min')"><i class="iconfont icon-zuixiaohua"></i></a>
                        <a href="#" @click.stop.prevent="handleWindow(value,key,'max')"><i class="iconfont icon-zuidahua"></i></a>
                        <a href="#" @click.stop.prevent="handleWindow(value,key,'close')"><i class="iconfont icon-close"></i></a>
                    </div>
                </div>
                <div class="iFrame-show-content">
                    {{value.text}}
                    {{value.style}}
                </div>
                <!---这个东西后期再商榷需不需要我觉得是不需要的~--->
                <!--<div class="right-drag drag-btn"></div>-->
                <!--<div class="bottom-drag drag-btn"></div>-->
                <!--<div class="right-bottom-drag"><i class="iconfont icon-xiejiantou"></i></div>-->
            </div>
        </div>
    </div>
</template>
<script>

    import vFooter from  "./components/common/footer.vue";
    import vFavorite from "./components/common/favorite.vue";
    import vMain from './components/page/main.vue';
    import './methods/app.exec.js'

export default {

    data () {
        return {
            positionLeft:60,
            commonZIndex:99,
            windowList:[]
        }
    },
    components:{
        vFooter,vFavorite,vMain
    },
    computed:{
        commonLeft:function(){
            return ($(window).width()-1100)/2+"px";
        },
        commonTop:function(){
            return ($(window).height()-700)/2+"px";
        },
    },
    methods:appMethods,
    mounted(){
        this.$nextTick(function () {
            this.windowList = [
                {
                    "id":"assetManagement",
                    "text":"资产管理",
                    "style":{
                        "left":this.commonLeft,
                        "top":this.commonTop,
                        "z-index":this.commonZIndex,
                        "width":"1100px",
                        "height":"700px"
                    }
                },
                {
                    "id":"attackSituation",
                    "text":"攻击态势",
                    "style":{
                        "left":this.commonLeft,
                        "top":this.commonTop,
                        "z-index":this.commonZIndex,
                        "width":"1100px",
                        "height":"700px"
                    }
                },
                {
                    "id":"flowAlarm",
                    "text":"流量警告",
                    "style":{
                        "left":this.commonLeft,
                        "top":this.commonTop,
                        "z-index":this.commonZIndex,
                        "width":"1100px",
                        "height":"700px"
                    }
                }
            ]
        })

    }
}
</script>
