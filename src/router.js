import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import account from "./main/Account.vue"
import goodlist from "./main/GoodList.vue"

var router = new VueRouter({
    routes: [
       
    ],
    // 底部切换的时候回生成样式，设置用mui-active替换默认样式router-link-active
    linkActiveClass: "mui-active"
})

export default router