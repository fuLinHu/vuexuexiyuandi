<template>
    <div>
        {{mes}}
        <hr/>
        <ul>
            <li v-for="(v,index) in articles" :key="index" >{{v.title}}</li>
        </ul>
        <div>
            <grand-son>

            </grand-son>
        </div>
    </div>
</template>

<script>
    import GrandSon from "./GrandSon";
    import axios from "axios";
    export default {
        name: "HelloWorld",
        data(){
            return{
                mes:"这是一个son组件",
                myGrandSonData:"",
                num:0,
                articles:[]
            }
        },
        components:{
            GrandSon
        },
        props:{
        },
        methods:{
            add(){
                this.num++
            }
        },
        created() {
            axios.get('http://jsonplaceholder.typicode.com/posts').then((rej)=>{
                console.log(rej.data);
                this.articles = rej.data;
            }).catch((error)=>{
                console.log(error);
            })
            console.log("son 2==创建实完成调用created")
        },
        mounted() {
            console.log("son 4==模板编译之后mounted")
        },
        beforeUpdate() {
            console.log("son 5==模板更新之前beforeUpdate")
        },
        updated() {
            console.log("son 6==模板更新完成updated")
        }

    }
</script>

<style scoped>  /*scoped 只在本组件使用  否则是全局*/
 .box{
     height: 20px;
     background-color: red;
 }
</style>