import Vue from 'vue'
import Router from 'vue-router'
import Login from "../pages/Login";
import Article from "../pages/Article";
import ArticlePublish from "../pages/ArticlePublish";
import TypeManage from "../pages/TypeManage";
import TypeInput from "../pages/TypeInput";
import PhotoManage from "../pages/PhotoManage";
import PhotoAdd from "../pages/PhotoAdd";

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
    },
    {
      path: '/publish',
      component: ArticlePublish,
    },
    {
      path: '/typeManage',
      component: TypeManage,
    },
    {
      path: '/typeInput',
      component: TypeInput,
    },
    {
      path: '/photoManage',
      component: PhotoManage,
    },
    {
      path: '/photoAdd',
      component: PhotoAdd
    }
  ]
})
