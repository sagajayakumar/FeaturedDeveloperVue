<template>
  <div class="footer">
  <div><a href="https://github.com/shivaramkothapally/featured-developers-proposal"> 
  <font-awesome-icon :icon="['fab', 'github']" class="icon alt"/> </a>

  <a href="https://github.com/sagajayakumar/FeaturedDeveloperVue"> 
  Front End </a>

  <a href="https://github.com/sagajayakumar/FeaturedDeveloper3A/tree/master"> 
  Back End </a>
  
  3A Featured Developers</div>
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
  margin-top: 70px;
}
</style>