<template>
    <div>
        {{mes}}
        <OneButton></OneButton>
    </div>
</template>

<script>
    import OneButton from "./OneButton"  /*引入组件*/
    export default {
        name: "HelloWorld",
        data(){
            return{
                mes:"这是一个helloworld组件！"
            }
        },
        components:{
            OneButton  /*绑定组件*/
        }

    }
</script>

<style scoped>  /*scoped 只在本组件使用  否则是全局*/

</style>