<template>
  <div>
    <h2>人员列表</h2>
    <h3 style="color: red">Count组件求和为:{{sum}}</h3>
    <h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
    <input v-model="name" placholder="请输入名字" type="text">
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonServer">添加一个人名字随机</button>

    <ul>
      <li v-for="p in $store.state.personAbout.personList" :key="p.id">{{p.name}}</li>
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
      return this.$store.state.personAbout.personList
    },
    sum() {
      return this.$store.state.countAbout.sum
    },
    firstPersonName() {
      return this.$store.getters['personAbout/firstPersonName']
    }

  },
  methods: {
    add() {
      const personObj = {id: nanoid(), name: this.name}
      this.$store.commit('personAbout/ADD_PERSON', personObj)
      this.name = ''
    },
    addWang() {
      const personObj = {id: nanoid(), name: this.name}
      this.$store.dispatch('personAbout/addPersonWang', personObj)
      this.name = ''
    },
    addPersonServer() {
      this.$store.dispatch('personAbout/addPersonServe')
    }
  }

}
</script>

<style>

</style>