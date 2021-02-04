<template>
  <div class="header">
    <!--    nickName-->
    <div class="head-nickname">
      <p>King</p>
    </div>
    <!--    中间内容-->
    <div class="head-nav">
      <router-link to="/home" class="item" active-class="active"><i class="iconfont">&#xe60c</i>文章管理</router-link>
      <router-link to="/type" class="item" active-class="active"><i class="iconfont">&#xe50b</i> 分类管理</router-link>
<!--      <router-link to="/timeline" class="item" active-class="active"><i class="iconfont">&#xe631</i> 时间轴</router-link>-->
      <!--      <router-link to="/type" class="item" active-class="active"><i class="iconfont">&#xe746</i> 留言板</router-link>-->
      <router-link to="/photo/type" class="item" active-class="active"><i class="iconfont">&#xe6ac<span id="xe6ac"></span></i>相册管理 </router-link>
    </div>
    <!--    搜索框-->
    <div class="search">
      <input type="text" placeholder="搜索...">
      <button class="iconfont">&#xe6e6</button>
    </div>
  </div>
</template>


<script>
export default {
name: "Head"
}
</script>

<style scoped>

.header{
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,1);
  opacity: 0.5;
  z-index: 1000;
  margin: 0 auto;

}
.head-nav{
  display: flex;
}
.item{
  padding: 0 30px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  margin: 0 5px;
}
.item:hover{
  background-color: rgba(255,255,255,0.1);
}
.active{
  background-color: rgba(255,255,255,0.2);
}
.head-nickname{
  margin-right: 20px;
}
.head-nickname p{
  font-size: 25px;
  color: green;
  margin-right: 15px;
}
.search{
  display: flex;
  justify-content: center;
  margin-left: 20px;
}
.search input{
  width: 200px;
  height: 30px;
  text-indent: 10px;
  border-radius: 10px 0 0 10px;
  outline: none;
  margin-right: 0;

}
.search button{
  border-radius: 0px 5px 5px 0px;
  float: right;
  height: 30px;
  border: none;
  outline: none;
  background-color: #4e6ef2;
  cursor: pointer;
}
.search button:hover{
  background-color: #4662d9;
}

</style>

