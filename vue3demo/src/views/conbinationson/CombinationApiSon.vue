<template>
    <div>
        i am is  combination api son
        <hr>
        属性：{{data.count}}
        <br>
        计算属性：{{data.double}}
        <input type="button" value="+" @click="add">
        <br>
        <slot>
        </slot>
        <hr>
        原生属性再setup中式非响应的：{{a}}
        <br>
        ref函数包裹原生属性再setup中式是响应的：{{a1}}
        <input type="button" value="测试ref函数" @click="testRef">

    </div>
</template>

<script>
    import {reactive, computed, ref,readonly,isRef} from "vue";

    export default {
        name: "CombinationApi",
        //setup 是再创建组件前创建的    所以没有this
        //props 父组件传过来的属性
        //context上下文
        setup(props,context){
            //========================================
            let a ="原生的变量！不是响应式的"
            //将非对象转换为响应式
            let a1=ref('原生的变量！不是响应式的,但是用了ref函数以后 就是响应的了')
            //判断是不是  对象（响应的）
            isRef(a1)
            //如果声名对象类型我们用 reactive（响应式的）
            const data = reactive({
                count:3,
                double:computed(()=>{
                    return data.count*2
                })
            })

            let data1 = readonly(data); //将响应式的数据转化为非响应式的
            console.log(data1);
            //==========================================
            context.emit("snedtoParent","这是子组件传递给父组件的数据")
            console.log(props);
            console.log(context.slots.default());
            function add(){
                data.count++
            }
            function testRef(){
                a1.value='这个是点击事件以后修改的！ref包裹的'
                a = '这个是点击事件以后修改的！没用ref包裹的'
            }
            //====================================
            return {
                data,//也可以 把data解构 这样 可以直接用属性 count  不用data.count  但不能用 ...data解构 因为这样最后变成的非响应式的了  可以用  ...toRefs(data)
                add,
                a,
                a1,
                testRef
            }

        },
        props:{
            one:{
                type:String
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>