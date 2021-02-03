<template>
<div>
<!--  文章头部-->
  <ArticleTop/>
<!--  文章主要内容-->
  <ArticleContent/>
</div>
</template>

<script>
import ArticleTop from "./articleComponents/ArticleTop";
import ArticleContent from "./articleComponents/ArticleContent";
export default {
  name: "Article",
  components:{
    ArticleTop,
    ArticleContent
  }
}
</script>

<style scoped>
div{

}
</style>
