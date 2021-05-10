<template>
    <div>
        <header>
          头部
        </header>
        <div class="left">
            <div class="box">
                {{num}}
            </div>
            <Son></Son>

        </div>
        <div class="right">
            <Son1></Son1>
        </div>
        <footer>
            脚部
        </footer>
    </div>
</template>

<script>
    import Son from "./Son";
    import Son1 from "./Son1";


    const data = {
        mes:"这是父组件得数据",
        num:0
    }
    export default {
        name: "VueApp",
        data(){
            return data;
        },
        methods:{
            parentFucntion(num){

                this.num+=num;
            }
        },
        components:{
            Son,
            Son1
        }
    }
</script>

<style scoped>
    .box{
        background-color: red;
        width: 20px;
        height: 20px;
    }
    header{
        width: 800px;
        height: 100px;
        background-color: #888888;
    }
    .left{
        width: 400px;
        height: 300px;
        background-color: #42b983;
        margin: 0px;
    }
    .right{
        width: 400px;
        height: 300px;
        background-color: #42b983;
        position: relative;
        top: -300px;
        left: 400px;
        margin-left: 2px;
    }
    footer{
        position: relative;
        width: 800px;
        height: 100px;
        background-color:blue;
        top: -300px;
    }
</style>