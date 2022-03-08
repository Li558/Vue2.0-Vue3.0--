<template>
    <h2>我是About的内容</h2>
</template>

<script>
    export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'About',
    // beforeDestroy(){
    //     console.log('About组件即将被销毁了!');
    // },
    mounted(){
        console.log('%%',this.$route);
        
    },
    //通过路由规则，进入该组件被调用
    beforeRouteEnter(to, from, next){
        console.log('beforeRouteEnter',to,from)
        if(to.meta.isAuth){//判断是否需要限权
            if(localStorage.getItem('school') === 'atguigu'){
                next()
            }else{
                alert('学校名字不对,无权限查看')
            }
        }else{
            next()
        }
    },
    //通过路由规则，离开该组件被调用
    beforeRouteLeave(to, from, next){
        //     
        console.log('APP---beforeRouteLeave')
        next()

    }

}
</script>

