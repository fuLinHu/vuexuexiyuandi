<template>
    <div>
        <header>
          头部
        </header>
        <div class="left">
            <Son :parentmes="mes" :arrObject="arrObject"></Son>
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
        arrObject:[1,2,3,4]
    }
    export default {
        name: "VueApp",
        data(){
            return data;
        },
        methods:{

        },
        components:{
            Son,
            Son1
        }
    }
</script>

<style scoped>
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