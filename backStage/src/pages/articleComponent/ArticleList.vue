<template>
<div>
  <div class="article-list">
<!--    表单位置-->
    <section>
      <table>
        <thead>
         <tr class="list-tr">
           <th>ID</th>
           <th>标题</th>
           <th>类型</th>
           <th></th>
           <th>状态</th>
           <th>更新时间</th>
           <th>操作</th>
         </tr>
        </thead>
        <tbody>
        <tr class="item-tr" v-for="(item,i) in blogs">
          <th>{{currentPage*10+i+1}}</th>
          <th>{{item.title}}</th>
          <th>{{item.type_name}}</th>
          <th></th>
          <th>{{item.publish == 1 ? '发布' : '草稿'}}</th>
          <th>{{ item.update_time}}</th>
          <th>
            <button @click="deleteArticle(item.id)">删除</button>
            <button @click="editBlog(item)">编辑</button>
          </th>

        </tr >
        </tbody>
      </table>
    </section>
<!--    新增位置-->
    <section class="article-list-bottom">
        <article class="article-all">
          <button class="back" @click="prePage">上一页</button>
          <p>第 <b>{{currentPage+1}}</b> 页，共 <b>{{maxPage}}</b> 页，有 <b>{{totalNumbers}}</b> 篇文章</p>
          <button class="back" @click="nextPage">下一页</button>
        </article>
      <article>
        <button @click="toPublish()">新增</button>
      </article>
    </section>
  </div>
</div>
</template>

<script>
import Article from "../Article";
export default {
  data(){
    return {
      blogs:[],
      page:0,
      currentPage:0,
      maxPage:0,
      totalNumbers:0
    }
  },
name: "ArticleConten",
  components: {Article},
  mounted() {
    this.getBlogByPage(this.currentPage);
    this.getPageNum();
  },
  methods:{
    //删除文章
    deleteArticle(id){
      let sure = confirm("确定要删除这篇文章吗？")
      if (sure){
        this.$axios.get("http://localhost:8083/blog/deleteABlog/"+id,{}).then((response)=>{
          if (response.data.message == 1){
            alert("删除成功!");
            this.getPageNum();
            this.getBlogByPage(this.currentPage);
          }
        })
      }
    },
    getBlogByPage(page){
      this.$axios.get("http://localhost:8083/blog/blogByPage/"+page,{}).then((response)=>{
        this.blogs = response.data;
      })
    },
    prePage(){
      if (this.currentPage == 0){
        alert("已经是第一页");
        return;
      }else {
        this.currentPage--;
        this.getBlogByPage(this.currentPage);
      }
    },
    nextPage(){
      if (this.currentPage+1>=this.maxPage){
        alert("已经是最后一页")
        return ;
      }else {
        this.currentPage++;
        this.getBlogByPage(this.currentPage);
      }
    },
    getPageNum(){
      this.$axios.get("http://localhost:8083/blog//blogPageMessage",{}).then((response)=>{
        this.maxPage = response.data.maxPageNum;
        this.totalNumbers = response.data.totalNumber;
      })
    },
   toPublish(){
     this.$router.push('/publish')
   },
   editBlog(blog){
      this.$router.push({
        path: '/publish',
        query:{
          blog:blog,
          update:1
        }
      })
   }
  }
}
</script>

<style scoped>

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
.article-list{
  width: 80%;
  height: 100px;
  margin: 10px auto;
  background-color: pink;
}

.list-tr{
  box-sizing: border-box;
  /*border-radius: 5px;*/
  padding: 0 15px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9fafb;
  border-radius: 5px 5px 0 0 ;
  border-bottom: 1px solid #e3e5e5;
}

.list-tr th{
  /*width: 80px;*/
  /*background-color: purple;*/
  font-weight: 900;
  flex: 2;
}
.list-tr th:nth-child(3),.list-tr th:nth-child(4),.list-tr th:nth-child(5){
  flex: 1;
  /*background-color: purple;*/
}
.item-tr{
  box-sizing: border-box;
  /*border-radius: 5px;*/
  padding: 0 15px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #e3e5e5;
  /*border-radius: 5px;*/
}
.item-tr th{
  flex: 2;
}
.item-tr th:nth-child(3),.item-tr th:nth-child(4),.item-tr th:nth-child(5){
  flex: 1;
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
