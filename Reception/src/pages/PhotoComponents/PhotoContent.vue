<template>
<div>
  <div class="photoContent">
    <div class="cont">

<!--      <div class="cont-item">-->
<!--      <div class="photo-item">-->
<!--        <img src="https://6169-ai-ship-3gnlla8l509c5d77-1303253921.tcb.qcloud.la/%E6%98%9F%E7%A9%BA/%E5%8C%97%E6%96%97%E4%B8%83%E6%98%9F.jpg?sign=d282b1a8a42e881483a176183359481f&t=1606838620">-->
<!--        <p>2021-1-29</p>-->
<!--      </div>-->
<!--      </div>-->

      <div v-for="(item,i) in photos" :key="item.url">
      <div class="photo-item" :style="'transform:'+'rotate('+numbers[i%10]+'deg);opacity:1;'" @mouseover="pictureMouseOver($event,i)">
        <img :src="item.url">
        <p>{{ dataFormat(item.upload_time) }}</p>
      </div>
      </div>

<!--      <div>-->
<!--      <div class="photo-item">-->
<!--        <img src="https://6169-ai-ship-3gnlla8l509c5d77-1303253921.tcb.qcloud.la/%E6%99%9A%E9%9C%9E2.0.jpg?sign=95a112da2441d23618824baee7c6336c&t=1606801849">-->
<!--        <p>2021-1-29</p>-->
<!--      </div>-->
<!--      </div>-->

<!--      <div>-->
<!--      <div class="photo-item">-->
<!--        <img src="https://6169-ai-ship-3gnlla8l509c5d77-1303253921.tcb.qcloud.la/%E6%B0%B4%E5%A4%A9.jpg?sign=da6fd38e9fe165fd0f26ab58cabae744&t=1606801913">-->
<!--        <p>2021-1-29</p>-->
<!--      </div>-->
<!--      </div>-->

<!--      <div>-->
<!--      <div class="photo-item">-->
<!--        <img src="https://6169-ai-ship-3gnlla8l509c5d77-1303253921.tcb.qcloud.la/%E5%A8%9C%E5%A8%9C/%E5%A8%9C%E5%A8%9C1.jpg?sign=e5da8f609949c0a309422755a9d25a96&t=1606839033">-->
<!--        <p>2021-1-29</p>-->
<!--      </div>-->
<!--      </div>-->

<!--      <div>-->
<!--      <div class="photo-item">-->
<!--        <img src="../images/bgc1.jpg">-->
<!--        <p>2021-1-29</p>-->
<!--      </div>-->
<!--      </div>-->

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "PhotoContent",
  props:["photos"],
  data(){
    return{
      numbers:[15,-7,15,-9,-12,-5,10,8],
      timer:{}
    }
  },
  mounted() {
  },
  methods:{
    pictureMouseOver(event,i){
      let picture =event.target;
      //给每个图片添加移除函数
      let images = document.querySelectorAll(".photo-item");
      let timer = setTimeout(function (){
          for (let j = 0; j < images.length; j++) {
            if (j != i){
              images[j].style.opacity = "0";
            }
          }
        },2000)
      picture.onmouseout=function (){
        for (let j = 0; j < images.length; j++) {
          images[j].style.opacity = "1";
        }
        clearTimeout(timer)
      }
    },
    // pictureMouseOut(event){
    //   let picture =event.target;
    //   picture.style.opacity = "1";
    // },
    // changeRotate(){
    //   // let parents = this.$refs.parent;
    //   // console.log("parent");
    //   // console.log(parents);
    //   //控制旋转角度
    //   let images = document.querySelectorAll(".photo-item");
    //   console.log("imgages")
    //   console.log(images)
    //   let numbers = [15,-7,15,-9,9,-12,-5,10,8]
    //   for (let i = 0; i < this.photos.length; i++) {
    //     let items = i%10;
    //     console.log("images[i]");
    //     console.log(images[i]);
    //     images[i].style.transform = "rotate("+numbers[items]+"deg)";
    //     images[i].style.opacity = "0";
    //     setTimeout(()=>{
    //       images[i].style.opacity="1";
    //
    //       let timer = null;
    //       //给每个图片添加移除函数
    //       images[i].onmouseover=function (){
    //         timer = setTimeout(function (){
    //           for (let j = 0; j < images.length; j++) {
    //             if (j != i){
    //               images[j].style.opacity = "0";
    //             }
    //           }
    //         },2000)
    //       }
    //       //  鼠标移除事件
    //       images[i].onmouseout=function (){
    //         for (let j = 0; j < images.length; j++) {
    //           images[j].style.opacity = "1";
    //         }
    //         clearTimeout(timer)
    //       }
    //
    //     },250)
    //   }
    // },
    dataFormat(data){
      let index = data.indexOf('T');
      return data.substring(0,index);
    },
  }
}
</script>

<style scoped>
.photoContent{
  margin: 100px 0;
}

.cont{
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.photo-item{
  width: 370px;
  padding: 15px;
  margin: 30px;
  background-color: #FFFFFF;
  transition: all 1s;
  -webkit-transform: transform 0.5s;
  /*transition: opacity 1s;*/
}
.photo-item img{
  width: 100%;
}

.photo-item:hover{
  transform: scale(1.5) rotate(0deg) !important;
}

.photo-item{
  position: relative;
}

.photo-item p{
  position: absolute;
  left: 50%;
  top: 0;
  color: rgba(0,0,0,1);
  transition: color 0.5s;
  transform: translate(-50%,0);
  font-size: 15px;
  color: #6884b6;
  font-family: "STXingkai Times";
}


</style>
