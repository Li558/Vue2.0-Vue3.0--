<template>
  <div class="school">
      <h2>学校名称: {{name}}</h2>
      <h2>学校名称: {{address}}</h2>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'School',
    data(){
        return {
            name: '尚硅谷',
            address: '北京'
        }
    },
}
</script>

<style>
.school{
    background-color:orange;
}
</style>