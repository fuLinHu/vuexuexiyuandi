<template>
    <div>
        测试 vuex
      <VuexSon :vuexNum="vuexNum"></VuexSon>
      <input type="button" value="+" @click="vuexNum++">
      <input type="button" value="-" @click="vuexNum--">
        <hr/>
        vuex全局数据：{{$store.state.num}}
        <input type="button" value="+" @click="$store.state.num++">
        <input type="button" value="-" @click="$store.state.num--">
        <hr/>
        vuex mutations全局数据：{{$store.state.dnum}}
        <input type="button" value="+" @click="add1">
        <input type="button" value="-" @click="sub1">
        <hr/>
        vuex mutations全局数据带参数：{{$store.state.paramnum}}
        <input type="button" value="+" @click="addparam">
        <input type="button" value="-" @click="subparam">
      <hr>
        vuex 计算属性：{{$store.getters.vuexcomputers}}
      <hr>
      vuex 计算属性 计算属性互相调用：{{$store.getters.vuexcomputerscall}}
      <hr>
      vuex 计算属性 带参数：{{$store.getters.vuexcomputersParam("fulinhu",24)}}
      <hr>
      <input type="button" value="测试action" @click="incrementAction">{{$store.state.count}}
      <hr>
      <input type="button" value="测试action" @click="remote">{{$store.state.list}}
       <!-- <input type="button" value="+" @click="addparam">
        <input type="button" value="-" @click="subparam">-->
    </div>
</template>

<script>
    import VuexSon from "../components/VuexSon";
    export default {
        name: "TestVuex",
        data(){
            return{
                 vuexNum:0
            }
        },
        methods:{
            add1(){
                this.$store.commit("add") //调用$store 中mutations的方法
            },
            sub1(){
                this.$store.commit("sub")
            },
            addparam(){
                this.$store.commit('addparam',{num1:2,num2:1})
            },
            subparam(){
              this.$store.commit('subparam',{num1:2,num2:1})
            },
            incrementAction(){
                this.$store.dispatch("incrementAction")
            },
            remote(){
              this.$store.dispatch("getDataFromRemote",{num1:2,num2:1})
            }
        },
        components: {VuexSon}
    }
</script>

<style scoped>

</style>