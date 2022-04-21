<template>
  <h4>点我求和:{{sum}}</h4>
  <button @click="sum++">点我++</button>
  <br>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}K</h2>
  <h2 v-show="person.car">座驾信息：{{person.car}}</h2>

  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
  <br>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人添加一台车</button>
  <button @click="person.car.name+='!'" v-show="person.car">换车名</button>
  <button @click="changePrice" v-show="person.car">换价钱</button>


</template>

<script>
import {reactive, ref,  toRefs, toRaw, markRaw} from 'vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Demo',
  setup(){
    //数据
    let sum = ref(0)
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
    //方法
     function showRawPerson(){
      const p = toRaw(person)
       p.age++
       console.log(p)
      //  const s = toRaw(sum)
      //  console.log(s)
    }

    function addCar(){
      let car = {name:'奔驰', price:40}
      person.car = markRaw(car)
    }
    function changePrice(){
      person.car.price++
      console.log(person.car.price)
    }
    //返回一个对象（常用）
    return {
      sum,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar,
      changePrice
    }
  }
}
</script>

