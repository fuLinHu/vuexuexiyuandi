<template>
    <div>
      <div>这是跟组件</div>
        <HelloWorld></HelloWorld>
    </div>
</template>

<script>
    import HelloWorld from "./HelloWorld"

    const data = {

    }
    export default {
        name: "VueApp",
        data(){
            return data;
        },
        methods:{

        },
        components:{
            HelloWorld
        }
    }
</script>

<style scoped>

</style>