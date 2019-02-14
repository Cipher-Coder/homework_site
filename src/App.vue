<template>
  <div id="app">
    <header class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
      <nav class="f6 fw6 ttu tracked">
        <router-link class="link dim white dib mr3" v-bind:to="'/'">Home</router-link>
        <router-link class="link dim white dib mr3" v-bind:to="'/about'">Vocabulary</router-link>
        <router-view></router-view>
      </nav>
    </header>
    <footer class="bg-near-black white-80">
      <p class="f6">
        <span class="dib mr4 mr5-ns">©2019 Mattaz Web Development</span>
        <a class="link white-80 hover-green" href="mailto:matthew@mattaz.com">matthew@mattaz.com</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
<!-- styling for the component -->
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  height: 15px;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 30px;
  width: 100%;
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