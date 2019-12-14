import Vue from 'vue'
import App from './App.vue'
// 导入接收 路由
import router from './router/router.js'

// 导入饿了么 ui
import ElementUI from 'element-ui';
// 导入饿了么 的样式
import 'element-ui/lib/theme-chalk/index.css';
// 注册一下
Vue.use(ElementUI);

// 导入全局样式
import "./style/base.css";


Vue.config.productionTip = false

// 测试环境变量
window.console.log(process.env.VUE_APP_BASEURL)

new Vue({
  render: h => h(App),
  // 挂载到Vue示例上 router
  router// router:router
}).$mount('#app')
