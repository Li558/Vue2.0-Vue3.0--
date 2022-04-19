<template>
  <ul>
    <li :style="{opacity}">欢迎学习vue</li>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'News',
  data() {
    return {
      opacity: 1
    }
  },
  // beforeDestroy(){
  //     console.log('New组件即将被销毁');
  //     clearInterval()
  // },
  // mounted() {
  //     this.timer = setInterval(() =>{
  //         this.opacity -= 0.01
  //         if(this.opacity <= 0)this.opacity =1
  //     },16)
  // }
  //路由组件被激活时触发
  activated() {
    console.log('new组件激活了');
    this.timer = setInterval(() => {
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 50)
  },
  //路由组件被失活时触发
  deactivated() {
    console.log('new组件失活了');
    clearInterval()
  }
}
</script>

