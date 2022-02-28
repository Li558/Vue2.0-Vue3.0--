<template>
  <div>
    <School/>
    <hr>
    <Student/>
    <hr>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {Student,School},
}
</script>

<style>

</style>