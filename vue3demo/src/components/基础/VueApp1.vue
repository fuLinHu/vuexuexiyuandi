<template>
    <div>
        {{message}}
        <input @click="add" type="button" value="+" />
        <input type="text" :value="sum" />
        <input @click="sub" type="button" value="-" />
    </div>
</template>

<script>
    const data = {
        message:"hello world vue!",
        sum:0,
        min:0,
        max:10
    }
    export default {
        name: "VueApp",
        data(){
            return data;
        },
        methods:{
            add(){
                this.sum>=10?this.sum=10: this.sum++
            },
            sub(){
                this.sum<=0?this.sum=0: this.sum--
            }
        }
    }
</script>

<style scoped>

</style>