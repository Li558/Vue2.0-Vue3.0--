<template>
  <div class="student">
    <h2>学生姓名: {{name}}</h2>
    <h2>学生性别: {{sex}}</h2>
    <input v-fbind:value="name" type="text">
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Student',
  data() {
    return {
      name: '张三',
      sex: '男'
    }
  },
}
</script>

<style>
.student {
  background-color: orange;
}
</style>