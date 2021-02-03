<template>
  <div>
    <div class="content">

      <div class="item">
        <!--      左边-->
        <div class="left">
          <div class="title">立冬</div>
          <div class="description">今天是立冬...</div>
          <div>
            <div class="message">
              <img class="avatar" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3593883707,2674855000&fm=26&gp=0.jpg" alt="">
              <p>king</p>
              <p class="iconfont">&#xe606</p>
              <p>2021-1-29</p>
              <p class="iconfont icon">&#xe667</p>
              <p>10</p>
              <p class="iconfont icon">&#xe64d</p>
              <p>0</p>
            </div>
            <!--            底部种类-->
            <div class="message">
              <a href="#"><div class="type">生活</div></a>
            </div>
          </div>
        </div>
        <!--        右边-->
        <div class="right">
          <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3593883707,2674855000&fm=26&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="item">
        <div class="left">
          <div class="title"></div>
          <div class="description"></div>
          <div class="message"></div>
        </div>
        <!--        右边-->
        <div class="right">
          <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3593883707,2674855000&fm=26&gp=0.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style scoped>

.content{
  width: 70%;
  height: 1000px;
  margin: 100px auto;
}
.content .item{
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  /*background-color: purple;*/
  height: 350px;
  padding: 30px 20px;
  background-color: rgba(255,255,255,0.7);
  /*border-radius: 8px;*/
  margin: 0px 0;
  border-bottom: 1px solid #5b5c5d;
}
.content .item .left{
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.content .item .right{
  flex: 2;
  display: flex;
  justify-content: flex-end;
}
.content .item img{
  border-radius: 5px;
  width: 80%;
  height: 100%;
}
.left .title{
  font-size: 30px;
}
.left .description{
  height: 25%;
  font-size: 15px;
  color: #6a6e70;
}
.message{
  display: flex;
  justify-content: start;
  align-items: center;
}
.message :nth-child(2){
  margin: 0 10px;
  color: #4385c4;
}
.message :nth-child(3){
  margin: 0 3px;
}
.message .icon{
  margin-left: 20px;
  margin-top: 5px;
}



.content .item .avatar{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.left .type{
  border: 1px solid #0eb5b0;
  text-align: center;
  font-size: 10px;
  color: #0eb5b0;
  padding: 5px;
  margin: 10px 50px;
  border-radius: 5px;
}
</style>
