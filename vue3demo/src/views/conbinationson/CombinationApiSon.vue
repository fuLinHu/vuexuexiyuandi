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
        <hr>
        firstname: <input type="text" v-model="data.firstName">
        lastname: <input type="text" v-model="data.lastName">
        <br>
        计算属性全名为：{{fullname}}
        <hr>
        测试watchbb
        <br>
        <input type="button" value="a++" @click="watcha++" />{{watcha}}
        <br>
        <input type="button" value="b++" @click="watch++"/>{{watchb}}
        <br>
        <input type="button" value="测试reactive数据1" @click="data.count++"/>{{data.count}}
        <input type="button" value="测试reactive数据2" @click="data.firstName+=(data.count++)"/>{{data.firstName}}
        <hr>
        <ComSon></ComSon>
        <hr>
        我的年纪：{{myAge}}
        <input type="text" v-model="myAge">
        <hr>
        这是子传递给父亲的数据(失败)：{{sonsonData}}
    </div>
</template>

<script>
    import {reactive, computed, ref, readonly, isRef, watch, provide, inject} from "vue";
    import ComSon from "../../components/ComSon";

    export default {
        name: "CombinationApi",
        components: {ComSon},
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
                }),
                firstName:"付",
                lastName:"临湖"
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
            //====== //计算属性====================================
            let fullname = computed(()=>{
                return data.firstName+"::"+data.lastName;
            })
            //====== //计算属性====================================
            //=============watch=======================
            let watcha=ref(1)
            let watchb=ref(2)
            console.log(watchb);
            watch(watcha,(watchanew,watchaold)=>{
                console.log("watcha变化了---watchanew:"+watchanew+"  watchaold:"+watchaold)
            },{immediate:true})  //immediate:true 代表初始化  的时候  会打印
            watch(data,(datanew,dataold)=>{ //data中的任何一个参数变化了就变化  datanew == dataold 都是最新数据

                console.log("watcha变化了---datanew:"+JSON.stringify(datanew)+"  dataold:"+JSON.stringify(dataold))
                console.log("reactive 数据data 变化了")
            })
            //=============watch=======================

            //=======数据传输 父组件传递到子组件====================//
            let myAge = ref(31);
            provide("myAge",myAge)
            let sonsonData = inject("sonsonData")
            console.log("sonsonData::"+sonsonData)
            //==================================================//


            return {
                data,//也可以 把data解构 这样 可以直接用属性 count  不用data.count  但不能用 ...data解构 因为这样最后变成的非响应式的了  可以用  ...toRefs(data)
                add,
                a,
                a1,
                testRef,
                fullname,
                watcha,
                watchb,
                myAge,
                sonsonData
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