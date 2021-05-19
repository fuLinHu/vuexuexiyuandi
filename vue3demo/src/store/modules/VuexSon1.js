export default {
    state(){
        return{
            son:{
                name:'sonName',
                age:10
            },
            count:1
        }
    },
    getters:{
        sonIntro(state,getter,rootState){
            return state.son.name+" ::"+ state.son.age+" :: "+getter.son+" :: "+JSON.stringify(rootState.artList)
        },
        son(state){
            return state.count*20;
        }
    },
    mutations:{
        changeSon(state,payload){
            state.son=payload;
        }
    },
    actions:{
        sonGetRemote(context){
            console.log(context);
        }
    }
}