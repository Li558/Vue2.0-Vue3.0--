<template>
  <h1>当前求和为{{sum}}</h1>
  <button @click="sum++">点我加1</button>
  <br>


</template>

<script>
import {ref,onBeforeMount, onMounted,onBeforeUpdate, onUpdated,onBeforeUnmount,onUnmounted} from 'vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Demo',

  setup() {
    console.log('---setup---')
    let sum = ref(0)
    //通过组合式API的形式去适应生命周期钩子
    onBeforeMount(()=>{
      //函数体
      console.log('---onBeforeMount---')
    })
    onMounted(()=>{
      //函数体
      console.log('---onMounted---')
    })
    onBeforeUpdate(()=>{
      //函数体
      console.log('---onBeforeUpdate---')
    })
    onUpdated(()=>{
      //函数体
      console.log('---onUpdated---')
    })
    onBeforeUnmount(()=>{
      //函数体
      console.log('---onBeforeUnmount---')
    })
    onUnmounted(()=>{
      //函数体
      console.log('---onUnmounted---')
    })
    //返回一个对象(常用)
    return {
      sum,
    }
  },
  //通过配置项的形式使用生命周期钩子
  // #region
  // beforeCreate() {
  //   console.log('---beforeCreate---')
  // },
  // created() {
  //   console.log('---created---')
  // },
  // beforeMount() {
  //   console.log('---beforeMount---')
  // },
  // mounted() {
  //   console.log('---mounted---')
  // },
  // beforeUpdate() {
  //   console.log('---beforeUpdate---')
  // },
  // updated() {
  //   console.log('---updated---')
  // },
  // beforeUnmount() {
  //   console.log('---beforeUnmount---')
  // },
  // unmounted() {
  //   console.log('---unmounted---')
  //
  // }
  // #endregion
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
