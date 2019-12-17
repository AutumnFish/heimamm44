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
import subject from "../views/index/subject/subject.vue";
// 用户组件
import user from "../views/index/user/user.vue";
// 数据统计组件
import chart from "../views/index/chart/chart.vue";
// 题库组件
import question from "../views/index/question/question.vue";
// 企业组件
import enterprise from "../views/index/enterprise/enterprise.vue";

// 导入 token工具函数
import {getToken} from '../utils/token.js'

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
    children: [
      {
        path: "subject", // /index/subject
        component: subject
      },
      {
        path: "user", // /index/user
        component: user
      },
      {
        path: "chart", // /index/chart
        component: chart
      },
      {
        path: "question", // /index/question
        component: question
      },
      {
        path: "enterprise", // /index/enterprise
        component: enterprise
      }
    ]
  }
];
// 创建
const router = new VueRouter({
  routes // routes:routes
  // routes:[]
});

// 注册导航守卫
// to去的 路由
// from 来的 路由
// next 下一个
router.beforeEach((to, from, next) => {
  // 除了login 页面 都需要做登录判断
  if (to.path != "/login") {
    // 必须要登录才可以访问
    if (!getToken()) {
      // 提示用户
      window.alert("先登录");
      // 去登录页
      next('/login')
    }
  } else {
    // 登录页 直接放过去
    next();
  }
});

// 暴露出去
export default router;
