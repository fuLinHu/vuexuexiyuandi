<!--事件绑定以及事件修饰符-->
<template>
    <div>
        <input type="button" value="点击事件不带参数" @click="add">
        <input type="button" value="点击事件带参" @click="up(name,age,$event)">
        <div class="three" @click.capture="three">  <!--时间捕捉-->
            three
            <div class="two" @click="two">
                two
                <div class="one" @click.stop="one">  <!--阻止冒泡-->
                    one
                </div>
            </div>
        </div>
        <hr/>
        <a href="https://www.baidu.com/" @click.prevent="prevent">阻止默认事件</a>
        <hr/>
        <input type="button" value="once执行一次" @click.once="one">
    </div>
</template>

<script>
    const data = {
        name:"这是一个参数",
        age:20
    }
    export default {
        name: "VueApp",
        data(){
            return data;
        },
        methods:{
            add(first){
                console.log(first);
            },
            up(name,age,e){
                console.log(name);
                console.log(age);
                console.log(e);
            },
            one(){
                console.log("111111");
            },
            two(){
                console.log("222222");
            },
            three(){
                console.log("333333");
            },
            prevent(){
                alert("阻止默认事件")
            }
        }
    }
</script>

<style scoped>
   .one{
       background-color: red;
   }
   .two{
       background-color: blue;
   }
   .three{
       background-color: yellow;
   }
</style>