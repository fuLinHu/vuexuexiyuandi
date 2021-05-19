export default {
    sub(state){
        state.dnum--
    },
    add(state){
        state.dnum++
    },
    subparam(state,param){  //一共两个参数  第一个是程序默认的 state ，第二个是  自定义的参数，当传递多个参数的时候  可以把参数封装成一个对象
        console.log(param);
        state.paramnum-=(param.num1+param.num2);
    },
    addparam(state,param){
        console.log(param);
        state.paramnum+=(param.num1+param.num2);
    },
    increment (state) {
        state.count++
    },
    remote(state,list){
        state.list = list
    }
}