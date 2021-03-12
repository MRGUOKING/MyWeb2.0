<template>
<div>
  <div class="typeInput-container">
<!--    增加input-->
    <section class="addType-container">
      <label>名称</label>
      <input type="text" placeholder="分类名称" v-model="name">
    </section>
    <section class="addType-buttons">
      <button @click="$router.back()">返回</button>
      <button @click="is_update ? updateType():addType() ">{{is_update ? '修改': '添加'}}</button>
    </section>
  </div>
</div>
</template>

<script>
export default {
name: "TypeInput",
  data(){
    return{
      is_update: false,
      //分类的id
      type_id:-1,
      //种类分类
      code:0,
      //种类名称
      name:""
    }
  },
  created() {
    this.getParams();
  },
  methods:{
  getParams(){
    let type = this.$route.query.type;
    // console.log("进入getParams");
    if (type == undefined)
      return ;
    this.type_id = type.id;
    this.code = type.code;
    this.name = type.name;
    this.is_update = true;
  },

    addType(){
      if (this.name == "")
        alert("请输入分类名称!")
      if (!this.is_update){
        http://localhost:8083/photo/photoNumMessage
        this.$axios.post("http://localhost:8083/type/addType",{
          name:this.name,
          code:this.code
        }).then((response)=>{
          response.data.message == 1 ? alert("添加成功") :alert("添加失败")
        })
      }
    },
    updateType(){
      if (this.name == "")
        alert("请输入分类名称!")
      if (this.is_update){
          this.$axios.post("http://localhost:8083/type/updateType",{
            name:this.name,
            code:this.code,
            id:this.type_id
          }).then((response)=>{
            response.data.message == 1 ? alert("修改成功") :alert("修改失败")
          })
      }
    }

  }
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
