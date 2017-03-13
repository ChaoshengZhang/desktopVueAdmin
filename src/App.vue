<template>
    <div id="app">
        <v-footer :position-left="positionLeft"></v-footer>
        <v-favorite :position-left="positionLeft"  @changePosition="changePositionLeft"></v-favorite>
        <v-main :position-left="positionLeft"></v-main>
        <div class="iFrame-show" id="iFrame-show-1">
            <div class="iFrame-show-title">
                <span class="name">安全态势感知</span>
                <div class="handle-icon">
                    <a href="#" @click.stop.prevent="windowMin"><i class="iconfont icon-zuixiaohua"></i></a>
                    <a href="#" @click.stop.prevent="windowMax"><i class="iconfont icon-zuidahua"></i></a>
                    <a href="#" @click.stop.prevent="windowClose"><i class="iconfont icon-close"></i></a>
                </div>
            </div>
            <div class="iFrame-show-content">
                <p>据报道，“关键决断”将持续至本月24日，为了参加此次演习，美国“卡尔·文森”号航空母舰、F-35B隐形战机等美国战略武器将陆续抵韩，这些武器将重点进行先发制人打击训练。</p>
                <p>“卡尔·文森”号航空母舰将于本月15日驶入釜山港，满载排水量达10万吨，长333米、宽77米，被称为“海上军事基地”。</p>
                <p>据报道，“关键决断”将持续至本月24日，为了参加此次演习，美国“卡尔·文森”号航空母舰、F-35B隐形战机等美国战略武器将陆续抵韩，这些武器将重点进行先发制人打击训练。</p>
                <p>“卡尔·文森”号航空母舰将于本月15日驶入釜山港，满载排水量达10万吨，长333米、宽77米，被称为“海上军事基地”。</p>
                <p>据报道，“关键决断”将持续至本月24日，为了参加此次演习，美国“卡尔·文森”号航空母舰、F-35B隐形战机等美国战略武器将陆续抵韩，这些武器将重点进行先发制人打击训练。</p>
                <p>“卡尔·文森”号航空母舰将于本月15日驶入釜山港，满载排水量达10万吨，长333米、宽77米，被称为“海上军事基地”。</p>
                <p>据报道，“关键决断”将持续至本月24日，为了参加此次演习，美国“卡尔·文森”号航空母舰、F-35B隐形战机等美国战略武器将陆续抵韩，这些武器将重点进行先发制人打击训练。</p>
                <p>“卡尔·文森”号航空母舰将于本月15日驶入釜山港，满载排水量达10万吨，长333米、宽77米，被称为“海上军事基地”。</p>
            </div>
            <!---这个东西后期再商榷需不需要我觉得是不需要的~--->
            <!--<div class="right-drag drag-btn"></div>-->
            <!--<div class="bottom-drag drag-btn"></div>-->
            <!--<div class="right-bottom-drag"><i class="iconfont icon-xiejiantou"></i></div>-->
        </div>
    </div>
</template>
<script>

    import vFooter from  "./components/common/footer.vue";
    import vFavorite from "./components/common/favorite.vue";
    import vMain from './components/page/main.vue'
    import $ from 'jquery';

export default {

    data () {
        return {
            positionLeft: 60
        }
    },
    components:{
        vFooter,vFavorite,vMain
    },
    methods:{
        changePositionLeft:function(msg){
            this.positionLeft = this.positionLeft==60?0:60;
        },
        changeIFramePosition:function(){
            var obj = document.getElementById("iFrame-show-1");
            var objTitle = obj.querySelector(".iFrame-show-title");
            var dragging = false;
            objTitle.onmousedown = function(event){
                dragging = true;
                var objCurrentPositionLeft = obj.offsetLeft+obj.style.width/2;
                var objCurrentPositionTop = obj.offsetTop+obj.style.height/2;
                var pageX = event.pageX;
                var pageY = event.pageY;
                this.onmousemove = function(event){
                    if(dragging){
                        var newPageX = event.pageX;
                        var newPageY = event.pageY;

                        var newPositionLeft = objCurrentPositionLeft + newPageX - pageX;
                        var newPositionTop  = objCurrentPositionTop + newPageY -pageY;

                        console.log(newPositionLeft)

                        obj.style.left = newPositionLeft+"px";
                        obj.style.top = newPositionTop+"px";
                    }
                }
            }
            objTitle.onmouseup = function(){
                dragging = false;
            }
        },
        windowClose:function(){
            $(event.currentTarget).parents(".iFrame-show").remove()
        },
        windowMax:function(){
            var parentNode = $(event.currentTarget).parents(".iFrame-show");
            if( parentNode.width() > 1100 ){
                parentNode.css({
                    left:"50%",
                    top:"50%",
                    width:1100,
                    height:700,
                    transform:"translate(-50%,-50%)"
                })
            }else{
                parentNode.css({
                    left:this.positionLeft,
                    top:0,
                    width:$(window).width()-this.positionLeft,
                    height:$(window).height()-40,
                    transform:"translate(0,0)"
                })
            }
        }
    },
    mounted(){
        document.oncontextmenu = function(){return false};
        this.changeIFramePosition();
    }
}
</script>
