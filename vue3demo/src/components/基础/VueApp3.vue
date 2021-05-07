<template>
    <div>
        <div :class="{one}">{{mes}}</div>
        <div :class="{two,one}">{{mes}}</div>
        <div :class="[array]">{{mes}}</div>
        <hr/>
        <div :title="mes">{{mes}}</div>
        <img :src="imgurl" width="100">
        <img :src="imgurl" :width="width">
        <a href="https://www.lmonkey.com/study/course"> 学习园地</a>
        <a :href="href"> 学习园地</a>
    </div>
</template>

<script>
    const data = {
        one:false,
        two:true,
        array:"array",
        box:"box",
        mes:"this is a test",
        imgurl:'https://cn.vuejs.org/images/logo.png',
        width:100,
        href:"https://www.lmonkey.com/study/course"
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
    .one {
        background-color: red;
        width: 300px;
        height: 30px;
    }
    .two {
        background-color: blue;
        width: 300px;
        height: 30px;
    }
    .array {
        background-color: yellow;
        width: 300px;
        height: 30px;
    }

    .box {
        background-color: yellow;
    }

</style>