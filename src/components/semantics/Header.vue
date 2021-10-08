<template>
   <div class="header" style="overflow-x:hidden">
    <b-navbar toggleable="lg" class="navbarHeader" fixed>      
      <b-navbar-brand href="https://www.nwmissouri.edu/" class="brand cropped1" target="_blank"
        ><img src="../../assets/NW-transparent-logo.svg"  alt="ltc-logo"  height="70"  
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    </b-navbar>
  </div>
  
</template>
<script>
export default {
 
}
</script>

<style scoped>
.header{
  top: 0px;
  margin: 0px 0px 0px;
  padding: 0px;
  
}
.navbarHeader {
  background-color: #006747;
  text-align: left;
  font-weight: bold;
  color: whitesmoke;

}

.brand{
  padding: 0px;
}
</style>