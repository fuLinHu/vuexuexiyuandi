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
        <input type="button" value="子数据传递给父" @click="sonSenDatatoParent(2)">
        <di>
            <grand-son  @grandSonFunction="mySonsendData">

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
           /* parentmes:{
                type:String,
                default:"默认父组件得数据",
                required:true
            },
            arrObject:{
                type: Array
            }*/
        },
        methods:{
            sonSenDatatoParent(num){
                this.$emit('parentFun',num)
            },
            mySonsendData(args){
                this.myGrandSonData=args;
                console.log(args);
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