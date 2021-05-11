import {createRouter,createWebHistory} from "vue-router"

import Home from "../views/Home"
// import About from "../views/About"
import User from "../views/User"
import Introduce from "../views/Introduce"

//import AboutSonParam from "../views/aboutson/AboutSonParam";

const AboutSonParam = ()=>import('../views/aboutson/AboutSonParam');

const routes = [
     {
         path:"/",
         name:'Home',
         components:{
             Home  //具名视图器  对应 <router-view name="Home"></router-view> 中的name="Home"
         }
     },
    {
        path:"/about",
        name:'About',
        components:{About:()=> import('../views/About')}, //这种方式 是按需加载（懒加载）  将来打包的文件是独立的js，否则所有路由是在一起的
        //component:()=> import('../views/About') //这种方式 是按需加载（懒加载）  将来打包的文件是独立的js，否则所有路由是在一起的
        children:[
            {
                path: "aboutsonparam/:param",
                component:AboutSonParam
            },
            {
                path: "aboutsonparam",
                component:AboutSonParam
            }
        ]
    },
    {
        path:"/user",
        name:'User',
        components:{
            User,
            Home
        }
    }
    ,
    {
        path:"/intro",
        name:'Introduce',
        component:Introduce,
        children:[
            {
                path:'',
                name:'defa',
                component:()=>import('../views/introchildrent/IntList')
            },
            {
                path:'list',
                name:'list',
                component:()=>import('../views/introchildrent/IntList')
            },
            {
                path: 'content',
                name:'content',
                component:()=>import('../views/introchildrent/Content')
            }
        ]
    }
]


const  router = createRouter({
    history:createWebHistory(process.env.BASE_URL), //指定路由模式  这个是历史模式   还有 hash模式
    routes
})

export default router

