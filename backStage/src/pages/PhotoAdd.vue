<template>
<div>
  <div class="photoAdd-container">
<!--    上方功能按钮-->
    <section class="type-picture-container">
      <div class="type-container">

        <input v-model="inputValue" ref="typeInput" type="text" class="article-input article-type" readonly placeholder="分类">
        <p class="iconfont select">&#xe626</p>
        <!--        分类标签-->
        <div class="type-item-container">
          <ul>
            <li v-for="(item,i) in typeContent" @click="changeType(item.name)">{{item.name}}</li>
          </ul>
        </div>
      </div>
      <div class="first-picture" v-show="!is_edit">
        <label for="picture">图片</label>
        <div class="file-container">
          <button class="file-button">添加图片</button>
          <input type="file" v-show="!is_edit" multiple="multiple" id="picture" ref="inputer" class="choose-file" accept="image/*"
                 @change="addImg($event)"
          >
        </div>

      </div>
      <div class="place">
        <div class="place-label">地点</div>
        <div class="place-input"><input type="text" v-model="address" placeholder="请输入地点"></div>
      </div>
      <div class="time">
        <input type="date" v-model="pictureDate" ref="date_info"  @click="inputChange()"  class="date-input">
      </div>
      <div class="is-private">
        <div class="choose-private">
          <input type="radio" name="private" value="0"  v-model="isPrivate" id="public" checked><label for="public">公开</label>
        </div>
        <div class="choose-private">
          <input type="radio" name="private"  value="1" v-model="isPrivate" id="private"><label for="private">私密</label>
        </div>
      </div>
      <div class="publish-buttons">
<!--        <button>保存</button>-->
        <button @click=" is_edit ==true ? updateImg() : addImgToBack() " v-text="is_edit ? '修改':'上传' ">上传</button>
      </div>
    </section>
<!--  如果是新增  展示图片的部分-->
    <section class="show-pictures" v-if="imgs.length>0">
      <div class="picture-preview"  v-for="(item , i) in imgs" :key="i">
        <img :src="item.src" alt="">
<!--        <img src="./images/bgc.jpg" alt="">-->
        <div class="description">
          <label>名称</label>
          <input type="text" v-model="item.name">
        </div>
        <p class="iconfont deleteIcon" @click="delImg(i)">&#xe51b</p>
      </div>
    </section>
<!--    如果是修改-->
    <section class="show-pictures" v-if="is_edit">
      <div class="picture-preview">
        <img :src="url" alt="">
        <!--        <img src="./images/bgc.jpg" alt="">-->
        <div class="description">
          <label>名称</label>
          <input type="text" v-model="name">
        </div>
      </div>
    </section>

  </div>

</div>
</template>

