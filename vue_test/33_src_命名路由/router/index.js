//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/HomeName.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

//创建路由器
export default new VueRouter({
    routes:[
        // 一级路由
        {
            name:'guanyu',
            path: '/about',
            component:About
        },
        {
            path: '/home',
            component:Home,
            children:[
                { 
                    path:'news',
                    component:News,
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        { 
                            name:'xiangqing',
                            path:'detail',
                            component:Detail,
                            
                        }
                    ]

                }
            ]
        },

    ]
})

