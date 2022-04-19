export const hunhe = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
}

export const hunhe2 = {
    data() {
        return {
            x: 100,
            y: 200
        }
    },
    mounted() {
        console.log('你好啊');
    }
}