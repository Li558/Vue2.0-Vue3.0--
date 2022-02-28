<template>
  <div>
    <h1 v-text = "msg" ref="title"></h1>
    <button ref="btn" @click="showDom" >带我输出上方的DOM元素</button>
    <School ref="sch" />
  </div>
</template>

<script>
import School from './components/School.vue'
export default {
  name: 'App',
  components: {School},
  data(){
      return {msg: '欢迎学习'}
    },
  methods: {
    showDom(){
      // console.log('@@');
      console.log(this.$refs.title);//真实DOM元素
      console.log(this.$refs.btn);//真实DOM元素
      console.log(this.$refs.sch);//School组件的实例对象

      // console.log(document.getElementById('sch'));
      console.log(this.$refs)


    }
  },
}
</script>

<style>

</style>