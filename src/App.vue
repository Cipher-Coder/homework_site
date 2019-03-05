<template>
  <div id="app">
    <Header/>
    <Footer/>
  </div>
</template>

<script>
import Footer from "./components/Bottom.vue";
import Header from "./components/Head.vue";

export default {
  components: {
    Footer,
    Header
  },
  name: "app"
};
</script>
<!-- styling for the component -->
<style>
@import "../node_modules/tachyons/css/tachyons.min.css";

html {
  height: 100%;
}

body {
  position: relative;
  min-height: 100%;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
</style>