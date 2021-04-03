<template>
  <div>
    <div class="top">
      <img src="../images/bgc3.jpg" alt="">
      <p>一段一段的往事便组成了人生</p>
      <!--    分类标签-->
      <div class="head" >
        <div   v-for="(item,i) in blogTypes" @click="changeType(i,item.type_name)">
          <div class="type-container">
            <div :class="currentIndex == i ? 'item-type active' : 'item-type' ">{{item.type_name}}</div>
            <div :class="currentIndex == i ? 'type-numbers active' : 'type-numbers'">{{item.num}}</div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "PhotoThop",
  data(){
    return{
      blogTypes:[],
      currentIndex:0,
    }
  },
  created() {
    this.initListBlogType();
  },
  methods:{
    changeType(typeIndex,typeName){
      this.currentIndex = typeIndex;
      this.currentIndex = typeIndex;
      this.$emit("changeType",typeName);
    },
    getListBlogType(){
      this.$axios.get("http://8.129.131.7:8085/blog/blogTypeNum").then((response)=>{
        this.blogTypes = response.data;
      })
    },
    //初始化，当初始化成功时向父组件传递第一个要显示的分类
    initListBlogType(){
      this.$axios.get("http://8.129.131.7:8085/blog/blogTypeNum").then((response)=>{
        this.blogTypes = response.data;
        this.$emit("changeType",response.data[0].type_name);
      })
    }

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
  line-height: 35px;
}
</style>
