<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link active-class="active" class="list-group-item" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link active-class="active" class="list-group-item" to="/home/message">Message</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  /* beforeDestroy() {
    console.log('Home组件即将被销毁了')
  }, */
  /* mounted() {
    console.log('Home组件挂载完毕了',this)
    window.homeRoute = this.$route
    window.homeRouter = this.$router
  },  */
}
</script>