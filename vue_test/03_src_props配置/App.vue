<template>
  <div>
    <Student name="李四" sex="女" :age="18"/>
    <Student name="上三" sex="男" :age="14"/>

  </div>
</template>

<script>
import Student from './components/Student.vue'
export default {
  name: 'App',
  components: {Student},
  data(){
    return{
      name: "尚硅谷"
    }
  }
  
}
</script>

<style>

</style>