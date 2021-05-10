<template>
    <div>
        <input type="button" value="数据增加++" @click="add">
        {{num}}
        {{mes}}
        <hr/>
        <div>
            <grand-son>

            </grand-son>
        </div>
    </div>
</template>

<script>
    import GrandSon from "./GrandSon";
    export default {
        name: "HelloWorld",
        data(){
            return{
                mes:"这是一个son组件",
                myGrandSonData:"",
                num:0
            }
        },
        components:{
            GrandSon
        },
        props:{
        },
        methods:{
            add(){
                this.num++
            }
        },
        beforeCreate() {
            console.log("Son_1==创建实例之前调用beforeCreate")
        },
        created() {
            console.log("Son_2==创建实完成调用created")
        },
        beforeMount() {
            console.log("Son_3==模板编译之前beforeMount")
        },
        mounted() {
            console.log("Son_4==模板编译之后mounted")
        },
        beforeUpdate() {
            console.log("Son_5==模板更新之前beforeUpdate")
        },
        updated() {
            console.log("Son_6==模板更新完成updated")
        },
        beforeUnmount() {
            console.log("Son_7==实例销毁之前调用beforeUnmount")
        },
        unmounted() {
            console.log("Son_8==实例销毁之后调用unmounted")
        },
        activated() {
            console.log("Son_9==通过keep-alive 缓存之前调用 activated")
        },
        deactivated() {
            console.log("Son_10==缓存数据恢复调用 deactivated")
        }

    }
</script>

<style scoped>  /*scoped 只在本组件使用  否则是全局*/
 .box{
     height: 20px;
     background-color: red;
 }
</style>