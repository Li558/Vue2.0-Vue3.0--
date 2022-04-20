<template>
  <h1>一个人的信息</h1>
  <h2 v-show="person.name">姓名：{{person.name}}</h2>
  <h2 v-show="person.age">年龄：{{person.age}}</h2>
  <h2 v-show="person.sex">性别：{{person.sex}}</h2>
  <h2 >{{msg}}</h2>
  <h2 >{{school}}</h2>
  <button @click="test">测试触发一下Demo组件的Hello事件</button>

</template>

<script>
import { reactive} from 'vue'
export default {
  name: 'Demo',
  props: ['msg', 'school'],
  emits:['hello'],
  beforeCreate() {
    console.log('-----beforecreate-----')
  },
  setup (props, context) {
    console.log('------setup------', props)
    // console.log('------context------', context.attrs)//相当于Vue2中的$attrs
    // console.log('------context------', context.emit)//触发自定义事件的
    console.log('------context------', context.slots)//插槽

    //数据
    let person = reactive({
      name: '张三',
      age: 18,
    })
    function test(){
        context.emit('hello', 666)
    }
    //返回一个对象(常用)
    return {
      person,
      test
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
