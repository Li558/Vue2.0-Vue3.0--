<template>
  <div class="child">
    <h3>我是Child组件</h3>
    <Son/>
  </div>
</template>

<script>
import Son from "@/components/Son";
import {inject} from "vue";

export default {
  name: "Child",
  components:{Son},
  setup(){
    //父子组件通信一般用Props
    // let x = inject('car')
    // console.log(x)
  }
}
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>