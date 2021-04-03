<template>
<div>
  <div class="type-container">
<!--    确定是文章还是照片分类-->
    <TypeTop @changeType="changeType"></TypeTop>
    <section>
      <table>
        <thead>
        <tr class="list-tr">
          <th>ID</th>
          <th>名称</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr class="item-tr" v-for="(item,i) in blog ? blogTypes : photoTypes">
          <th>{{i+1}}</th>
          <th>{{item.name}}</th>
          <th>
            <button @click="deleteType(item.id)">删除</button>
            <button @click="edit(item)">编辑</button>
          </th>

        </tr>
        </tbody>
      </table>
    </section>
<!--    新增列表-->
    <section class="article-list-bottom">
      <article>
        <button @click="toTypeInput()">新增</button>
      </article>
    </section>
  </div>
</div>
</template>

<script>
import TypeTop from "./TypeManageComponent/TypeTop";
export default {
  data(){
    return{
      blog:true,
      blogTypes:[],
      photoTypes:[],
    }
  },
  created() {
    this.getListPhotoType();
    this.getListBlogType();
  },
  name: "TypeManage",
  methods:{
    edit(type){
      this.$router.push({
        path:'/typeInput',
        query:{
          type:type,
        }
      })
    },
    deleteType(typeId){
      //如果是文章
        if (confirm("确定要删除此分类嘛?")){
          this.$axios.get("http://8.129.131.7:8085/type/deleteType/"+typeId).then((response)=>{
            console.log(response);
            alert("删除成功!");
            this.blog ? this.getListBlogType(): this.getListPhotoType();
          })
        }
    },
    getListPhotoType(){
      this.$axios.get("http://8.129.131.7:8085/type/listPhotoType").then((response)=>{
        this.photoTypes = response.data;
      })
    },
    getListBlogType(){
      this.$axios.get("http://8.129.131.7:8085/type/listType").then((response)=>{
        this.blogTypes = response.data;
      })
    },
    changeType(isBlog){
      this.blog = isBlog
    },
  toTypeInput(){
    this.$router.push("/typeInput");
  }
  },
  components:{
  TypeTop
  }
}
</script>

<style scoped>

.type-container{
  width: 60%;
  height: 100px;
  margin: 150px auto;
  background-color: pink;
}


section{
  width: 100%;
}
table{
  width: 100%;
  display: flex;
  flex-direction: column;
}
thead{
  width: 100%;
}
.list-tr{
  box-sizing: border-box;
  /*border-radius: 5px;*/
  padding: 0 50px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9fafb;
  border-radius: 5px 5px 0 0 ;
  border-bottom: 1px solid #e3e5e5;
}
.list-tr th:nth-child(1){
  margin-left: -30px;
}
.list-tr th:nth-child(2){
  margin-left: -30px;
}

.list-tr th{
  /*width: 80px;*/
  /*background-color: purple;*/
  font-weight: 900;
}

.item-tr{
  box-sizing: border-box;
  /*border-radius: 5px;*/
  padding: 0 20px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #e3e5e5;
  /*border-radius: 5px;*/
}

.item-tr th:nth-child(2){
  margin-left: 38px;
}

.item-tr button:nth-child(1){
  width: 60px;
  height: 30px;
  border: 1px solid #00b5ad;
  outline: none;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
}
.item-tr button:nth-child(1):hover{
  border: 1px solid #009c95;
}

.item-tr button:nth-child(2){
  width: 60px;
  height: 30px;
  border: 1px solid #db2828;
  /*box-shadow: 1px 1px 1px #db2828 inset;*/
  outline: none;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
}
.item-tr button:nth-child(2):hover{
  border: 1px solid #db2828;
}

.article-list-bottom{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f9fafb;
}

.article-list-bottom article{
  padding: 10px 0 10px 0;
}

.article-list-bottom article button{
  width: 100px;
  height: 35px;
  background-color: #00b5ad;
  outline: none;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 17px;
  font-weight: 900;
  cursor: pointer;
}
.article-list-bottom article button:hover{
  background-color: #009c95;
}
.article-all{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  font-weight: 300;

}
.article-list-bottom .back{
  background-color: #f9fafb;
  color: #4183c4;
}

.article-list-bottom .back:hover{
  background-color: #f9fafb;
}
</style>
