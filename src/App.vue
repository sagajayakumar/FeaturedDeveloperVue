<template>
  <div id="app">
    <Header/>
    <div class="content container-fluid">
      <router-view />
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/semantics/Header.vue";
import Footer from "./components/semantics/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

.Cyan {
  background: #009688;
  color: white;
}
</style>
