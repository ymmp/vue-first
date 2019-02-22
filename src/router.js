import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

// 引入路由模块
import homeContainer from "./components/tabber/homeContainer.vue"

var router = new VueRouter({
    routes: [
        {path:"/home",component: homeContainer},
       
    ],
    // 底部切换的时候回生成样式，设置用mui-active替换默认样式router-link-active
    linkActiveClass: "mui-active"
})

export default router