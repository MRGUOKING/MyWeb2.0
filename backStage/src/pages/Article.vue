<template>
<div>
  <ArticleTop/>
  <ArticleList/>
</div>
</template>

<script>
import ArticleTop from "./articleComponent/ArticleTop";
import ArticleList from "./articleComponent/ArticleList";
export default {
name: "Article",
  components:{
    ArticleList,
    ArticleTop
  }
}
</script>

<style scoped>
</style>
