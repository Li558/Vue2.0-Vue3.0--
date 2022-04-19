//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入
import VueRouter from 'vue-router'
//引入路由器
import router from './router'

//关闭Vue的生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(VueRouter)
//创建vm
new Vue({
    el: '#root',
    render: h => h(App),
    router: router
})