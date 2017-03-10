<template>
    <div id="app">
        <p>{{msg}}</p>
    </div>
</template>
<script>
export default {
    data () {
        return {
            msg: 'Welcome to Your Vue.js App!不要闪退！'
        }
    }
}
</script>

<style rel="stylesheet/scss" scoped lang="scss">
    body,html{
        height:100%;
        overflow: hidden;
    }
    body{
        background: url("../assets/images/bg.jpg") no-repeat;
        background-size: cover;
    }
    #app{
        font-size: 36px;
        text-align: center;
        font-family: Verdana,"Microsoft yahei";
        p{
            color:red;
        }
    }
</style>
