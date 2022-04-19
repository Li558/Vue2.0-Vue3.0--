<template>
  <div>
    <h1>当前求和为: {{sum}}</h1>
    <h3>当前求和放大十倍为:{{bigSum}} </h3>
    <h3>我在{{school}}, 学习:{{subject}} </h3>

    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Count',
  data() {
    return {
      n: 1,        //用户选择的数字

    }
  },
  computed: {

    //展开运算符  借助mapState生成计算属性, 从state中读取数据。（对象写法）
    // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

    //借助mapState生成计算属性, 从state中读取数据。（数组写法）
    ...mapState(['sum', 'school', 'subject']),

    /****************************************** */
    //借助mapGetters生成计算属性, 从getters中读取数据。（对象写法）
    // ...mapGetters({bigSum:'bigSum'})
    //借助mapGetters生成计算属性, 从getters中读取数据。（数组写法）
    ...mapGetters(['bigSum'])
  },
  methods: {
    //程序员亲自写方法
    // increment(){
    //     this.$store.commit('JIA', this.n)
    // },
    // decrement(){
    //     this.$store.commit('JIAN', this.n)
    // },


    // increment(){
    //     this.$store.commit('JIA', this.n)
    // },
    // increment(event){
    //     this.$store.commit('JIA', event)
    // },

    //借助mapMutations生成对象的方法,方法中会调用commit去联系mutations(对象写法)
    ...mapMutations({increment: 'JIA', decrement: 'JIAN'}),
    //借助mapMutations生成对象的方法,方法中会调用commit去联系mutations(数组写法)
    // ...mapMutations(['increment', 'decremen']),

    // incrementOdd(){
    //     this.$store.dispatch('JIANODD', this.n)
    // },
    // incrementWait(){
    //     this.$store.dispatch('JIANWAIT', this.n)
    // },


    ...mapActions({incrementOdd: 'jianOdd', incrementWait: 'jianWait'}),
    // ...mapActions(['JIANODD','JIANWAIT]),

    // ...mapActions(['incrementOdd', 'incrementWait']),

  },

  mounted() {
    const x = mapState({he: 'sum', xuexiao: 'school', xueke: 'subject'})
    console.log(x);
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>