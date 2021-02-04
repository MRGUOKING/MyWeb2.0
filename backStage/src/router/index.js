import Vue from 'vue'
import Router from 'vue-router'
import Login from "../pages/Login";
import Article from "../pages/Article";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect:'/login'
    },
    {
      path:'/login',
      component: Login,
      meta:{
        showHead:false
      }
    },
    {
      path: '/article',
      component: Article,
      meta: {
        showHead: true
      }
    }
  ]
})
