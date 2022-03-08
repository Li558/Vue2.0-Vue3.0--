//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//完整引入
// import ElementUI from 'element-ui'
//引入ElementUI样式
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI);
import { Button, Row, DatePicker } from 'element-ui';
Vue.component('atguigu-button', Button);
Vue.component('atguigu-row', Row);
Vue.component('atguigu-datePicker', DatePicker);

/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

//----------------------------------------------------------------

//关闭Vue的生产提示
Vue.config.productionTip = false
//创建vm
new Vue({
	el:'#root',
	render: h => h(App),
})