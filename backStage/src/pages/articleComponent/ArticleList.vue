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
           <th>推荐</th>
           <th>状态</th>
           <th>更新时间</th>
           <th>操作</th>
         </tr>
        </thead>
        <tbody>
        <tr class="item-tr">
          <th>1</th>
          <th>标题</th>
          <th>类型</th>
          <th>是</th>
          <th>发布</th>
          <th>2021-2-6 17：41</th>
          <th>
            <button>删除</button>
            <button>编辑</button>
          </th>

        </tr>
        <tr class="item-tr">
          <th>2</th>
          <th>标题</th>
          <th>类型</th>
          <th>是</th>
          <th>发布</th>
          <th>2021-2-6 17：41</th>
          <th>
            <button>删除</button>
            <button>编辑</button>
          </th>

        </tr>
        </tbody>
      </table>
    </section>
<!--    新增位置-->
    <section class="article-list-bottom">
        <article class="article-all">
          <button class="back">上一页</button>
          <p>第 <b>1</b> 页，共 <b>2</b> 页，有 <b>11</b> 篇文章</p>
          <button class="back">下一页</button>
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
name: "ArticleConten",
  components: {Article},
  methods:{
   toPublish(){
     this.$router.push('/publish')
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
