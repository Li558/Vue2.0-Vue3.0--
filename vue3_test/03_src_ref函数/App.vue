<template>
  <h1>我是APP组件</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>工作种类：{{job.type}}</h2>
  <h2>工作薪水：{{job.salary}}</h2>

  <button @click="changeInfo">修改人的信息</button>


</template>

<script>
import {ref} from 'vue'
export default {
  name: 'App',
  setup (){
    //数据
    let name = ref('张山')
    let age = ref(18)
    let job = ref({
      type:'前端工程师',
      salary:'30k'
    })
    //方法
    function changeInfo(){
      name.value = '李四'
      age.value = 48
      job.value.type = 'UI设计师'
      job.value.salary = 35

      // console.log(name, age)
    }

    return {
      name,
      age,
      job,
      changeInfo,
    }

    //返回一个函数（渲染函数）
    // return ()=> h('h1', '尚硅谷')
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
