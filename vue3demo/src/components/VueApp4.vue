<template>
    <div>
      总价：<h1>{{totalpricce}}</h1>
      总价：<h1>{{totalpricce}}</h1>
      总价：<h1>{{totalpricce}}</h1>
      总价：<h1>{{totalpricce}}</h1>
       <hr/>
        总价：<h1>{{totalpricceFun()}}</h1>
        总价：<h1>{{totalpricceFun()}}</h1>
        总价：<h1>{{totalpricceFun()}}</h1>
        总价：<h1>{{totalpricceFun()}}</h1>
    </div>
</template>

<script>
    /*计算属性是有缓存的，而方法是没有缓存的*/
    const data = {
        smail:[
            {name:"铅笔",price:20},
            {name:"铅笔1",price:25},
            {name:"铅笔2",price:23},
            {name:"铅笔3",price:21}
        ]
    }
    export default {
        name: "VueApp",
        data(){
            return data;
        },
        computed:{ //计算属性
            totalpricce:{
                get(){
                    return this.smail.reduce((pre,curr)=>{
                        console.log("这个是计算属性");
                        return pre+=curr.price
                    } ,0)
                }
            }
        },
        methods:{
            totalpricceFun(){
               return  this.smail.reduce((pre,curr)=>{
                    console.log("这个是方法");
                    return  pre+=curr.price
                },0)
            }
        }
    }
</script>

<style scoped>

</style>