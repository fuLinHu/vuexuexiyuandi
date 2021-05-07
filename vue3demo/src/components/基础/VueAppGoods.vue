<template>
    <div>
      <table>
          <tr>
              <th></th>
              <th>序号</th>
              <th>商品名称</th>
              <th>价格</th>
              <th>购买量</th>
              <th>操作</th>
          </tr>
          <tr v-for="(v,index) in goodsList" :key="v.id">
              <td><input type="checkbox" v-model="v.ifcheck" /></td>
              <td>{{v.id}}</td>
              <td>{{v.name}}</td>
              <td>{{v.price}}</td>
              <td>
                  <input type="button" value="+" @click="v.buynum++" >
                  {{v.buynum}}
                  <input type="button" value="-" @click="v.buynum--" :disabled="v.buynum<=0">
              </td>
              <td><a @click.prevent="del(index)" href="#">删除</a></td>
          </tr>
          <tr>
              <td colspan="3">总价</td>
              <td colspan="3">{{totalprice}}</td>
          </tr>
      </table>
    </div>
</template>

<script>
    const data = {
         goodsList:[
             {id:1,name:'java',price:20.00,buynum:0},
             {id:2,name:'python',price:22.00,buynum:0},
             {id:3,name:'go',price:23.00,buynum:0},
             {id:4,name:'c#',price:24.00,buynum:0}
         ]
    }
    export default {
        name: "VueApp",
        data(){
            return data;
        },
        methods:{
            del(index){
                this.goodsList.splice(index,1)
            }
        },
        computed:{
            totalprice:{
                get(){
                    let total = 0;
                    this.goodsList.forEach((v)=>{
                        if(v.ifcheck){
                            total+=v.price*v.buynum;
                        }
                    })
                    return total.toFixed(2);
                }
            }
        }
    }
</script>

<style scoped>
  table{
      border: black 1px solid;
  }
  td,th{
      border: 1px solid #888888;
      padding: 10px;
  }
</style>