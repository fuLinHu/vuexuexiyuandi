<template>
    <div>
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
                myGrandSonData:""
            }
        },
        components:{
            GrandSon
        },
        props:{
        },
        methods:{
        }

    }
</script>

<style scoped>  /*scoped 只在本组件使用  否则是全局*/
 .box{
     height: 20px;
     background-color: red;
 }
</style>