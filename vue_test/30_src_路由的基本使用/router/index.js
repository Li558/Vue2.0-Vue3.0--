//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import About from '../components/About.vue'
import Hmoe from '../components/HomeName.vue'

//创建路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Hmoe
        }
    ]
})

