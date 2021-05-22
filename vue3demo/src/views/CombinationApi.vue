<template>
    <div>
        test  combination api
        <hr>
<!--        属性：{{data.count}}-->
<!--        <br>-->
<!--        计算属性：{{data.double}}-->
<!--        <input type="button" value="+" @click="add">-->
        <CombinationApiSon :one="data.one" @snedtoParent="getfromson">
          <h1> 888888</h1>
        </CombinationApiSon>
</div>
</template>

<script>
    import {reactive,computed} from "vue";
    import CombinationApiSon from "./conbinationson/CombinationApiSon";
    export default {
        name: "CombinationApi",
        //setup 是再创建组件前创建的    所以没有this
        setup(){
            //这里可以随意生名变量  和方法


            //原生的变量  不是响应式的
            const data = reactive({
                count:3,
                double:computed(()=>{
                    return data.count*2
                }),
                one:'这是父组件传递过来的数据'
            })
            function add(){
                data.count++
            }

            //最终返回
            return {
                data,add
            }
        },
        components:{
            CombinationApiSon
        },
        methods:{
            getfromson(param){
                console.log(param);
            }
        }
    }
</script>

<style scoped>

</style>