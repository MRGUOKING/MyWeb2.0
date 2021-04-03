<template>
<div>
  <div class="publish-container">
<!--    标题部分-->
  <section class="title-container">
    <input type="text" placeholder="标题" v-model="title">
  </section>
<!--    正文部分-->
  <section class="content-container">
    <mavon-editor
      :toolbars="toolbars"
      @imgAdd="addImg"
      @imgDel="delImg"
      ref="md"
      v-model = "description"
    />
  </section>
<!--    -->
  <section class="type-picture-container">

    <div class="type-container">

      <input v-model="typeName" ref="typeInput" type="text" class="article-input article-type" readonly placeholder="分类">
      <p class="iconfont select">&#xe626</p>
      <!--        分类标签-->
      <div class="type-item-container">
        <ul>
          <li v-for="(item,i) in types" @click="clickType(item.name)">{{item.name}}</li>
        </ul>
      </div>
    </div>
    <div class="first-picture">
      <label for="picture">首图</label>
      <div class="file-container">
        <button class="file-button">选择首图</button>
        <input type="file" id="picture" ref="inputer" class="choose-file" accept="image/*"
               @change="addFirstPicture($event)"
        >
      </div>

    </div>
    <div class="is-private">
      <div class="choose-private">
        <input type="radio" name="private" value="0" id="public" v-model="pprivate"><label for="public">公开</label>
      </div>
      <div class="choose-private">
        <input type="radio" name="private" value="1" id="private" v-model="pprivate"><label for="private">私密</label>
      </div>
    </div>
    <div class="picture-preview" v-show="showImg">
      <img :src="picture_src" alt="">
    </div>
    <div class="warning"><p>{{warning}}</p></div>
    <div class="publish-buttons">
      <button @click="publish(0)">保存</button>
      <button @click="publish(1)">{{this.blog_id == -1 ? '发布':'修改'}}</button>
    </div>

  </section>
<!--    提示栏-->
    <section class="tips-container" v-show="tip">
      <div class="success" v-if="success"><p>添加成功!</p></div>
      <div class="failed" v-if="!success"><p>添加失败!</p></div>
    </section>

<!--&lt;!&ndash;预览的图片&ndash;&gt;-->
<!--  <section>-->
<!--  </section>-->
  </div>
</div>
</template>

