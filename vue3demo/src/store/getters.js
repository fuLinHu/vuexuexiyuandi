export default {
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
}