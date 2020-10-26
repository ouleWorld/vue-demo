<template>
    <ul>
        <li v-for="(t, i) in todos" v-bind:key="i">
            <TodoItem v-bind:todo="t"
                      v-on:onListDelete="propsDelete"
                      v-on:onListUpdate="propsUpdate"
            ></TodoItem>
        </li>
    </ul>
</template>

<script>
    import TodoItem from './TodoItem'

    export default {
        name: "TodoList",
        props: ['todos'],
        components: {
            TodoItem,
        },
        methods: {
            propsDelete: function(todoId) {
                this.$emit('onDelete', todoId)
            },
            propsUpdate: function(todo) {
                this.$emit('onUpdate', todo)
            },
        },
    }
</script>

<style scoped>

</style>