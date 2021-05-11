<template>
    <div>
        简介
        <ul>
            <li><router-link to="/intro/list"  :class="{active:($route.fullPath=='intro/list'||$route.fullPath=='/intro')}" >列表</router-link></li>
            <li><router-link to="/intro/content">内容</router-link></li>
        </ul>
        <div>
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Introduce"
    }
</script>

<style scoped>
    a.router-link-exact-active{
        color:blue;
    }
    .active{
        background-color: red;
    }

</style>