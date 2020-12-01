import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)

import HelloWorld from './components/HelloWorld.vue'
import TableBsic from './frontend/page/TableBasic/index.vue'
import VueOperatorBasic from './frontend/page/VueOperatorBasic/index'
import FormPageBasic from './frontend/page/FormPageBasic'

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: HelloWorld,
    },
    {
        path: '/table/basic',
        component: TableBsic,
    },
    {
        path: '/vue/operator/basic',
        component: VueOperatorBasic,
    },
    {
        path: '/create/from/page/basic',
        component: FormPageBasic,
    },{
        path: '/modify/from/page/basic',
        component: FormPageBasic,
    },


]

const router = new VueRouter({
    mode: 'history',
    routes: routes,
})

export default router