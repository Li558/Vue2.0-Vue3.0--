<template>
  <h1>当前求和为{{sum}}</h1>
  <button @click="sum++">点我加1</button>
  <br>
  <h1>当前信息为{{msg}}</h1>
  <button @click="msg+='!'">修改信息</button>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>薪资：{{person.job.j1.salary}}k</h2>

  <button @click="person.name+= '~'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.j1.salary++">修改薪资</button>

</template>

<script>
import {ref,reactive, watch, watchEffect} from 'vue'

export default {
  name: 'Demo',
  setup() {
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name:'张三',
      age: 18,
      job:{
        j1:{
          salary:20
        }
      }
    })
    //监视
    // watch(sum, (newValue, oldValue) =>{
    //   console.log('sum的值变化了', newValue, oldValue)
    // })
    //
    watchEffect(()=>{
      const x1 = sum.value
      const x2 = person.job.j1.salary
      console.log('watchEffect所指定的回调函数执行了',x1,x2)
    })
    //返回一个对象(常用)
    return {
      sum,
      msg,
      person,
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
