import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)

import home from './components/home'
import todo from './components/todo'
import TodoDetail from './components/TodoDetail'
import SwiperTodo from './components/SwiperTodo'

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: home,
    },
    {
        path: '/todo',
        component: todo,
    },
    {
        path:'/test',
        component: SwiperTodo,
    },
    {
        path: '/todo/:id',
        component: TodoDetail,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes: routes,
})

export default router