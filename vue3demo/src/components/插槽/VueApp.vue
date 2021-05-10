<template>
    <div>
        <header>
          头部
        </header>
        <div class="left">
            <Son></Son>
        </div>
        <div class="right">
            <Son1>这是第一个插槽</Son1>
            <hr/>
            <Son1>这是第二个插槽</Son1>
            <hr/>
            <Son1></Son1>
            <hr/>
            <Son1>
                <template #one="sendDataBySolt" > <!--简写方式-->
                    【{{sendDataBySolt.slotdata.name}}】
                    这个是具名 one 插槽<br/>
                </template>
                <template v-slot:two="sendDataBySolt" >
                    【{{sendDataBySolt.slotdata.age}}】
                    这个是具名 two 插槽<br/>
                </template>
                <template v-slot:default="sendDataBySolt" >
                    【{{sendDataBySolt.slotdata.hegiht}}】
                    这个是不具名 default 插槽<br/>
                </template>
            </Son1>
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