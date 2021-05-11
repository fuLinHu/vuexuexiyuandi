<template>
    <div>
        {{mes}}
        <span>
           <!-- <slot>如果不添加任何数据，则我是默认插槽数据</slot>--> <!--不具名插槽 其name默认为 default-->
            <slot :slotdata="user">如果不添加任何数据，则我是默认插槽数据</slot> <!--不具名插槽-->
            <slot name="one" :slotdata="user"></slot>
            <slot name="two" :slotdata="user"></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        data(){
            return{
                mes:"第二个son组件：",
                user:{
                    name:"付林虎",
                    age:10,
                    hegiht:181
                }
            }
        },
        components:{
        }

    }
</script>

<style scoped>  /*scoped 只在本组件使用  否则是全局*/

</style>