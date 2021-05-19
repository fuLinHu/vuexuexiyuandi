<template>
    <div id="nav">

        <input value="跳转到首页" type="button" @click="toHome">
        <router-link to="/home">测试重定向</router-link>|
        <router-link to="/">首页</router-link>|
        <router-link to="/about">关于我们</router-link>|
        <router-link to="/user">个人中心</router-link>|
        <router-link to="/intro">简介</router-link>|
        <router-link to="/vuex">test Vuex</router-link>
        <hr>
        vuex全局数据：{{$store.state.num}}
    </div>
    <hr/>

    <div class="home">
        <router-view name="Home"></router-view> <!--name="Home" 这个是给 router-view起一个名称，路由可以根据这个名称展示在这个位置-->
    </div>
    <div class="about">
        <router-view name="About"></router-view>
    </div>
    <div class="user">
        <router-view name="User"></router-view>
    </div>
    <div class="introduce">
        <router-view ></router-view>  <!--这个是没有名称的视图器 所有没有名称的视图展示在这个位置-->
    </div>


</template>

<script>
    export default {
        name: "App",
        methods:{
            toHome(){
                this.$router.push('/')
            }
        },
        data(){
            return {
                num:0
            }
        }
    }
</script>

<style scoped>
    #nav a.router-link-exact-active{
        color:blue;
    }
    .home{
        background-color: blue;
        width: 800px;
        height: 150px;
    }
    .about{
        background-color: beige;
        width: 800px;
        height: 150px;
    }
    .user{
        background-color: #42b983;
        width: 800px;
        height: 150px;
    }
    .introduce{
        background-color:darkseagreen;
        width: 800px;
        height: 150px;
    }
</style>