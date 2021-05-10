<template>
    <div>
      {{mess}}
        <hr/>
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
        }
    }
</script>

<style scoped>

</style>