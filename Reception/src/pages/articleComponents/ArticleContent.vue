<template>
<div>
  <div class="articleContent">
    <div v-html="blog.description" class="markdown-body" ref="description">
    </div>
    <div class="end">
      <div class="line"></div>
      <p class="end-text">END</p>
      <div class="line"></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ArticleContent",
  props:['blog'],
  created() {
    this.getParams();
  },
  mounted() {
    // setTimeout(this.resizePicture,100);
  },
  updated() {
    let description = this.$refs.description;
    description.classList.add("markdown-body");
  },
  methods:{
    getParams(){
      let routerBlog = this.$route.query.blog;
      console.log(routerBlog);
      this.blog = routerBlog;
    },
    resizePicture(){
      let imgs = document.getElementsByTagName("img");
      for (let i = 0; i < imgs.length; i++) {
        console.log("length")
        console.log(imgs[i].naturalWidth)
        if (imgs[i].naturalWidth> 1125){
          imgs[i].width = 1125;
        }
      }
    },
    resizeCss(){

    }
  }
}
</script>

<style scoped>
@import "markdown文章样式/css/github-markdown.css";
.end{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  margin: 40px auto;
  /*background-color: pink;*/
}

.end .end-text{
  font-weight: 900;
  transform: translateY(-20%);
}
.end .line{
  width: 45%;
  height: 2px;
  background-color: black;
}
.articleContent{
  box-sizing: border-box;
  width: 80%;
  background-color: rgba(255,255,255,0.8);
  left: 50%;
  transform: translateX(-50%);
  /*top: -100px;*/
  top: 50%;
  position: absolute;
  z-index: 2;
  box-shadow: -3px -3px 5px #322920 ;
  padding: 50px;
}

.articleContent >>> ol >li{
  padding: 10px 0;
  list-style: disc;
  font-size: 20px;
}

.articleContent >>> li >ol{
  text-indent: 30px !important;
  list-style-type: circle;
}

.articleContent >>> li >ol li::marker{
  content: ".";
  display: inline-block;
  font-weight: 900 !important;
  font-size: 30px;
  text-indent: 20px !important;
  text-align: right !important;

}

.articleContent >>> img{
  max-width: 1125px;
}

.articleContent >>> p{
  padding: 30px 0;
  font-size: 20px;
}

</style>
