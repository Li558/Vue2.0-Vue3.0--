<template>
  <div class="student">
    <h1>我是{{msg}}的学生</h1>
    <h2>学生性别: {{name}}</h2>
    <h2>学生性别: {{sex}}</h2>
    <h2>学生年龄: {{myAge}}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Student',
    data(){
        return {
            msg: '尚硅谷',
            myAge:this.age
        }
    },
    methods:{
        updateAge(){
            this.myAge++
        }
    },
        // props: ['name', 'age', 'sex'], //简单声明接收
        //接收的同时对数据进行类型限制
        // props:{
        //     name:String,
        //     age:Number,
        //     sex:String, 
        // }
        
        //接收的同时对数据:进行类型限制+默认值的指定+必要性的限制
        props:{
            name:{
                type:String,    //name的类型是字符串
                required:true,//name是必要的
            },
            age:{
                type:Number,
                default:99,//默认值
            },
            sex:{
                type:String,
                required:true,
            }

        }
    
}
</script>

<style>
.student{
    background-color:orange;
}
</style>