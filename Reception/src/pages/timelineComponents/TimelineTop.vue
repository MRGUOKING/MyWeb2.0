<template>
  <div>
    <div class="top">
      <img src="../images/bgc3.jpg" alt="">
      <p>时间是一条无法逆流的河</p>
      <!--    分类标签-->
      <div class="head">
          <div  v-for="(item,i) in years" class="type-container" @click="changeYear(i,item.year)">
            <div :class="currentIndex == i ? 'item-type active' : 'item-type' ">{{item.year}}</div>
            <div :class="currentIndex == i ? 'type-numbers active' : 'type-numbers'">{{item.num}}</div>
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
      years:[],
      //当前的年份索引
      currentIndex:0
    }
  },
  created() {
    this.getAllYears();
  },
  methods:{
    getAllYears(){
      this.$axios.get("http://8.129.131.7:8085/blog/getAllYears").then((response)=>{
        this.years = response.data;
        this.$emit("changYear",this.years[0].year)
      })
    },
    changeYear(i,year){
      this.currentIndex = i;
      this.$emit("changYear",year);
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
  line-height: 30px;
}
</style>
