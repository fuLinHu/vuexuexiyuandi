<template>
    <div>
        <header>
          头部
        </header>
        <div class="left">
            <Son></Son>
            <keep-alive>
                <Son v-if="flag"></Son>
            </keep-alive>

        </div>
        <div class="right">
            <ul>
                <li v-for="(v,index) in articles" :key="index" >{{v.title}}</li>
            </ul>
        </div>
        <footer>
            脚部
        </footer>
    </div>
</template>

<script>
    import Son from "./Son";
    //import Son1 from "./Son1";
    //import axios from  "axios";

    import {get} from "../commonjs/Request"


    const data = {
        mes:"这是父组件得数据",
        num:0,
        flag:true,
        articles:[]
    }
    export default {
        name: "VueApp",
        data(){
            return data;
        },
        methods:{
            destory(){
                this.flag=!this.flag
            }
        },
        components:{
            Son
        },
        mounted() {
            /*axios.get('http://jsonplaceholder.typicode.com/posts').then((rej)=>{
                console.log(rej.data);
                this.articles = rej.data;
            }).catch((error)=>{
                console.log(error);
            })*/
           /* axios.get('http://jsonplaceholder.typicode.com/posts',{
                params:{
                    userId:5
                }
            }).then((rej)=>{
                console.log(rej.data);
                this.articles = rej.data;
            }).catch((error)=>{
                console.log(error);
            })*/
            get("",{params:{userId:5}}).then((rej)=>{
                console.log(rej.data);
                this.articles = rej.data;
            }).catch((error)=>{
                console.log(error);
            })
           /* axios.post('https://jsonplaceholder.typicode.com/posts',{
                u:'www.tiger.com'
            }).then((rej)=>{
                console.log(rej);
            }).catch((error)=>{
                console.log(error);
            })*/

            console.log("4==模板编译之后mounted")
        }

    }
</script>

<style scoped>
    .box{
        background-color: red;
        width: 20px;
        height: 20px;
    }
    header{
        width: 800px;
        height: 100px;
        background-color: #888888;
    }
    .left{
        width: 400px;
        height: 300px;
        background-color: #42b983;
        margin: 0px;
    }
    .right{
        width: 400px;
        height: 300px;
        background-color: #42b983;
        position: relative;
        top: -300px;
        left: 400px;
        margin-left: 2px;
    }
    footer{
        position: relative;
        width: 800px;
        height: 100px;
        background-color:blue;
        top: -300px;
    }
</style>