<script>
import Article from "./Article";
export default {
name: "ArticlePublish",
  components: {Article},
  data(){
    return{
      toolbars:{
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        navigation: true, // 导航目录
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
      //  文件相关
      formData:new FormData(),
      imgs: {},
      imgLen:0,
//+++++++++++++++++++++++++文章参数
      picture_src: '',        //首图地址
      showImg:false,        //是否显示预览图
      title:'',         //标题
      typeName: '',       //分类的名称
      pprivate: 0,      //是否是私密
      description:'',   //正文部分
      // published: 1,
      blog_id: -1,      //如果是修改，修改的id
//+++++++++++++++++++++++++++++++
      warning:'',        //提示部分
      tip: false,         //是否展示提示部分
      success:false,      //是否上传成功
      types:[],             //种类

    }
  },
  computed:{
  },
  mounted() {
    let type = document.querySelector(".type-item-container");
    let  input = document.querySelector(".article-type");
    let items = document.querySelectorAll(".type-item-container ul li");
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
    // this.getParams();
  },
  created() {
  this.getParams();
  },
  methods:{
  getParams(){
    let routerBlog = this.$route.query.blog;
    if (routerBlog.id != undefined){
      this.blog_id = routerBlog.id;
      this.description = routerBlog.description;
      this.typeName = routerBlog.type_name;
      this.title = routerBlog.title;
      this.picture_src = routerBlog.picture_src;
      this.pprivate = routerBlog.pprivate;
      this.published = routerBlog.publish;
      //显示预览图
      this.showImg = true;
    }
  },
    isUpdate(){
      return this.blog_id != -1;
    },
    getTypeList(){
        this.$axios({
          url:"http://8.129.131.7:8085/type/listType",
          method:'get'
        }).then((response)=>{
          this.types = response.data;
          //不是修改
          if (this.blog_id == -1){
            this.typeName = this.types[0].name;
          }
        })
    },
    //删除图片
    delImg(){},
    clickType(typeName){
      //输入框
      this.$refs.typeInput.value = typeName;
      this.typeName = typeName;
    },
    //文本区域添加图片
    addImg(pos,$file){
      let formData = new FormData();
      formData.append("image",$file);
      this.$axios({
        // url: "http://8.129.131.7:8085/img/addPirstPicture",
        url: "http://8.129.131.7:8085/img/addPirstPicture",
        method: 'post',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then((response)=>{
        let url = response.data;
        this.$refs.md.$img2Url(pos,url);
      })
    },
    addFirstPicture(e){
      //加载图片到内存
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      //后台发送数据给前台展示
      let formData = new FormData();
      formData.append("image",file);
      this.$axios({
        url: "http://8.129.131.7:8085/img/addPirstPicture",
        method: 'post',
        data: formData,
        headers: {'Content-Type':'multipart/form-data'},
      }).then((response)=>{
        let url = response.data;
        this.picture_src = url;
        this.showImg = true;
      })
    },
    checkTrue(){
      if (this.title == ''){
        this.warning = "请输入标题"
        return false;
      }else if (this.description == ''){
        this.warning = "请填写文章内容"
        return false;
      }else if (this.typeName == ''){
        this.warning = "请选择分类"
        return false;
      }else if (this.picture_src == ''){
        this.warning = "请选择首图"
        return false;
      }
      return true;
    },
    //添加文章的方法
    publish(published){
    if(this.isUpdate()){
      this.updateBlog(this.blog_id,published);
      return ;
    }
      if (this.checkTrue()){
        //that指向vue实例
        let that =this;
        this.$axios.post("http://8.129.131.7:8085/blog/addBlog",{
          description:this.description,
          type_name: this.typeName,
          title: this.title,
          picture_src:this.picture_src,
          pprivate:this.pprivate,
          publish: published
        }).then(function (response){
          that.warning = '';
          that.tip = true;
          that.success = true;
        }).catch(function (error){
          that.warning = '';
          that.tip = true;
          that.success = false;
        })
      }

    },
    updateBlog(blog_id,published){
    if (this.checkTrue()){
      //that指向vue实例
      let that =this;
      this.$axios.post("http://8.129.131.7:8085/blog/updateBlog/"+blog_id,{
        description:this.description,
        type_name: this.typeName,
        title: this.title,
        picture_src:this.picture_src,
        pprivate:this.pprivate,
        publish: published
      }).then(function (response){
        that.warning = '';
        that.tip = true;
        that.success = true;
      }).catch(function (error){
        that.warning = '';
        that.tip = true;
        that.success = false;
      })
    }
    }

  }
}
</script>

<style scoped>

.publish-container{
  width: 80%;
  /*background-color: #fff;*/
  margin: 100px auto ;
  margin-bottom: 150px;
}
.title-container{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;

}
.title-container input{
  box-sizing: border-box;
  width: 60%;
  height: 40px;
  border-radius: 5px;
  outline: none;
  padding: 0 20px;
  margin-left: 20px;
}
.title-container .type{
  width: 20%;
}

.content-container{
  width: 100%;
  /*height: 200px;*/
  background-color: #fff;
  border-radius: 5px;
}
.type-container{
  position: relative;
  width: 200px;
  height: 80%;
  /*background-color: pink;*/
}

.select{
  position: absolute;
  top: 50%;
  right: 4px;
  transform: translateY(-50%);
}

.type-container  .focus{
  /*border: 5px solid pink;*/
  border-radius: 5px 5px 0 0;
}
.type-item-container{
  box-sizing: border-box;
  width: 200px;
  /*height: 100px;*/
  /*background-color: pink;*/
  position: absolute;
  left: 5px;
  top: 35px;
  transition: all 0.5s;
  /*border: 5px solid #f6acb6;*/
  border-top: none;
  background-color: #fff;
  border-radius: 0 0 5px 5px;
  display: none;
  z-index: 1000;
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

.type-picture-container{
  overflow: visible;
  margin: 20px auto;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  /*align-items: center;*/
  /*background-color: #fff;*/
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
  margin: 0 5px;
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
  align-items: center;
}
.warning{
  /*background-color: pink;*/
  width: 8%;
  color: red;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
}

.publish-buttons button:nth-child(1){
  width: 30%;
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
.publish-buttons button:nth-child(1):hover{
  background-color: #cacbcd;
}
.publish-buttons button:nth-child(2){
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
.publish-buttons button:nth-child(2):hover{
  background-color: #009c95;
}

.picture-preview{
  margin: 0 30px;
  width: 20%;
  height: 200px;
  background-color: #fff;
}
.picture-preview img{
  width: 100%;
  height: 100%;
}

.tips-container{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.tips-container .success{
  text-align: center;
  font-size: 20px;
  font-weight: 900;
  color: greenyellow;
  width: 15%;
  height: 100%;
  margin-right: 100px;
}

.tips-container .failed{
  text-align: center;
  font-size: 20px;
  font-weight: 900;
  color: #db2828;
  width: 15%;
  height: 100%;
  background-color: white;
  margin-right: 100px;
}
</style>
