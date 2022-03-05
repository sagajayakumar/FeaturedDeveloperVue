<template>
  <div class="footer">
  <div><a href="https://github.com/KeerthiMuli/Featured-Developer-Proposal"> 
  <font-awesome-icon :icon="['fab', 'github']" class="icon alt"/> </a> &nbsp;&nbsp; 

  <a href="https://github.com/sagajayakumar/FeaturedDeveloperVue"> 
  Front End </a> &nbsp;&nbsp;

  <a href="https://github.com/KeerthiMuli/Featured-Developer-ThreeB-backend"> 
  Back End </a> &nbsp;&nbsp;

  <a href="https://github.com/KeerthiMuli/Featured-Developer-Proposal/projects/1"> 
  Board </a> &nbsp;&nbsp;
  
   Featured Developers</div>
    </div>
  
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  plugins: ["~/plugins/font-awesome"],
});
</script>


<style scoped>
.footer {
  background-color: #006747;
  text-align: right;
  color: whitesmoke;
  padding: 10px;
  margin-top: 110px;
}
a {
  color: white;
  background-color: transparent;
  text-decoration: none;
}
a:hover {
  color: #5d63b8;
}
</style>