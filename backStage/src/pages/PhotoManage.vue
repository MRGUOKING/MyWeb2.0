<template>
<div>
  <div class="article-list">
    <!--    表单位置-->
    <section>
      <table>
        <thead>
        <tr class="list-tr">
          <th>ID</th>
          <th>图片名称</th>
          <th>时间</th>
          <th>地点</th>
          <th>分类</th>
          <th>缩略图</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr class="item-tr" v-for="(item,i) in photos">
          <th>{{currentPage*10+i+1}}</th>
          <th>{{item.name}}</th>
          <th>{{item.picture_date}}</th>
          <th>{{item.address}}</th>
          <th>{{item.type}}</th>
          <th class="img-th"><img :src="item.url" alt=""></th>
          <th>
            <button @click="deleteAPhoto(item.photo_id)">删除</button>
            <button @click="editPhoto(item)">编辑</button>
          </th>

        </tr>

        </tbody>
      </table>
    </section>
    <!--    新增位置-->
    <section class="article-list-bottom">
      <article class="article-all">
        <button class="back" @click="prePage">上一页</button>
        <p>第 <b>{{currentPage+1}}</b> 页，共 <b>{{maxPage}}</b> 页，有 <b>{{totalPhotos}}</b> 张图片</p>
        <button class="back" @click="nextPage">下一页</button>
      </article>
      <article>
        <button @click="toPhotoAdd()">新增</button>
      </article>
    </section>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      photos:[],
      currentPage:0,
      maxPage:0,
      totalPhotos:0,
    }
  },
name: "PhotoManage",
  methods:{
    deleteAPhoto(photo_id){
      let res = confirm("确定删除这张图片吗?")
      if (res){
        this.$axios({
          url:"http://localhost:8083/photo/deleteAPhoto/"+photo_id,
          method:"get"
        }).then((response)=>{
          if (response.data.message == 1){
            this.getPhotoMessage();
            alert("删除成功!")
          }
        })
      }
    },
  toPhotoAdd(){
    this.$router.push('/photoAdd');
  },
    listPhotos(currentPage,size){
      this.$axios({
        url: "http://localhost:8083/photo/photoBypage/"+currentPage,
        method:'get',
        params:{
          size:size
        }
      }).then((response)=>{
        this.photos = response.data;
      })
    },
    prePage(){
      if (this.currentPage == 0){
        alert("已经是第一页!");
        return ;
      } else {
        this.currentPage--;
        this.listPhotos(this.currentPage,10)
      }
    },
    nextPage(){
    if (this.currentPage >= this.maxPage-1){
      alert("已经是最后一页");
      return ;
    } else {
      this.currentPage++;
      this.listPhotos(this.currentPage,10);
    }
    },
    getPhotoMessage(){
      this.listPhotos(this.currentPage,10);
      this.$axios({
        url: "http://localhost:8083/photo/photoNumMessage",
        method:'get'
      }).then((response)=>{
        this.maxPage = response.data.maxPageNum;
        this.totalPhotos = response.data.totalNumber;
      })
    },
    editPhoto(photo){
      this.$router.push({
        path:'/photoAdd',
        query:{
          photo:photo
        }

      })
    }
  },
  mounted() {
    this.getPhotoMessage();
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
  margin: 250px auto;
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
.list-tr th:nth-child(1),.list-tr th:nth-child(4),.list-tr th:nth-child(5){
  flex: 1;
  /*background-color: pink;*/
}
.item-tr{
  box-sizing: border-box;
  /*border-radius: 5px;*/
  padding: 0 15px;
  width: 100%;
  height: 90px;
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
.item-tr th:nth-child(1),.item-tr th:nth-child(4),.item-tr th:nth-child(5){
  flex: 1;
  /*background-color: purple;*/
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
.item-tr th img{
  margin-top: 5px;
  width: 50%;
  height: 90%;
}

.item-tr .img-th{
  height: 100%;
  width: 100%;
}

.test{

}
</style>
