<template>
  <h1>我是APP组件</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>测试的数据：{{person.job.a.b.c}}</h2>

  <h2>工作种类：{{person.job.type}}</h2>
  <h2>工作薪水：{{person.job.salary}}</h2>
  <h2>爱好：{{person.hobby}}</h2>


  <button @click="changeInfo">修改人的信息</button>


</template>

<script>
import {, reactive} from 'vue'
export default {
  name: 'App',
  setup (){
    //数据
    // let name = ref('张山')
    // let age = ref(18)
    // let job = reactive({
    //   type:'前端工程师',
    //   salary:'30k',
    //   a:{
    //     b:{
    //       c:666
    //     }
    //   }
    // })
    // let hobby = reactive(['抽烟', '喝酒' , '烫头'])
    let person = reactive({
        name: '张三',
        age:18,
        job:{
          type:'前端工程师',
          salary:'30k',
          a:{
            b:{
              c:666
            }
          }
        },
        hobby: ['抽烟', '喝酒' , '烫头']
    }
    )
    //方法
    function changeInfo(){
      person.name = '李四'
      person.age = 48
      person.job.type = 'UI设计师'
      person.job.salary = '35'
      person.job.a.b.c = 3
      person.hobby[0] = '学习'
      console.log(person)

      // console.log(name, age)
    }

    return {
      person,
      changeInfo
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
