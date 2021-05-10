<template>
    <div>
        {{mes}}
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        data(){
            return{
                mes:"这是一个第二个son组件"
            }
        },
        components:{
        }

    }
</script>

<style scoped>  /*scoped 只在本组件使用  否则是全局*/

</style>