<template>
    <div>
      {{mess}}
        <hr/>
        <input type="button" value="孙子数据传递给父" @click="sonSenDatatoParent(mess)">
        <ul>
            <li v-for="(v,index) in grandson" :key="index">
                {{v}}
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: "OneButton",
        data(){
            return {
                mess:"这是一个孙子组件！"
            }
        },
        props:{
            grandson:{
                type:Array
            }
        },
        methods:{
            sonSenDatatoParent(){
                this.$emit("grandSonFunction",this.mess)
            }
        }
    }
</script>

<style scoped>

</style>