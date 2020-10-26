<template>
    <div class="todo-counter">
        <p>统计</p>
        <div class="todo-table">
            <div class="todo-row">
                <span class="cell">总计</span>
                <span class="cell">完成</span>
                <span class="cell">未完成</span>
            </div>
            <div class="todo-row">
                <span class="cell">{{ total }}</span>
                <span class="cell">{{ todos.filter(e => e.done).length }}</span>
                <span class="cell">{{ this.todos.filter(e => !e.done).length }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TodoCounter",
        props: ['todos'],
        computed: {
            total: function() {
                return this.todos.length
            }
        }
    }
</script>

<style scoped>

    .todo-table {
        display: table;
        margin: 10px 0 30px;
    }

    .todo-row {
        display: table-row;
    }

    .todo-row:not(:first-child) {
        margin-top: -1px;
    }

    .cell {
        display: table-cell;
        width: 100px;
        text-align: center;
        border: 1px solid #eee;
    }
</style>