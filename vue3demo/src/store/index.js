import {createStore} from "vuex";

export  default createStore({
    state:{
        num:0,
        dnum:0,
        paramnum:0,
        artList:[{name:'java',price:20},{name:'java1',price:22},{name:'java2',price:25}]
    },
    mutations:{
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
        }
    },
    getters:{
        vuexcomputers(state){
            return state.artList.filter((v)=>v.price>20)
        },
        vuexcomputerscall(state,getters){
            return getters.vuexcomputers.reduce((v0,v1)=>v0+=v1.price,0)
        },
        vuexcomputersParam(state,getters){
            // return (a,price)=>{
            //      return getters.vuexcomputers.filter((v)=>v.price>price).reduce((v0,v1)=>v0+=v1.price,0)+"======"+a
            // }
            //简写方式
            return (a,price)=> getters.vuexcomputers.filter((v)=>v.price>price).reduce((v0,v1)=>v0+=v1.price,0)+"======"+a
        }
    },
    actions:{

    },
    modules:{

    }
})