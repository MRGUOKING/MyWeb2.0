<template>
<div>
  <div class="head">
      <div style="display: flex">
        <div class="item-type">文章分类</div>
        <div class="type-numbers">5</div>
      </div>
      <div style="display: flex">
        <div class="item-type">照片分类</div>
        <div class="type-numbers">5</div>
      </div>
  </div>
</div>
</template>

<script>
export default {
name: "TypeTop"
}
</script>

<style scoped>
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
