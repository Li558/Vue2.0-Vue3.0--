<template>
  <h1>一个人的信息</h1>
  姓：<input v-model="person.firstName" type="text">
  名：<input v-model="person.lastName" type="text">
  <span>全名：{{ person.fullName }}</span>
  <br>
  全名: <input v-model="person.fullName" type="text">
</template>

<script>
import {computed, reactive} from 'vue'

export default {
  name: 'Demo',

  setup() {
    let person = reactive({
      firstName: '张',
      lastName: '三',
    })
    //计算属性  简写形式   没有考虑计算属性被修改的情况
    //  person.fullName = computed(()=>{return person.firstName +'-'+ person.lastName})
    //计算属性  完整写法   考虑读写
    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName
      },
      set(value) {
        const nameArr = value.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      }

    })

    //返回一个对象(常用)
    return {
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
