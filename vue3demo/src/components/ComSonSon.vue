<template>
    <div>
        组合api传递数据测试son-son
        <br>
        这是父亲传递过来的数据：{{myage}}
        子改变父传递的数据：<input v-model="myage">
    </div>
</template>

<script>
    import {inject,ref,provide} from "vue"
    export default {
        name: "ComSonSon",
        setup(){
            let myage = inject("myAge")
            let sonsonData = ref("son-son data");
            provide("sonsonData",sonsonData)
            return{
                myage,
                sonsonData
            }
        }
    }
</script>

<style scoped>

</style>