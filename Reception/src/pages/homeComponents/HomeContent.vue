<template>
<div>
<!--  最新推荐标签-->
  <div class="new-commend">
    <p class="iconfont" style="margin-top: 3px;">&#xe656</p><p>最新推荐</p>
  </div>
<!--  最新推荐图片-->
  <div class="content">
    <div class="content-img" >
      <router-link to="/article">
      <img src="https://6169-ai-ship-3gnlla8l509c5d77-1303253921.tcb.qcloud.la/%E7%94%9F%E6%B4%BB/%E8%8A%B1%E6%9C%B5.jpg?sign=f2608f03d0d5156b2265338259b5ebcf&t=1609675484" alt="">
      </router-link>
    </div>
    <div class="content-img">
      <router-link to="/article">
      <img src="https://6169-ai-ship-3gnlla8l509c5d77-1303253921.tcb.qcloud.la/%E7%94%9F%E6%B4%BB/%E7%A4%BC%E7%89%A91225.jpg?sign=02c93c72e0cdc417271023ca1d11067b&t=1608826897" alt="">
      </router-link>
    </div>
    <div class="content-img">
      <router-link to="/article">
      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3593883707,2674855000&fm=26&gp=0.jpg" alt="">
      </router-link>
    </div>
    <div class="content-img">
      <router-link to="/article">
      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3683459538,2383724163&fm=11&gp=0.jpg" alt="">
      </router-link>
    </div>
  </div>
<!--  主要内容标签-->
  <div class="new-commend">
    <p class="iconfont" style="margin-top: 3px;">&#xe656</p><p>最新记录</p>
  </div>
<!--  主要内容主题-->
  <div class="main-content"></div>
</div>
</template>

<script>
export default {
  name: "HomeContent",
  data(){
    return{
      list_article:[],
      list_comment:[],
      currentPage:0
    }
  },
  props:["blogs"],
  methods:{
  }
}
</script>

<style scoped>
.new-commend{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  width: 50%;
  height: 40px;
  border-radius: 5px;
  background-color: rgba(255,255,255,0.7);
}
.new-commend p{
  color: #64686a;
}
.content{
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
  height: 400px;
}
.content .content-img{
  width: 500px;
  height: 100%;
  margin-right: 10px;
}
.content-img:last-child{
  margin-right: 0px;
}

.content-img img{
  border-radius: 10px;
  width: 300px;
  height: 100%;
}

.main-content{
}


</style>

