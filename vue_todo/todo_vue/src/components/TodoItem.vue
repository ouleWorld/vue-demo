<template>
    <div class="todo-cell" v-bind:class="{ 'todo-complete': this.todo.done }">
        <div v-if="editing">
            <button @click="actionSubmit">提交</button>
            <button @click="actionCancel">取消</button>
            <input type="text" v-model="text">
        </div>
        <div v-else>
            <button @click="actionEdit">编辑</button>
            <button @click="actionDelete">删除</button>
            <button @click="actionToggle">{{ this.todo.done ? '取消完成' : '标记完成' }}</button>
            <router-link v-bind:to="`/todo/${this.todo.id}`">{{ this.todo.task }}</router-link>
        </div>
    </div>
</template>

<script>
    import TodoApi from '../api/todo'

    export default {
        name: "TodoItem",
        props: ['todo'],
        data: function() {
            return {
                api: new TodoApi(),
                editing: false,
                id: this.todo.id,
                text: this.todo.task,
            }
        },
        methods: {
            actionSubmit: function() {
                let todoId = String(this.todo.id)
                let data = {
                    task: this.text,
                }
                this.updateTodo(todoId, data)
            },
            actionCancel: function() {
                this.editing = false
            },
            actionEdit: function() {
                this.editing = !this.editing
            },
            actionDelete: function() {
                let id = this.todo.id
                let todoId = String(id)
                this.api.delete(todoId).then(() => {
                    this.$emit('onListDelete', id)
                })
            },
            actionToggle: function() {
                let todoId = String(this.id)
                let data = {
                    done: !this.todo.done
                }
                this.updateTodo(todoId, data)
            },
            updateTodo: function(todoId, data) {
                this.api.update(todoId, data).then(r => {
                    this.editing = false
                    this.$emit('onListUpdate', r)
                })
            },
        },
    }
</script>

<style scoped>
    .todo-cell {
        width: 400px;
        padding: 5px;
        margin: 10px 0;
        border: 1px solid #d6d6d6;
        border-radius: 5px;
    }

    .todo-cell:hover {
        border: 1px solid #999;
    }

    .todo-complete {
        position: relative;
        border-color: #0070c9;
    }

    .todo-complete::after {
        content: '✓';
        position: absolute;
        top: 50%;
        right: 10px;
        color: #61dafb;
        transform: translateY(-50%);
    }
</style>