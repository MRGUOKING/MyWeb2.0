<template>
<div>
  <div class="typeInput-container">
<!--    增加input-->
    <section class="addType-container">
      <label>名称</label>
      <input type="text" placeholder="分类名称">
    </section>
    <section class="addType-buttons">
      <button>返回</button>
      <button>添加</button>
    </section>
  </div>
</div>
</template>

<script>
export default {
name: "TypeInput"
}
</script>

<style scoped>
.typeInput-container{
  height: 500px;
  width: 80%;
  /*background-color: pink;*/
  margin: 150px auto;
}
.addType-container{

  display: flex;
  justify-content: center;
}
.addType-container label{
  height: 35px;
  width: 50px;
  box-sizing: border-box;
  border: 1px solid #00b5ad;
  border-radius: 5px 0 0 5px;
  text-align: center;
  line-height: 35px;
  background-color: #fff;
  font-weight: 900;
}
.addType-container input{
  width: 40%;
  height: 35px;
  border: none;
  outline: none;
  padding: 0 15px;
  border-radius: 0 5px 5px 0;
}

.addType-buttons{
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  /*background-color: purple;*/
  margin: 10px 0;
}

.addType-buttons button:nth-child(1){
  width: 10%;
  margin: 0 5px;
  height: 100%;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  border: none ;
  /*background-color: #00b5ad;*/
  background-color: #e0e1e2;
  font-weight: 900;
}
.addType-buttons button:nth-child(1):hover{
  background-color: #cacbcd;
}
.addType-buttons button:nth-child(2){
  width: 10%;
  margin: 0 5px;
  height: 100%;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  border: none ;
  background-color: #00b5ad;
  font-weight: 900;
}
.addType-buttons button:nth-child(2):hover{
  background-color: #009c95;
}
</style>
