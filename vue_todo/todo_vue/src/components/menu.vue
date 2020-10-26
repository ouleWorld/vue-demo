<template>
    <nav>
        <router-link v-for="(m, i) in menus"
                     v-bind:key="i"
                     v-bind:to="m.url"
                     v-bind:class="{ active: m.url === $route.path }"
        >
            {{ m.text }}
        </router-link>
    </nav>
</template>

<script>
    export default {
        data: function() {
            return {
                menus: [
                    {
                        text: 'home',
                        url: '/home',
                    },
                    {
                        text: 'todo',
                        url: '/todo',
                    },
                ],
            }
        },
    }
</script>

<style scoped>
    nav {
        margin: 20px 0;
    }

    nav a {
        padding: 0 10px;
        color: #1a1a1a;
    }

    nav .active {
        color: #0084ff;
    }
</style>