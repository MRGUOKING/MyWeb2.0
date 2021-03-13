<template>
<div>
  <TypeTop @changeType="changeType"></TypeTop>

<!--  主要内容-->
  <TypeContent v-bind:listBlogs="listBlogs"></TypeContent>
</div>
</template>

<script>
import TypeTop from "./typeComponents/TypeTop";
import TypeContent from "./typeComponents/TypeContent";
export default {
name: "Type",
  components:{
    TypeContent,
    TypeTop
  },
  data(){
    return{
      listBlogs:[]
    }
  },
  methods:{
    changeType(typeName){
      console.log("changeType函数开始执行,typeName是"+typeName)
      this.$axios.get("http://localhost:8083/blog/getBlogByType/"+typeName).then((response)=>{
        this.listBlogs = response.data;
      })
    },
  }
}
</script>

<style scoped>

</style>
