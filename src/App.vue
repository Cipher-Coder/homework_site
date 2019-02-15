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

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

header {
  height: 30px;
}

.f4 {
  font-size: 1.25rem;
}

.blue {
  color: #357edd;
}

.fw6 {
  font-weight: 600;
}

.pa4 {
  padding: 1rem;
}

.no-underline {
  text-decoration: none;
}
</style>