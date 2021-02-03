<template>
  <div id="slideshow">
    <!-- 插入轮播的图片们 -->
    <img src="../images/bgc1.jpg" />
    <img src="../images/bgc2.jpg" class="active"/>
    <img src="../images/bgc3.jpg" />
    <!-- 插入轮播的页码们 -->
    <div>
      <span class="active">1</span>
      <span>2</span>
      <span>3</span>
    </div>
    <!--    头像-->
    <div class="avatar">
      <img src="../images/header.jpg" alt="">
      <div class="nickname">
        <h2>名字</h2>
      </div>
    </div>
    <!--  文字  -->
    <div>

    </div>
  </div>



</template>

<script>
export default {
name: "HomeTop",
  mounted() {
    function slideshow() {
      var slideshow=document.getElementById("slideshow"),
        imgs=slideshow.getElementsByTagName("img"), //得到图片们
        pages=slideshow.getElementsByTagName("span"), //得到页码们
        current=0; //current为当前活跃的图片编号

      function slideOff() {
        imgs[current].className=""; //图片淡出
        pages[current].className="";
      }
      function slideOn() {
        imgs[current].className="active"; //图片淡入
        pages[current].className="active";
      }
      function changeSlide() { //切换图片的函数
        slideOff();
        current++; //自增1
        if(current>=3) current=0;
        slideOn();
      }
      //每2s调用changeSlide函数进行图片轮播
      var slideon=setInterval(changeSlide,5000);
      for(var i=0; i<pages.length; i++) { //定义鼠标移入和移出页码事件
        pages[i].onmouseover=function(){
          slideOff(); //图片淡出
          current=this.innerHTML-1; //得到鼠标停留的页码对应的current
          slideOn(); //图片淡出
        }
      }

    }
    slideshow();
  }
}
</script>

<style scoped>
body{
  height: 4000px;
}
#slideshow{
  width: 100%;
  height: 750px;
  overflow: hidden;
  position: relative;
}
#slideshow img{
  width: 100%;
  height: 100%;
  position: absolute; /*图片采取绝对定位，均位于左上角，重叠在一起*/
  top: 0;
  left: 0;
  opacity: 0; /*初始不透明度为0，图片都看不见*/
  transition: opacity 1s linear; /*--重点--定义一个关于透明度的transition*/
}
#slideshow img.active{
  opacity: 1; /*有active类的图片不透明度为1，即显示图片*/
}
/*-- 设置页码的样式 --*/
#slideshow div{
  width: 100%;
  position: absolute;
  bottom: 10px;
  text-align: center;
}
#slideshow span{
  display: inline-block;
  width: 25px;
  line-height: 25px; /*当只有一行文本时height等于line-height*/
  border-radius: 25px; /*设置页码为圆形*/
  margin: 0 15px;
  background: white;
  font-size: 16px;
}
#slideshow span.active{
  color: white;
  background: #FFDD55;
}

#slideshow p.active{
  left: 0;
  opacity: 1;
}
#slideshow .avatar{
  background-color: black;
  border-radius: 50%;
  width: 140px;
  height: 140px;
  position: absolute;
  top: 20%;
  left: 50%;
  margin-left: -70px;
}
#slideshow .avatar img{
  opacity: 1;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

#slideshow .avatar .nickname{
  margin-bottom: -50px;
}

#slideshow .avatar .nickname h2{
  font-size: 40px;
  color: white;
}



</style>
