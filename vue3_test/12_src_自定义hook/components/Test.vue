<template>
  <h1>我是Test组件</h1>
  <h2>当前点击鼠标的坐标为：x:{{point.x}} y:{{point.y}}</h2>

</template>

<script>
import usePoint from '@/hocks/usePoint'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Test",
  setup(){
    let point = usePoint()

    return {point}
  }
}
</script>

<style scoped>

</style>