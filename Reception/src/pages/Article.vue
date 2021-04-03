<template>
<div>
<!--  文章头部-->
  <ArticleTop v-bind:blog ="blog"></ArticleTop>
<!--  文章主要内容-->
  <ArticleContent v-bind:blog="blog"></ArticleContent>
</div>
</template>

<script>
import ArticleTop from "./articleComponents/ArticleTop";
import ArticleContent from "./articleComponents/ArticleContent";
export default {
  name: "Article",
  data(){
    return{
      blog:{}
    }
  },
  components:{
    ArticleTop,
    ArticleContent
  },
  methods:{
    getParams(){
      this.blog = this.$route.query.blog;
    },
    resizePicture(){
      console.log("resizePicture开始执行")
      let imgs = document.getElementsByTagName("img");
      console.log(imgs)
      for (let i = 0; i < imgs.length; i++) {
        console.log("length")
        console.log(imgs[i].naturalWidth)
        if (imgs[i].naturalWidth> 1125){
          imgs[i].width = 1125;
        }
      }
    }
  },
  mounted() {
    // 等待虚拟dom挂在完
    setTimeout(this.resizePicture,50);
  }

}
</script>

<style scoped>
body ol li {
  list-style: disc;
  font-size: 10px;
}
</style>
