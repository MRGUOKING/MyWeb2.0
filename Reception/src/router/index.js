import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/Home";
import Photo from "../pages/Photo";
import Timeline from "../pages/Timeline";
import Type from "../pages/Type";
import Article from "../pages/Article";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/photo/:type',
      component: Photo
    },
    {
      path: '/timeline',
      component: Timeline
    },
    {
      path: '/type',
      component: Type
    },
    {
      path: '/article',
      component: Article
    }
  ]
})
