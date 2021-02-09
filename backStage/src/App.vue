<template>
  <div id="app">
    <Head v-show="$route.meta.showHead == null"/>
    <router-view/>
<!--    <Footer/>-->
  </div>
</template>

<script>
import Head from "./components/Head";
import Footer from "./components/Footer";
export default {
  name: 'App',
  components: {
    Head,
    Footer
  }
}
</script>
<style>
body{
  background: url("./pages/images/晚霞车.jpg") no-repeat fixed;
  /*filter: brightness(130%);*/
  background-size: 100% 100%;
}
</style>
