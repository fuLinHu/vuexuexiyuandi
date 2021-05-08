<template>
    <div>
        {{mes}}
        <br>
        {{parentmes}}
        <hr/>
        <ul>
            <li v-for="(v,index) in arrObject" :key="index">
                {{v}}
            </li>
        </ul>
        <di>
            <grand-son :grandson="arrObject">

            </grand-son>
        </di>
    </div>
</template>

<script>
    import GrandSon from "./GrandSon";
    export default {
        name: "HelloWorld",
        data(){
            return{
                mes:"这是一个son组件"
            }
        },
        components:{
            GrandSon
        },
        props:{
            parentmes:{
                type:String,
                default:"默认父组件得数据",
                required:true
            },
            arrObject:{
                type: Array
            }
        }

    }
</script>

<style scoped>  /*scoped 只在本组件使用  否则是全局*/

</style>