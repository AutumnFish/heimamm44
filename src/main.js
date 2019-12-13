import Vue from 'vue'
import App from './App.vue'
// 导入接收 路由
import router from './router/router.js'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载到Vue示例上 router
  router// router:router
}).$mount('#app')
