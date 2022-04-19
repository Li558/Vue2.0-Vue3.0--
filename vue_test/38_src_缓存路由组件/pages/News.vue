<template>
  <ul>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'News',
  beforeDestroy() {
    console.log('New组件即将被销毁');
  },

}
</script>

