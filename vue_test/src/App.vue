<template>
  <div>
    <button>原生按钮</button>
    <input type="text">
    <atguigu-row>
      <atguigu-button>默认按钮</atguigu-button>
      <atguigu-button type="primary">主要按钮</atguigu-button>
      <atguigu-button type="success">成功按钮</atguigu-button>
      <atguigu-button type="info">信息按钮</atguigu-button>
      <atguigu-button type="warning">警告按钮</atguigu-button>
      <atguigu-button type="danger">危险按钮</atguigu-button>
    </atguigu-row>
    <atguigu-datePicker
        v-model="value1"
        placeholder="选择日期"
        type="date">
    </atguigu-datePicker>

    <el-row>
      <atguigu-row circle icon="el-icon-search"></atguigu-row>
      <atguigu-row circle icon="el-icon-edit" type="primary"></atguigu-row>
      <atguigu-row circle icon="el-icon-check" type="success"></atguigu-row>
      <atguigu-row circle icon="el-icon-message" type="info"></atguigu-row>
      <atguigu-row circle icon="el-icon-star-off" type="warning"></atguigu-row>
      <atguigu-row circle icon="el-icon-delete" type="danger"></atguigu-row>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
