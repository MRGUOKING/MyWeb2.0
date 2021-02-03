<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Article from "./pages/Article";
export default {
  name: 'App',
  data(){
    return {
      article : true
    }
  },
  components: {
    Header,
    Article
  }
}
</script>

<style>

</style>
