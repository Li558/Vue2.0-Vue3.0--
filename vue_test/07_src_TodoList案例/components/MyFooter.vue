<template>
  <div v-show="total" class="todo-footer">
    <label>
      <!-- <input type="checkbox" :checked = "isAll" @change="checkAll"/> -->
      <input v-model="isAll" type="checkbox"/>

    </label>
    <span>
            <span>已完成{{doneTotal}}</span> / 全部{{total}}
        </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  props: ['todos', 'checkAllTodo', 'clearAllTodo'],
  computed: {
    total() {
      return this.todos.length
    },
    doneTotal() {
      // let a = 0
      // this.todos.forEach((todo)=>{
      //   if(todo.done === true) a++
      // })
      // return a
      // const x =  this.todos.reduce((pre, current)=>{
      //   console.log('@', pre,current)
      //   return pre + (current.done ? 1:0)
      // },0)
      // return x
      return this.todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
    },
    isAll: {
      // return this.doneTotal === this.total && this.total > 0
      get() {
        return this.doneTotal === this.total && this.total > 0
      },
      set(value) {
        this.checkAllTodo(value)
      }

    },

  },
  methods: {
    checkAll(e) {
      // console.log(e.target.checked)
      this.checkAllTodo(e.target.checked)
    },
    clearAll() {
      this.clearAllTodo()
      //
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>