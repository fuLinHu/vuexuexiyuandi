<template>
    <div>
        关于我们(测试传参)
        <ul>
            <li><router-link to="/about/aboutsonparam/2">路径传参</router-link></li>
            <li><router-link :to="{path:'/about/aboutsonparam',query:param}">query传参</router-link></li>
            <li><input type="button" value="编码式传参" @click="sendDataByButton"></li>
            <input type="button" value="+">{{}} <input type="button" value="--">
        </ul>
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name: "About",
        data(){
            return{
                param:{
                    name:'付林虎',
                    age:10
                }
            }
        },
        methods:{
            sendDataByButton(){
                this.$router.push({path:'/about/aboutsonparam',query:this.param})
            }
        },
        created() {
            //document.title="这是关于"
        }
    }
</script>

<style scoped>

</style>