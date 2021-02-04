<template>
<div>
  <article class="article-container">
<!--    导航栏 搜索框-->
    <section class="article-top">
      <input type="text" class="article-input" placeholder="标题" @focus="inputFocus($event)" @blur="inputBlur($event)">
<!--      搜索栏-->
      <div class="type-container">
        <input v-model="inputValue" type="text" class="article-input article-type" readonly placeholder="分类" @focus="inputFocus($event)" @blur="inputBlur($event)">
        <p class="iconfont select">&#xe626</p>
<!--        分类标签-->
        <div class="type-item-container">
          <ul>
            <li>生活</li>
            <li>学习</li>
            <li>3</li>
          </ul>
        </div>
      </div>
      <button class="clear" @click="clear()">clear</button>
      <button class="button-search">搜索</button>
    </section>
<!--    主题内容-->
    <section>

    </section>
  </article>
</div>
</template>

<script>
export default {
name: "Article",
  mounted() {
    let type = document.querySelector(".type-item-container");
    let  input = document.querySelector(".article-type");
    let items = document.querySelectorAll(".type-item-container ul li");
    for (let i = 0; i < items.length; i++) {
      items[i].onclick = ()=>{
        input.value = items[i].textContent;
        this.inputValue = items[i].textContent;
        items[i].parentElement.parentElement.style.display = "none";
      }
    }
    input.onmouseover = ()=>{
      input.nextElementSibling.nextElementSibling.style.display = "block"
    }
    input.onmouseout = ()=>{
      input.nextElementSibling.nextElementSibling.style.display = "none"
    }
    type.onmouseover = function (){
      type.previousElementSibling.previousElementSibling.classList.add("focus");
      type.style.display = "block";
    }
    type.onmouseout =() =>{
      type.previousElementSibling.previousElementSibling.classList.remove("focus");
      type.style.display ="none";
    }
  },
  methods:{
    inputFocus: function (input){
      console.log(this)
      input.currentTarget.classList.add("class","focus");
    },
    inputBlur: function (input){
      input.currentTarget.classList.remove("class","focus");
    },
    clear(){
      console.log("进入clear函数");
      console.log("之前的inputValue"+this.inputValue);
      this.inputValue = '';
    }
  },
  data(){
  return{
    inputValue:''
  }
  }
}
</script>

<style scoped>
.article-container{
  width: 80%;
  height: 300px;
  margin: 130px auto;
  /*background-color: pink;*/
}

.article-top{
  display: flex;
  justify-content: center;
  /*background-color: purple;*/
  width: 100%;
  height: 110px;
  border-radius: 5px;
  align-items: center;
  background-color: #f3f4f5;
}

.article-input{
  box-sizing: border-box;
  width: 200px;
  height: 35%;
  margin: 0 5px;
  border-radius: 5px;
  outline: none;
  padding: 0 10px;
  font-size: 15px;
  font-weight: 50;
  border: 1px solid #dededf;
}
.article-container .article-top .focus{
  border: 1px solid #96c8da;
  border-radius: 5px 0 0px 0;
}
.type-container{
  position: relative;
  width: 200px;
  height: 35%;
}
.article-top .article-type{
  border-radius: 5px 0 0 5px;
  width: 100%;
  height: 100%;
}

.article-top .article-type:hover{
  cursor: pointer;
  border: 1px solid #96c8da;
  border-radius: 5px 0 0px 0;
}

.article-top .select{
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}
.article-top select{
  position: absolute;
  left: -40px;
  top: 0;
}
.article-top .clear{
  height: 35%;
  width: 60px;
  border-radius: 0 5px 5px 0;
  border: none;
  cursor: pointer;
  background-color: #e0e1e2;
  margin-left: -6px;
  outline: none;
}
.article-top .clear:hover{
  background-color: #cacbcd;
}
.button-search{
  margin: 0 15px;
  border-radius: 5px;
  border: 1.5px solid #00b5ad;
  width: 65px;
  height: 30px;
  cursor: pointer;
  color: #00b5ad;
  outline: none;
}
.button-search:hover{
  border: 1.5px solid #009c95;
  color: #009c95;
}

.type-item-container{
  width: 198px;
  /*height: 100px;*/
  /*background-color: pink;*/
  position: absolute;
  left: 5px;
  transition: all 0.5s;
  border: 1px solid #96c8da;
  background-color: #fff;
  border-radius: 0 0 5px 5px;
  display: none;
}
.type-item-container:hover{

}

.type-item-container ul li{
  padding: 5px 0 5px 15px;
  background-color: #fff;
  border-bottom: 1px;
  border-color: #fafafa;
}
.type-item-container ul li:hover{
  background-color: #f2f2f2;
  cursor: pointer;
}
</style>
