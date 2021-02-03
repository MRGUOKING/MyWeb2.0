<template>
<div>
  <div class="articleContent">
    <div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ArticleContent"
}
</script>

<style scoped>

.articleContent{
  width: 80%;
  height: 1000px;
  background-color: rgba(255,255,255,0.8);
  left: 50%;
  transform: translateX(-50%);
  /*top: -100px;*/
  top: 50%;
  position: absolute;
  z-index: 2;
  box-shadow: -3px -3px 5px #322920 ;
}
</style>
