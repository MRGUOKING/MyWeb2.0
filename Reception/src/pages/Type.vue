<template>
<div>
  <TypeTop/>

<!--  主要内容-->
  <TypeContent/>
</div>
</template>

<script>
import TypeTop from "./typeComponents/TypeTop";
import TypeContent from "./typeComponents/TypeContent";
export default {
name: "Type",
  components:{
    TypeContent,
    TypeTop
  }
}
</script>

<style scoped>

</style>
