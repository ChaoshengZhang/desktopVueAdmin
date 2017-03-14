var appMethods =  {

    handleWindow(item,key,type){

        switch (type){
            case "min":
                min();
                break;
            case "max":
                max();
                break;
            case "show":
                show();
                break;
            case "close":
                close();
                break;

        }

        function min(){
            $("#"+item.id).animate({
                left:"60px",
                top: $(window).height()-40,
                width:"0",
                height:"0",
                opacity:0
            },300)
        };
        function max(){
            if ($("#"+item.id).width() > 1100) {
                $("#"+item.id).animate({
                    left:this.commonLeft,
                    top: this.commonTop,
                    width:"1100px",
                    height:"700px"
                },300);
                this.windowList[key].style.left = this.commonLeft;
                this.windowList[key].style.top = this.commonTop
                this.windowList[key].style.width = "1100px"
                this.windowList[key].style.height = "700px"

            } else {
                $("#"+item.id).animate({
                    left:this.positionLeft,
                    top: 0,
                    width:$(window).width() - this.positionLeft,
                    height:$(window).height() - 40
                },300)
                this.windowList[key].style.left = this.positionLeft+"px";
                this.windowList[key].style.top = 0
                this.windowList[key].style.width = $(window).width() - this.positionLeft+"px"
                this.windowList[key].style.height = $(window).height() - 40+"px"
            }
        };
        function show(){
            $(".iFrame-show").css("z-index","98")
            $("#"+item.id).css("z-index","102")
            $("#"+item.id).animate({
                left:item.style.left,
                top: item.style.top,
                width:item.style.width,
                height:item.style.height,
                opacity:1
            },300)
        };
        function close(){
            $("#"+item.id).animate({
                left:"60px",
                top: $(window).height()-40+"px",
                width:"0",
                height:"0",
                opacity:0
            },300,function(){
                $("#"+item.id).remove();
            })
            this.windowList.splice(key,1)
        }
    },
    changePositionLeft(msg){
        this.positionLeft = this.positionLeft == 60 ? 0 : 60;
    },
    iFrameDrag(){

    }

}