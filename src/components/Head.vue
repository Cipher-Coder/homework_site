<template>
  <header class="bg-black-90 no-underline w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
    <nav class="f6 fw6 no-underline tracked">
      <router-link class="link dim white dib mr3 hover-green" v-bind:to="'/'">Home</router-link>
      <router-link class="link dim white dib mr3 hover-green" v-bind:to="'/about'">Vocabulary</router-link>
      <router-view></router-view>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
header {
  height: 30px;
}
</style>
