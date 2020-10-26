<template>
    <div>
        <menus></menus>
        <pre v-for="(v, k) in todo" v-bind:key="k">
            ({{ k }}): ({{ v }})
        </pre>
    </div>
</template>

<script>
    import menu from './menu'
    import TodoApi from '../api/todo'

    export default {
        name: "TodoDetail",
        data: function() {
            return {
                api: new TodoApi(),
                todo: null,
            }
        },
        components: {
            menus: menu,
        },
        created() {
            let todoId = this.$route.params.id
            this.api.detail(todoId).then(r => {
                this.todo = r
            })
        }
    }
</script>

<style scoped>

</style>