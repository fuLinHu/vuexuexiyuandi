<template>
    <div>
        <header>
          头部
        </header>
        <div class="left">
            <Son></Son>
            <keep-alive>
                <Son v-if="flag"></Son>
            </keep-alive>

            <input type="button" value="销毁实例" @click="destory">
        </div>
        <div class="right">
        </div>
        <footer>
            脚部
        </footer>
    </div>
</template>

<script>
    import Son from "./Son";
    //import Son1 from "./Son1";


    const data = {
        mes:"这是父组件得数据",
        num:0,
        flag:true
    }
    export default {
        name: "VueApp",
        data(){
            return data;
        },
        methods:{
            destory(){
                this.flag=!this.flag
            }
        },
        components:{
            Son
        },
        beforeCreate() {
            this.$nextTick(()=>{
                console.log("#################延迟调用")
            })
            console.log("1==创建实例之前调用beforeCreate")
        },
        created() {
            console.log("2==创建实完成调用created")
        },
        beforeMount() {
            console.log("3==模板编译之前beforeMount")
        },
        mounted() {
            console.log("4==模板编译之后mounted")
        },
        beforeUpdate() {
            console.log("5==模板更新之前beforeUpdate")
        },
        updated() {
            console.log("6==模板更新完成updated")
        },
        beforeUnmount() {
            console.log("7==实例销毁之前调用beforeUnmount")
        },
        unmounted() {
            console.log("8==实例销毁之后调用unmounted")
        },
        activated() {
            console.log("9==通过keep-alive 缓存之前调用 activated")
        },
        deactivated() {
            console.log("10==缓存数据恢复调用 deactivated")
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