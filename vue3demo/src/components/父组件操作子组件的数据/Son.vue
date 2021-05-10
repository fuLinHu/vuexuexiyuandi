<template>
    <div>
        {{mes}}
        <br>
        {{parentmes}}
        <hr/>
        <!--<ul>
            <li v-for="(v,index) in arrObject" :key="index">
                {{v}}
            </li>
        </ul>-->
        <div class="box">
            {{myGrandSonData}}
        </div>
        <hr>
        <input type="button" value="子组件操作父组件数据" @click="sonSenDatatoParent()">
        <di>
            <grand-son>

            </grand-son>
        </di>
    </div>
</template>

<script>
    import GrandSon from "./GrandSon";
    export default {
        name: "HelloWorld",
        data(){
            return{
                mes:"这是一个son组件",
                myGrandSonData:""
            }
        },
        components:{
            GrandSon
        },
        props:{
        },
        methods:{
            sonSenDatatoParent(arg){
                this.mes=arg;
                //this.$parent.num+=2  直接操作父组件的data数据
                //this.$parent.parentFucntion(3); 直接操作父组件的 method
            }
        }

    }
</script>

<style scoped>  /*scoped 只在本组件使用  否则是全局*/
 .box{
     height: 20px;
     background-color: red;
 }
</style>