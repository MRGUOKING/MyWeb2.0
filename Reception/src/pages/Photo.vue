<template>
  <div>
<!--    照片的顶部-->
    <PhotoTop @changeType="changeType"></PhotoTop>
<!--    照片主要内容-->
    <PhotoContent v-bind:photos="photos"></PhotoContent>
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
  },
  methods:{
    changeType(type){
      this.$axios.get("http://8.129.131.7:8085/photo/getPhotoByType/"+type).then((response)=>{
        this.photos = response.data;
      })
    }

  },
  data(){
    return{
      photos:[]
    }
  }
}
</script>

<style scoped>

</style>
