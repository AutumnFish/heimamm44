// 导入Vue
import Vue from "vue";
// 导包
import VueRouter from "vue-router";
// 导入 登录组件
import login from "../views/login/login.vue";
// 导入 首页组件
import index from "../views/index/index.vue";
// 导入嵌套路由的组件
// 学科组件
import subject from '../views/index/subject/subject.vue'
// 用户组件
import user from '../views/index/user/user.vue'
// Use一下 注册
Vue.use(VueRouter);
// 规则
const routes = [
  {
    path: "/login",
    component: login
  },
  // 首页规则
  {
    path: "/index",
    component: index,
    children:[
      {
        path:"subject",// /index/subject
        component:subject
      },
      {
        path:"user",// /index/user
        component:user
      }
    ]
  }
];
// 创建
const router = new VueRouter({
  routes // routes:routes
  // routes:[]
});
// 暴露出去
export default router;
