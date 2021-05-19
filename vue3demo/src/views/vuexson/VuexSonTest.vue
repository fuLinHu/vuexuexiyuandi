<template>
    <div class="main">son 首页
        <hr>
        <input type="button" value="测试模块数据！" @click="changeSon">{{$store.state.VuexSon1.son}}
        <hr>
        测试getter:{{$store.getters.sonIntro}}
        <hr>
        <input type="button" value="测试调用getter！" @click="testGetter">{{son}}
    </div>

</template>

<script>

    export default {
        name: "VuexSonTests",
        data(){
            return{
                son:0
            }
        },
        methods:{
            changeSon(){
                this.$store.commit('changeSon',{name:'付林虎',age:30})
            },
            testGetter(){
                this.son=this.$store.getters.son
            }
        }
    }
</script>

<style scoped>
  .main{
      background-color: burlywood;
      width: 800px;
      height: 400px;
  }
</style>