<template>
<div>
  <div class="publish-container">
<!--    标题部分-->
  <section class="title-container">
    <input type="text" placeholder="标题">
  </section>
<!--    正文部分-->
  <section class="content-container">
    <mavon-editor
      :toolbars="toolbars"
      @imgAdd="addImg"
      @imgDel="delImg"
      ref="md"
    />
  </section>
<!--    -->
  <section class="type-picture-container">

    <div class="type-container">

      <input v-model="inputValue" type="text" class="article-input article-type" readonly placeholder="分类">
      <p class="iconfont select">&#xe626</p>
      <!--        分类标签-->
      <div class="type-item-container">
        <ul>
          <li>生活</li>
          <li>学习</li>
          <li>3</li>
        </ul>
      </div>
    </div>
    <div class="first-picture">
      <label for="picture">首图</label>
      <div class="file-container">
        <button class="file-button">选择首图</button>
        <input type="file" id="picture" ref="inputer" class="choose-file" accept="image/*"
               @change="addImg($event)"
        >
      </div>

    </div>
    <div class="is-private">
      <div class="choose-private">
        <input type="radio" name="private" value="0" id="public" checked><label for="public">公开</label>
      </div>
      <div class="choose-private">
        <input type="radio" name="private" value="1" id="private"><label for="private">私密</label>
      </div>
    </div>
    <div class="picture-preview" v-show="showImg">
      <img :src="avatar" alt="">
    </div>
    <div class="publish-buttons">
      <button>保存</button>
      <button>发布</button>
    </div>

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
      avatar: require('./images/bgc.jpg'),
      showImg:false
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
  },
  methods:{
    addImg(e){
      console.log("进入addImg方法")
      let file = e.target.files[0];
      let reader = new FileReader();
      let that = this;
      reader.readAsDataURL(file);
      //read.onload是一个FileReader的一个回调函数，当读取成功是执行。
      console.log("即将进入onload方法")
      reader.onload = function (e){
        that.avatar = this.result;
        that.showImg = true;
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
  margin-left: auto;
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
</style>
