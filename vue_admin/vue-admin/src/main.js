import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

import router from './router'

Vue.use(ElementUI);
Vue.config.productionTip = false

// new Vue({
//     el: '#app',
//     router: router,
//     // render: h => h(App),
// })

// new Vue({
//     router,
//     render: h => h(App)
// }).$mount("#app")

new Vue({
    el: '#app',
    template: '<App />',
    components: {
        App
    },
    router
})