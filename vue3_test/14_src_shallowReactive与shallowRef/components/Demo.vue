<template>
  <h4>当前x的值为:{{x.y}}</h4>
  <button @click="x.y++">点我x+1</button>
  <br>
  <h2>{{person}}</h2>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
<!--  <h2>薪资：{{salary}}K</h2>-->
  <h2>薪资：{{job.j1.salary}}K</h2>

  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
<!--  <button @click="salary++">涨薪</button>-->
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import {reactive, ref, toRef, toRefs, shallowReactive, shallowRef} from 'vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Demo',
  setup(){
    //数据

    // let person = shallowReactive({//自考虑第一层次的数据的响应式
    let person = reactive({
    name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })
    let x = shallowRef({
      y:0
    })
    console.log(x)
    //返回一个对象（常用）
    return {
      person,

      ...toRefs(person),
      x
    }
  }
}
</script>

