<template>
    <div>
      {{mess}}
        <hr/>
        <input type="button" value="孙子组件操作爷爷组件数据" @click="sonSenDatatoParent(mess)">
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
                //this.$parent.$parent.num+=2  //直接操作父组件的data数据
                //this.$parent.$parent.parentFucntion(3); //直接操作父组件的 method
                this.$root.parentFucntion(3) //等价余this.$parent.$parent.parentFucntion(3)
            }
        }
    }
</script>

<style scoped>

</style>