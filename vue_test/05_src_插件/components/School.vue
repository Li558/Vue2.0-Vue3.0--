<template>
  <div class="student">
    <h2>学校名称: {{name | mySlice}}</h2>
    <h2>学校地址: {{address}}</h2>
    <button @click="test">点我测试</button>
  </div>
</template>

<script>
    export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'School',
    data(){
        return {
            name: '尚硅谷aerert',
            address: '北京昌平'
        }
    },
    methods: {
      test(){
        this.hello();
      }
    }
}
</script>

<style>
.student{
    background-color:orange;
}
</style>