<template>
<div style="padding-bottom: 100px">
    <HomeTop/>
<!--  推荐内容-->
    <HomeContent/>
<!--  主要内容-->
  <Main v-bind:blogs="blogs"></Main>
  <section class="article-list-bottom">
    <article class="article-all">
      <button class="back" @click="prePage">上一页</button>
      <p>第 <b>{{currentPage+1}}</b> 页，共 <b>{{maxPage}}</b> 页，有 <b>{{totalNumbers}}</b> 篇文章</p>
      <button class="back" @click="nextPage">下一页</button>
    </article>
  </section>


</div>
</template>

<script>
import HomeContent from "./homeComponents/HomeContent";
import Main from "./homeComponents/Main";
import HomeTop from "./homeComponents/HomeTop";
export default {
  name: "Home",
  data(){
    return{
      currentPage:0,
      maxPage:0,
      totalNumbers:0,
      blogs:[]
    }
  },
  components:{
    HomeTop,
    HomeContent,
    Main
  },
  created() {
    this.getPageNum();
    //初始化
    this.getBlogByPage(0);
  },
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
  },
  methods:{
    getPageNum(){
      this.$axios.get("http://8.129.131.7:8085/blog//blogPageMessage").then((response)=>{
        console.log("请求页面成功")
        console.log(response);
        this.maxPage = response.data.maxPageNum;
        this.totalNumbers = response.data.totalNumber;
      })
    },
    prePage(){
      if (this.currentPage == 0){
        alert("已经是第一页");
        return;
      }else {
        this.currentPage--;
        this.getBlogByPage(this.currentPage);
      }
    },
    nextPage(){
      if (this.currentPage+1>=this.maxPage){
        alert("已经是最后一页")
        return ;
      }else {
        this.currentPage++;
        this.getBlogByPage(this.currentPage);
      }
    },
    getBlogByPage(page){
      this.$axios.get("http://8.129.131.7:8085/blog/blogByPage/"+page).then((response)=>{
        console.log("请求成功")
        this.blogs = response.data;
        console.log(this.blogs[0].description);
      })
    },
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

.article-list-bottom{
  width: 70%;
  margin: 0 auto;
  /*margin-bottom: 1000px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f9fafb;
}

.article-list-bottom article{
  padding: 10px 0 10px 0;
}

.article-list-bottom article button{
  width: 100px;
  height: 35px;
  background-color: #00b5ad;
  outline: none;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 17px;
  font-weight: 900;
  cursor: pointer;
}
.article-list-bottom article button:hover{
  background-color: #009c95;
}
.article-all{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  font-weight: 300;
}
.article-list-bottom .back{
  background-color: #f9fafb;
  color: #4183c4;
}

.article-list-bottom .back:hover{
  background-color: #f9fafb;
}



</style>
