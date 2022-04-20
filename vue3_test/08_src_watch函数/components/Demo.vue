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
import {reactive, ref, watch} from 'vue'

export default {
  name: 'Demo',

  // watch:{
  //   // sum(newValue, oldValue){
  //   //   console.log('sum', newValue, oldValue)
  //   // }
  //   sum:{
  //       immediate:true,
  //       deep:true,
  //       handler(newValue, oldValue){
  //       console.log('sum变化了', newValue, oldValue)
  //       }
  //     }
  //   },


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
    //情况一 ：监视ref所定义的一个响应式数据
    // watch(sum, (newValue, oldValue)=>{
    //   console.log('sum的值变化了',newValue, oldValue)
    // },{immediate:true})
    /*********************************************************************************/

    // 情况二 ：监视ref所定义的响应式数据
    // watch([sum, msg], (newValue, oldValue)=>{
    //   console.log('sum或msg的值变化了',newValue, oldValue)
    // },{immediate:true})
    /*********************************************************************************/

    /* 情况三 ：监视reactive所定义的响应式数据全部属性
    * 1.注意：此处无法正确的虎丘oldValue
    * 2.注意：强制开启了深度监视(deep配置无效)
    * */
    // watch(person, (newValue, oldValue)=>{
    //   console.log('person的值变化了',newValue, oldValue)
    // },{immediate:true})
    /*********************************************************************************/

    /* 情况四 ：监视reactive所定义的一个响应式数据中的某个属性
    * */
    // watch(()=>person.age,(newValue, oldValue)=>{
    //   console.log('person.age的值变化了',newValue, oldValue)
    // },{immediate:true})
    /*********************************************************************************/

    /* 情况五 ：监视reactive所定义的一个响应式数据中的某些属性
    * */
    // watch([()=>person.age,()=>person.name],(newValue, oldValue)=>{
    //   console.log('person.age或name的值变化了',newValue, oldValue)
    // },{immediate:true})
    /*********************************************************************************/

    /* 特殊情况
    * */
    watch(()=>person.job, (newValue, oldValue)=>{
      console.log('person的值变化了',newValue, oldValue)
    },{deep:true})//此处监视的是reactive定义的对象中的某个属性 所以deep配置有效
    /*********************************************************************************/


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
