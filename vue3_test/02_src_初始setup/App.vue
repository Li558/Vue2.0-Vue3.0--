<template>
  <h1>我是APP组件</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <button @click="sayHello">说话</button>
  <button @click="test1">说话1</button>

  <br>
  <button @click="sayWelocme">说话</button>
  <button @click="test1">说话</button>

</template>

<script>
import {h} from 'vue'
export default {
  name: 'App',
  //此处测试一下setup  暂时不考虑响应式的问题
  setup (){
    //数据
    let name = '张山'
    let age = 18

    //方法
    function sayHello(){
      alert(`我叫${name}, 我${age}岁，你好啊！`)
    }
    function test1(){
      console.log(this.sex)
      console.log(this.name)
      console.log(this.age)
    }
    //返回一个对象(常用)
    return {
      name,
      age,
      sayHello,
      test1
    }

    //返回一个函数（渲染函数）
    // return ()=> h('h1', '尚硅谷')
  },
  data(){
    return {
      sex: '男'
    }
  },
  methods:{
    sayWelocme(){
      alert('欢饮来到尚硅谷学习')

    },
    test1(){
      console.log(this.sex)
      console.log(this.name)
      console.log(this.age)
    }
  },
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
