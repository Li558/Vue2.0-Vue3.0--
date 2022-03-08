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
			type="date"
			placeholder="选择日期">
		</atguigu-datePicker>

		<el-row>
			<atguigu-row icon="el-icon-search" circle></atguigu-row>
			<atguigu-row type="primary" icon="el-icon-edit" circle></atguigu-row>
			<atguigu-row type="success" icon="el-icon-check" circle></atguigu-row>
			<atguigu-row type="info" icon="el-icon-message" circle></atguigu-row>
			<atguigu-row type="warning" icon="el-icon-star-off" circle></atguigu-row>
			<atguigu-row type="danger" icon="el-icon-delete" circle></atguigu-row>
		</el-row>
	</div>
</template>

<script>
	export default {
		name:'App',
	}
</script>
