<template>
    <ul>
        <li>消息编号: {{id}}</li>
        <li>消息标题: {{title}}</li>
        <!-- <li>{{a}}</li> -->
        <!-- <li>{{b}}</li> -->

    </ul>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Detail',
    props:['id', 'title'],
    computed:{
        // id(){
        //     return this.$route.params.id
        // },
        // title(){
        //     return this.$route.params.title

        // }
    },
    mounted() {
        console.log(this.$route);
    }
}
</script>

