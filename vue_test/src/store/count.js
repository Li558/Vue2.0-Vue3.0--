export default {
    //求和相关配置
    
    namespaced:true,
    actions:{
            jianOdd(context, value){
                if(context.state.sum % 2){
                    context.commit('JIA',value)
                }
            },
            jianWait(context, value){
                setTimeout(() => context.commit('JIAN', value),3000)
                // context.commit('JIAN',value)
            }
    },
    mutations:{
            JIA(state, value){
                console.log('mutations中JIA被调用了');
                state.sum += value
            },
            JIAN(state, value){
                console.log('mutations中JIA被调用了');
                state.sum -= value
            },
            JIANODD(state, value){
                console.log('mutations中JIA被调用了');
                state.sum += value
            },
            JIANWAIT(state, value){
                console.log('mutations中JIA被调用了');
                state.sum -= value
            },
    },
    state:{
            sum:0,    //当前的和
            school:'尚硅谷',
            subject: '前端',

    },
    getters:{
            bigSum(state){
                return state.sum * 10
            }
    }
}