<script>
export default {
  data(){
    return{
      avatar: require('./images/bgc.jpg'),
      imgs:[],
      //返回后台的数据
      imgsBack:[],
      //分类数据
      inputValue:"",
      pictureDate:"",
      //分类数组
      typeContent:[],
      //是否私密
      isPrivate:0,
      address:"",
      //判断是否时photo_id
      photo_id:-1,
      is_edit: false,
      url:'',
      name:''

    }
  },
  created() {
    this.getParams()
  },
  name: "AddPhoto",
  mounted() {

    let type = document.querySelector(".type-item-container");
    let  input = document.querySelector(".article-type");
    let items = document.querySelectorAll(".type-item-container ul li");
      // for (let i = 0; i < items.length; i++) {
      //   items[i].onclick = ()=>{
      //     input.value = items[i].textContent;
      //     this.inputValue = items[i].textContent;
      //     items[i].parentElement.parentElement.style.display = "none";
      //   }
      // }
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

    this.getListType();
    this.setDefaultDate();
  },
  methods:{

    updateImg(){
      let photo_update = {
        photo_id:this.photo_id,
        url: this.url,
        name:this.name,
        picture_date: this.pictureDate,
        type:this.inputValue,
        is_private: this.isPrivate,
        address:this.address
      }
      this.$axios.post("http://localhost:8083/photo//updatePhoto",photo_update).then((response)=>{
        alert("修改成功!");
      })
    },
    getParams(){
      let photo = this.$route.query.photo;
      if (photo != undefined){
        //是修改
        this.is_edit = true;
        this.inputValue = photo.type;
        this.pictureDate = photo.picture_date;
        this.isPrivate = photo.is_private;
        this.address = photo.address;
        this.photo_id = photo.photo_id;
        this.url = photo.url;
        this.name = photo.name;
      }
    },
    /**
     * 点击li修改type
     */
    changeType(typeName){
      // input.value = items[i].textContent;
      // this.inputValue = items[i].textContent;
      // items[i].parentElement.parentElement.style.display = "none";
      this.$refs.typeInput.value = typeName;
      this.inputValue = typeName;
    },
    getListType(){
      this.$axios({
        url:"http://localhost:8083/type/listPhotoType",
        method:'get'
      }).then((response)=>{
        this.typeContent = response.data;
        if(!this.is_edit){
          this.inputValue = this.typeContent[0].name;
        }
      })
    },
    addImgToBack(){
      console.log("进入photo函数!")
      let file = this.imgsBack;
      if (file.length == 0){
        alert("没有要上传的文件")
        return ;
      }
      let length = file.length;
      for(let i=0;i<length;i++){
        let photo = {
          name:this.imgs[i].name,
          picture_date: this.pictureDate,
          type:this.inputValue,
          is_private: this.isPrivate,
          address:this.address
        }
        this.addFile(file[i],photo);
      }
      //删除上传的本地数组文件
      file.splice(0,length);
      this.imgs.splice(0,this.imgs.length);
      alert("上传成功")
    },


    setDefaultDate(){
      var myDate = new Date(), Y = myDate.getFullYear(), M = myDate.getMonth() + 1, D = myDate.getDate();
      //处理月是一位的情况
      if((M + '').length == 1){
        M = '0' + (M + '');
      }
      //处理日是一位的情况
      if((D + '').length == 1){
        D = '0' + (D + '')
      }
      var curDay = Y + '-' + M + '-' + D;
      this.pictureDate = curDay;
    },
    addImg(e){
      let file = e.target.files;
      let that = this;
      for (let i = 0; i < file.length; i++) {
        this.imgsBack.push(file[i]);
        let reader = new FileReader();
        reader.onload = function (e){
          let src_content = e.target.result;
          let name_content = file[i].name.substring(0,file[i].name.lastIndexOf("."));
          that.imgs.push({src:src_content,name:name_content});
        }
        reader.readAsDataURL(file[i]);
        //把图片添加到服务器上
      }
    },
    delImg(i){
      this.imgs.splice(i,1);
      this.imgsBack.splice(i,1);
    },
    //添加图片到服务器
    addFile(file,photo){
      let formData = new FormData();
      formData.append("image",file);
      this.$axios({
        url: "http://localhost:8083/img/addImg",
        method: 'post',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then((response)=>{
        let url = response.data;
        photo.url = url;
        this.$axios({
          url:"http://localhost:8083/photo/addPhoto",
          method: 'post',
          data:photo,
          headers: {'Content-Type':'application/json'}
        }).then((response)=>{
        })
        return url;
        // this.$refs.md.$img2Url(pos,url);
      })
    }
  }
}
</script>

<style scoped>
.photoAdd-container{
  width: 80%;
  margin: 200px auto;
  background-color: #f3f4f5;
  border-radius: 5px;
}

.type-picture-container{
  /*overflow: visible;*/
  box-sizing: border-box;
  margin: 0 auto;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f6f7;
}

.article-type{
  border-radius: 5px;
  width: 100%;
  height: 100%;
}

.article-type:hover{
  cursor: pointer;
  /*border: 1px solid #96c8da;*/
  border-radius: 5px 5px 0px 0;
}



.article-input{
  /*background-color: pink;*/
  box-sizing: border-box;
  width: 200px;
  height: 100%;
  /*margin: 0 5px;*/
  border-radius: 5px;
  outline: none;
  padding: 0 10px;
  font-size: 20px;
  font-weight: 50;
  /*border: 5px solid pink;*/
  font-family: 'STKaiti';
}
.first-picture{
  display: flex;
  text-align: center;
  align-items: center;
  width: 10%;
  height: 80%;
  background-color: #fff;
  margin: 0 30px;
  border-radius: 5px;
}
.first-picture label{
  box-sizing: border-box;
  width: 100px;
  height: 100%;
  /*background-color: pink;*/
  /*margin: 0 10px 0 0;*/
  border: 1px solid #00b5ad;
  padding: 5px 0;
  border-radius: 5px 0 0 5px;
  text-align: center;
  line-height: 150%;
  color: #00b5ad;
  font-weight: 600;
  cursor: pointer;
}
.file-container{
  /*cursor: pointer;*/
  width: 100%;
  height: 100%;
  position: relative;
}

.file-button{
  position: absolute;
  left: 0;
  top: 0;
  width: 110%;
  height: 100%;
  outline: none;
  border-radius: 0 5px 5px 0px;
  outline: none;
  border: 1px solid #00b5ad;
  background:linear-gradient(to bottom right, #a3bcb1,#37b9e9);/*设置按钮为渐变颜色*/
  /*cursor: pointer;*/

}
.choose-file{
  background-color: pink;
  width: 100%;
  height: 100%;
  outline: none;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
}

.is-private{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 10%;
  height: 80%;
  border-radius: 5px;
}

.choose-private{
  display: flex;
  justify-content: start;
  margin: 0 5px 0 5px;
}
.choose-private label{
  font-weight: 900;
}

.publish-buttons{
  width: 25%;
  height: 80%;
  display: flex;
  position: center;
  margin-left: 100px;
}

/*.publish-buttons button:nth-child(1){*/
/*  width: 30%;*/
/*  margin: 0 5px;*/
/*  height: 100%;*/
/*  cursor: pointer;*/
/*  border-radius: 5px;*/
/*  outline: none;*/
/*  border: none ;*/
/*  !*background-color: #00b5ad;*!*/
/*  background-color: #e0e1e2;*/
/*  font-weight: 900;*/
/*}*/
/*.publish-buttons button:nth-child(1):hover{*/
/*  background-color: #cacbcd;*/
/*}*/
.publish-buttons button:nth-child(1){
  width: 30%;
  margin: 0 5px;
  height: 100%;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  border: none ;
  background-color: #00b5ad;
  font-weight: 900;
}
.publish-buttons button:nth-child(1):hover{
  background-color: #009c95;
}

.picture-preview{
  margin: 10px 15px;
  width: 20%;
  height: 200px;
  background-color: #fff;
  position: relative;
  border-radius:5px;
}
.picture-preview img{
  width: 100%;
  height: 80%;
}

.picture-preview .description{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.picture-preview .description label{
  /*flex: 2;*/
  /*flex-shrink: 0;*/
  /*width: 30%;*/
  /*background-color: purple;*/
  font-size: 15px;
  margin-right: 5px;
  font-weight: 800;
}
.picture-preview .description input{
  box-sizing: border-box;
  text-indent: 10px;
  border: 1px solid pink;
  outline: none;
  border-radius: 5px;
  margin-right: 2px;
  /*padding: 0 5px;*/
  /*background-color: pink;*/
  height: 30px;
  /*flex-shrink: 0;*/
}

.type-item-container{
  opacity: 0.8;
  box-sizing: border-box;
  width: 200px;
  /*height: 100px;*/
  /*background-color: pink;*/
  position: absolute;
  /*left: 5px;*/
  top: 35px;
  transition: all 0.5s;
  /*border: 5px solid #f6acb6;*/
  border-top: none;
  background-color: #fff;
  border-radius: 0 0 5px 5px;
  display: none;
  z-index: 1000;
}
.type-container{
  position: relative;
  width: 200px;
  height: 80%;
  border: 3px solid pink;
  border-radius: 5px;
  /*margin-left: -5px;*/
}

.type-container  .focus{
  /*border: 5px solid pink;*/
  border-radius: 5px 5px 0 0;
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

.select{
  position: absolute;
  top: 50%;
  right: 4px;
  transform: translateY(-50%);
}

.show-pictures{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: pink;
}

.deleteIcon{
  position: absolute;
  top: 1px;
  right: 1px;
  cursor: pointer;
  color: #c4c7ce;
}
.place{
  display: flex;
  justify-content: start;
  align-items: center;
  width: 15%;
  height: 70%;
  border: 1px solid #00b5ad;
  border-radius: 5px;
  margin-right: 5px;
  margin-left: 10px;
}
.place .place-label{
  height: 100%;
  width: 25%;
  line-height: 30px;
  /*background-color: purple;*/
  font-size: 15px;
  text-align: center;
  border-right: 1px solid #00b5ad;
  font-weight: 800;
  color: #00b5ad;
}
.place .place-input{
  width: 75%;
  height: 100%;
  /*background-color: pink;*/
  display: flex;
  justify-content: center;
  align-items: center;
}

.place-input input{
  width: 100%;
  height: 80%;
  /*background-color: purple;*/
  background-color: #f5f6f7;
  outline: none;
  text-indent: 5px;
}

.time{
  /*background-color: purple;*/
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.date-input{
  text-indent: 1px;
  border-radius: 5px;
  font-weight: 800;
  font-size: 15px;
  height: 80%;
  width: 80%;
  outline: none;
}
</style>
