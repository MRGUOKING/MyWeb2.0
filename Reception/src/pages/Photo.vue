<template>
  <div>
<!--    照片的顶部-->
    <PhotoTop/>
<!--    照片主要内容-->
    <PhotoContent/>
  </div>
</template>

<script>
import PhotoTop from "./PhotoComponents/PhotoTop";
import PhotoContent from "./PhotoComponents/PhotoContent";
export default {
  name: "Photo",
  components:{
    PhotoTop,
    PhotoContent
  }
}
</script>

<style scoped>

</style>
