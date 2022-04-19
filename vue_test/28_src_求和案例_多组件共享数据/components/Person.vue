<template>
  <div>
    <h2>人员列表</h2>
    <h3>Count组件求和为:{{sum}}</h3>
    <input v-model="name" placholder="请输入名字" type="text">
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in $store.state.personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
// import {mapState,} from 'vuex'
import {nanoid} from 'nanoid'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Person',
  data() {
    return {
      name: ''
    }
  },
  computed: {
    // ...mapState(['personList']),
    personlist() {
      return this.$store.state.personList
    },
    sum() {
      return this.$store.state.sum
    }

  },
  methods: {
    add() {
      const personObj = {id: nanoid(), name: this.name}
      this.$store.commit('ADD_PERSON', personObj)
      this.name = ''
    },

  }

}
</script>

<style>

</style>