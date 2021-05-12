<template>
    <div>首页</div>
    <h1>{{}}</h1>
</template>

<script>
    export default {
        name: "Home",
        created() {
            //document.title="这是home"
        },
        data(){
            return {
                num:0
            }
        }
    }
</script>

<style scoped>

</style>