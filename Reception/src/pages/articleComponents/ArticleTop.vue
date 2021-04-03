<template>
<div>
  <div class="article-container">
    <div class="shelter"></div>
<!--文章基本信息-->
    <div class="article-message">
      <div class="title" v-text="blog.title">文章标题</div>
<!--      时间 日期-->
      <div class="base-message">
        <p class="iconfont">&#xe606</p>
        <p v-text="blog.update_time" class="date-time">2021-1-29</p>
        <p class="iconfont icon">&#xe667</p>
        <p v-text="blog.view_numbers">10</p>
<!--        评论数，暂时没有此功能-->
<!--        <p class="iconfont icon">&#xe64d</p>-->
<!--        <p>0</p>-->
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ArticleTop",
  props:['blog'],
  created() {
    this.getParams();
  },
  methods:{
    getParams(){
      let routerBlog = this.$route.query.blog;
      this.blog = routerBlog;
    }
  }
}
</script>

<style scoped>

.article-container{
  background: url("../images/bgc1.jpg");
  width: 100%;
  height: 450px;
  background-size: 100% 100%;
}
.article-message{
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
}

.article-message .title{
  color: white;
  font-size: 50px;
}

.shelter{
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
}

.base-message{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  display: flex;
  margin-top: 70px;
  color: white;
  font-size: 25px;
}

.base-message :nth-child(odd){
  margin-top: 7px;
  margin-right: 2px;
}
.base-message :nth-child(2){
  width: 250px;
  margin: 0px 10px 0px 5px;
  font-size: 20px;
  /*background-color: pink;*/
  padding-top: 5px;
}

.base-message :nth-child(even){
  margin-right: 15px;
}


</style>
