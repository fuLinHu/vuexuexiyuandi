import {createStore} from "vuex";

import actions from "./actions"

import mutations from "./mutations"

import getters from "./getters"

import VuexSon1 from "../store/modules/VuexSon1"

export  default createStore({
    state(){
        return {
            num:0,
            dnum:0,
            paramnum:0,
            artList:[{name:'java',price:20},{name:'java1',price:22},{name:'java2',price:25}],
            count:0,
            list:[]
        }
    },
    mutations,
    getters,
    actions,
    modules:{
        VuexSon1
    }
})