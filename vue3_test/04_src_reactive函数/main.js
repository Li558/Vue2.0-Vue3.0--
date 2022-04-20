//引入的不再是Vue构造函数，引入了一个名为createApp的工厂函数
import {createApp} from 'vue'
import App from './App.vue'

//创建实例对象---app（类似之前Vue2中的vm，但app比vm更轻）
const app = createApp(App)
console.log('@@@', app)
setTimeout(() => {
    //挂载
    app.mount('#app')
}, 1000)
// createApp(App).mount('#app')

/*const vm = new Vue({
    render: h => h(App)
})
vm.$mount('#app')*/