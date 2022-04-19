<template>
  <div>
    <Student :age="18" name="李四" sex="女"/>
    <Student :age="14" name="上三" sex="男"/>

  </div>
</template>

<script>
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {Student},
  data() {
    return {
      name: "尚硅谷"
    }
  }

}
</script>

<style>

</style>