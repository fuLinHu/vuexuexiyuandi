import {createRouter,createWebHistory} from "vue-router"

import Home from "../views/Home"
import User from "../views/User"
import Introduce from "../views/Introduce"

const AboutSonParam = ()=>import('../views/aboutson/AboutSonParam');

const routes = [
    {
        path:"/vuex",
        name:'VUEX',
        component:()=>import('../views/TestVuex'),
        meta:{
            title:'VUEX'
        }
    },
     {
         path:"/",
         name:'Home',
         components:{
             Home  //具名视图器  对应 <router-view name="Home"></router-view> 中的name="Home"
         },
         meta:{
             title:'home'
         }
     },
    {
        path:"/home",
        name:'Home1',
        components:{
            Home  //具名视图器  对应 <router-view name="Home"></router-view> 中的name="Home"
        },
        //redirect:'/' //路径重定向
        redirect:{name:'About'}  // 用名字重定向
    },
    {
        path:"/about",
        name:'About',
        components:{About:()=> import('../views/About')}, //这种方式 是按需加载（懒加载）  将来打包的文件是独立的js，否则所有路由是在一起的
        //component:()=> import('../views/About') //这种方式 是按需加载（懒加载）  将来打包的文件是独立的js，否则所有路由是在一起的
        children:[
            {
                path: "aboutsonparam/:param",
                component:AboutSonParam,
                /*用的较少*/
                /*redirect:to=>{
                    return {
                        path:'/about/aboutsonparam',
                        query:{
                            name:"重定向-----",
                            age:to.params.param
                        }
                    }
                }*/
            },
            {
                path: "aboutsonparam",
                component:AboutSonParam
            }
        ]
        ,
        meta:{
            title:'about'
        }
    },
    {
        path:"/user",
        name:'User',
        alias:['/a','/b','/c'], //别名
        components:{
            User,
            Home
        },
        meta:{
            title:'user'
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
        ],
        meta:{
            title:'intro'
        }
    }
]


const  router = createRouter({
    history:createWebHistory(process.env.BASE_URL), //指定路由模式  这个是历史模式   还有 hash模式
    routes
})
//前置守卫
router.beforeEach((to,form)=>{
    console.log("beforeEach to::"+to.fullPath);
    console.log("beforeEach form::"+form.fullPath);
    //return false; //如果返回false则 所有路由都 失败不在跳转
    return true; //如果返回true则 通过
})
//后置钩子
router.afterEach((to,form,failure)=>{
    console.log("beforeEach to::"+to.fullPath);
    console.log("beforeEach form::"+form.fullPath);
    console.log(failure);
    document.title=to.meta.title
})
export default router

