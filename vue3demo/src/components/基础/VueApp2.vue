<template>
    <!--插值和指令-->
    <div>
        {{msg}}
        <br>
        {{msg +"  "+msg}}
        <h1 v-pre> {{msg}}</h1> <!--标签内得数据保持原型 -->
        <h1 v-once> {{num}}</h1><!--数据只第一次显示，不响应式-->
        <h1> {{num}}</h1>
        <h1 v-text="text"></h1>
        <h1 v-html="text"></h1>
        <input type="button" value="测试once" @click="num++">
    </div>
</template>

<script>
    const data = {
        msg:"这是个插值！！",
        num: 10,
        text:'<h1> hello </h1>'
    }
    export default {
        name: "VueApp",
        data(){
            return data;
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>