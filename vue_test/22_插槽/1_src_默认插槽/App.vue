<template>
  <div class="container">
    <Category title="美食">
      <img alt="美食" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg">

    </Category>

    <Category title="游戏">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{item}}</li>
      </ul>
    </Category>

    <Category title="电影">
      <video controls src="http:://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>

  </div>

</template>

<script>
import Category from './components/Category.vue'

export default {
  name: 'App',
  components: {Category},
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['<<教父>>', '<<肖生客的救赎>>', '<<老人与海>>', '<<霸王别姬>>'],
    }
  }

}

</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}

</style>