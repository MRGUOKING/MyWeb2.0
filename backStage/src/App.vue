<template>
  <div id="app">
    <Head v-show="$route.meta.showHead"/>
    <router-view/>
  </div>
</template>

<script>
import Head from "./components/Head";
export default {
  name: 'App',
  components: {Head}
}
</script>
<style>
body{
  background: url("./pages/images/bgc2.jpg") no-repeat fixed;
  background-size: 100% 100%;
}
</style>
