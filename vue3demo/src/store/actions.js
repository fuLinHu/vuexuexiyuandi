import {get} from "../commonjs/Request";

export default {
    getDataFromRemote(context,param){
        console.log(param);
        get("",{}).then((reg)=>{
            context.commit('remote',reg) ;
        })

    },
    incrementAction(context){
        context.commit('increment')
    }
}