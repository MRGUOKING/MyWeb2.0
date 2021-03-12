<template>
<div>
  <div class="head">
      <div class="type-container" @click="isBlog()">
        <div :class="blog ? 'item-type active' : 'item-type' ">文章分类</div>
        <div :class="blog ? 'type-numbers active' : 'type-numbers'">5</div>
      </div>
      <div class="type-container" @click="isPhoto()">
        <div :class="!blog ? 'item-type active' : 'item-type' ">照片分类</div>
        <div :class="!blog ? 'type-numbers active' : 'type-numbers'">5</div>
      </div>
  </div>
</div>
</template>

<script>
export default {
name: "TypeTop",
  data(){
    return{
      blog:true
    }
  },
  methods:{
    isBlog(){
      if (this.blog == false){
        this.blog = true;
        this.$emit("changeType",true)
      }

    },
    isPhoto(){
      if (this.blog == true){
        this.blog = false;
        this.$emit("changeType",false);
      }
    },

  }
}
</script>

<style scoped>
.type-container{
  display: flex;
  cursor: pointer;
}
.type-container .active{
  border-color: #00b5ad;
  background-color: #eeeeee;
  /*border-right: none;*/
}
.head{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: rgba(255,255,255,0.9);
  border-radius: 5px;
  margin-bottom: 10px;
}
.item-type{
  width: 85px;
  height: 35px;
  border-radius: 5px 0 0 5px;
  border: 1px solid #ccccce;
  text-align: center;
  line-height:  35px;
  color: #626364;
}
.type-numbers{
  width: 30px;
  height: 35px;
  border-radius: 0 5px 5px 0;
  margin-right: 10px;
  border: 1px solid #ccccce;
  border-left: none;
  text-align: center;
  line-height: 30px;
}
</style>
