<template>
<div>
  <TimelineTop/>
<!--  时间轴主要内容-->
    <div class="timeline">
      <ul>
        <li>
<!--          时间轴主要内容-->
          <div class="timeline-item">
            <time>2020-01-03</time>
            <section class="timeline-item-main">
              <a href="#" target="_blank">
                文章标题
              </a>
            </section>
          </div>
        </li>
        <li>
          <!--          时间轴主要内容-->
          <div class="timeline-item">
            <time>2020-01-03</time>
            <section class="timeline-item-main">
              <a href="#" target="_blank">
                文章标题
              </a>
            </section>
          </div>
        </li>
        <li>
          <!--          时间轴主要内容-->
          <div class="timeline-item">
            <time>2020-01-03</time>
            <section class="timeline-item-main">
              <a href="#" target="_blank">
                文章标题
              </a>
            </section>
          </div>
        </li>
        <li>
          <!--          时间轴主要内容-->
          <div class="timeline-item">
            <time>2020-01-03</time>
            <section class="timeline-item-main">
              <a href="#" target="_blank">
                文章标题
              </a>
            </section>
          </div>
        </li>
        <li>
          <!--          时间轴主要内容-->
          <div class="timeline-item">
            <time>2020-01-03</time>
            <section class="timeline-item-main">
              <a href="#" target="_blank">
                文章标题
              </a>
            </section>
          </div>
        </li>
        <li>
          <!--          时间轴主要内容-->
          <div class="timeline-item">
            <time>2020-01-03</time>
            <section class="timeline-item-main">
              <a href="#" target="_blank">
                文章标题
              </a>
            </section>
          </div>
        </li>
        <li>
          <!--          时间轴主要内容-->
          <div class="timeline-item">
            <time>2020-01-03</time>
            <section class="timeline-item-main">
              <a href="#" target="_blank">
                文章标题
              </a>
            </section>
          </div>
        </li>
      </ul>
    </div>

</div>
</template>

<script>
import TimelineTop from "./timelineComponents/TimelineTop";
export default {
name: "timeline",
  components:{
    TimelineTop
  },
  methods:{
  },
  mounted() {
    let items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
      let rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      for (let i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          if(!items[i].classList.contains("in-view")){
            items[i].classList.add("in-view");
          }
        } else if(items[i].classList.contains("in-view")) {
          items[i].classList.remove("in-view");
        }
      }
    }
    callbackFunc();
    window.addEventListener("load", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  }
}
</script>

<style>
.timeline{
  margin-top: 50px;
}
.timeline ul li{
  width: 6px;
  position: relative;
  margin: 0 auto;
  padding-top: 20px;
  background-color: #fff;
}

.timeline ul li:after{
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 20px;
  height: 20px;
  background-color: #eeeeee;
  z-index: 2;
}

.timeline .timeline-item{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
  height: 130px;
  width: 400px;
  background-color: #fff;
  border-radius: 5px;
  background-color: rgba(255,255,255,0.7);

}

.timeline ul :nth-child(odd)>div {
  margin-left: -440px;
}

.timeline ul :nth-child(even)>div{
  margin-left: 40px;
}

.timeline time{
  position: absolute;
  background: #f5af10;
  width: 130px;
  height: 25px;
  top: -10px;
  left: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
  font-family: 'STXingkai Times';
  font-size: 15px;
}

section a{
  color: #0f1316;
  font-weight: bold ;
  font-size: 20px;
}

.timeline .timeline-item-main{
  width: 80%;
  height: 70%;
  background-color: #fff;
  border-radius: 5px;
  text-align: center;
  line-height: 90px;
}

.timeline .in-view {
  transform: none;
  visibility: visible;
  opacity: 1;
}

.timeline ul li {
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

</style>
