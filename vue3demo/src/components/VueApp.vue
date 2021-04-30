<template>
    <div>
      <ul>
          <li v-for="b in books"  :key="b" >{{b}}</li>
      </ul>
      <hr/>
      <ul>
         <li v-for="(k,v,index) in booksobject"  :key="index" >{{index}}--{{k}}==={{v}}</li>
      </ul>
        <hr/>
        <ul>
            <li @mouseout="out(index)" @mouseenter="enter(index)"  :class="{inss:currentIndex==index}"  v-for="(v,index) in bookArray"  :key="index" >{{index}}--{{v.name}}--{{v.priice}}--{{v.title}}</li>
        </ul>
    </div>
</template>

<script>
    const data = {
        books:["java","php","javascript","python"],
        booksobject:{
            name:"java",
            priice:20,
            title:"java 是一门很好得语言"
        },
        bookArray:[
            {
                name:"java",
                priice:20,
                title:"java 是一门很好得语言"
            },
            {
                name:"python",
                priice:202,
                title:"python 是一门很好得语言"
            },
            {
                name:"go",
                priice:22,
                title:"go 是一门很好得语言"
            }

        ],
        currentIndex:-1
    }
    export default {
        name: "VueApp",
        data(){
            return data;
        },
        methods:{
            enter(obj){
                this.currentIndex = obj;
                console.log(obj);
            },
            out(obj){
                this.currentIndex = -1;
                console.log(obj);
            }
        }
    }
</script>

<style scoped>
    .inss{
        background-color: blue;
    }

</style>