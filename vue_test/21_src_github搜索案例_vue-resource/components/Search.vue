<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input v-model="keyWord" placeholder="enter the name you search" type="text"/>&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Search',
  data() {
    return {
      keyWord: ''
    }
  },
  methods: {
    searchUsers() {
      // console.log(this);
      //请求前更新List的数据
      this.$bus.$emit('updateListData', {isFirst: false, isLoading: true, errMsg: '', users: []})

      this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response => {
            console.log('请求成功了')
            // this.$bus.$emit('updateListData' ,response.data.items)
            // this.$bus.$emit('updateListData' ,false,false,'',response.data.items)
            //请求成功后更新List的数据
            this.$bus.$emit('updateListData', {isLoading: false, errMsg: '', users: response.data.items})

          },
          error => {
            //请求失败后更新List的数据
            console.log('请求失败了', error.message);
            this.$bus.$emit('updateListData', {isLoading: false, errMsg: error.message, users: []})

          }
      )

    }
  }
}
</script>

<style>

</style>