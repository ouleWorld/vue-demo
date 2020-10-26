<template>
    <div>
        <menus></menus>
        点击上面的链接
    </div>
</template>

<script>
    import menu from './menu'

    export default {
        name: 'home',
        components: {
            menus: menu,
        },
    }
</script>