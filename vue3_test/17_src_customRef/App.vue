<template>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>

<script>
import {ref, customRef} from 'vue'

export default {
  name: 'App',
  setup(){
    //自定义ref----myRef
    function myRef(value, delay){
      let timer
      return  customRef((track, trigger)=>{
          return {
            get(){
              console.log(`有人从myRef这个容器读取数据，我把${value}给他了`)
              track()//通知Vue追踪value的变化（提前跟get商量一下，让他认为这个value有用的）
              return value
            },
            set(newValue){
              console.log(`有人从myRef这个容器中数据修改了：${newValue}`)
              clearInterval(timer)
              timer = setTimeout(()=>{
                value = newValue
                trigger()//通知Vue重新解析模板
              },delay)
            },
          }
      })


    }
    // let keyWord = ref('hello')//使用Vue提供的ref
    let keyWord = myRef('hello', 500)//使用程序员自定义的ref


    return {keyWord}
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
