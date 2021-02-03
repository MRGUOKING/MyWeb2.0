<template>
  <div>
    <div class="top">
      <img src="../images/bgc3.jpg" alt="">
      <p>一段一段的往事便组成了人生</p>
      <!--    分类标签-->
      <div class="head">
        <router-link to="/photoType">
          <div style="display: flex">
            <div class="item-type">2021</div>
            <div class="type-numbers">5</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "PhotoThop"
}
</script>

<style scoped>
.top{
  width: 100%;
  height: 300px;
  position: relative;
}
.top p{
  font-size: 50px;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-family: 'STXingkai';
}
.top img{
  width: 100%;
  height: 100%;
}
.top .head{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 110px;
  background-color: rgba(255,255,255,0.9);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 5px;
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
