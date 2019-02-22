import Vue from "vue"


import app from "./App.vue"
// 按需导入mint-ui组件
import '../lib/mui/css/mui.css'
import "../lib/mui/css/icons-extra.css"
import "../node_modules/mint-ui/lib/style.css"

// 导入路由
import VueRouter from "vue-router"
Vue.use(VueRouter)
import router from "./router.js"

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


class Person {
    static info = { name: 'zs', age: 20 }
  }
  console.log(Person.info)

var vm = new Vue({
    el:"#app",
    data:{
    },
    render:c=>c(app),
    router
})
