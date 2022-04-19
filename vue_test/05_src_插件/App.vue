<template>
  <div>
    <School/>
    <hr>
    <Student/>
    <hr>
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
  name: 'App',
  components: {Student, School},
  data() {
    return {
      name: "尚硅谷"
    }
  }

}
</script>

<style>

</style>