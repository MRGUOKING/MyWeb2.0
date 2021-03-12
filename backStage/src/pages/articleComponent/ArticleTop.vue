<template>
<div>
  <article class="article-container">
    <!--    导航栏 搜索框-->
    <section class="article-top">
      <input v-model="title" type="text" class="article-input" placeholder="标题">
      <!--      搜索栏-->
      <div class="type-container">

        <input v-model="inputValue" type="text" class="article-input article-type" readonly placeholder="分类">
        <p class="iconfont select">&#xe626</p>
        <!--        分类标签-->
        <div class="type-item-container">
          <ul>
            <li v-for="(item,i) in types" @click="clickType(item.name)">{{item.name}}</li>
          </ul>
        </div>
      </div>
      <button class="clear" @click="clear()">clear</button>
      <button class="button-search">搜索</button>
    </section>
  </article>
</div>
</template>

<script>
export default {
name: "ArticleTop",
  data(){
  return{
    title:'',
    types:[],
    inputValue:'',
  }
  },
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
    this.getTypeList();
  },
  methods:{
  clickType(typeName){
    this.inputValue = typeName;
  },
    getTypeList(){
      this.$axios({
        url:"http://localhost:8083/type/listType",
        method:'get'
      }).then((response)=>{
        this.types = response.data;
      })
    },
    clear(){
      this.inputValue = '';
    }
  },
}
</script>

<style scoped>
.article-container{
  width: 80%;
  margin: 130px auto;
  margin-bottom: 50px;
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
  /*background-color: #f3f4f5;*/
}

.article-input{
  /*background-color: pink;*/
  box-sizing: border-box;
  width: 200px;
  height: 35%;
  margin: 0 5px;
  border-radius: 5px;
  outline: none;
  padding: 0 10px;
  font-size: 20px;
  font-weight: 50;
  border: 5px solid pink;
  font-family: 'STKaiti';
}
.article-container .article-top .focus{
  border: 5px solid pink;
  border-radius: 5px 0 0 0;
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
  /*border: 1px solid #96c8da;*/
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
  box-sizing: border-box;
  width: 200px;
  /*height: 100px;*/
  /*background-color: pink;*/
  position: absolute;
  left: 5px;
  transition: all 0.5s;
  border: 5px solid #f6acb6;
  border-top: none;
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
