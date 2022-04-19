<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'About',
  // beforeDestroy(){
  //     console.log('About组件即将被销毁了!');
  // },
  mounted() {
    console.log('%%', this.$route);

  }
}
</script>

