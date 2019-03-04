<template>
  <div>
    <h1 class="f1 blue tc">Welcome to {{ welcome }}</h1>
  </div>
</template>

<script>
export default {
  name: "wordsearch",
  data: function() {
    return {
      welcome: "Aiden's Word Search!"
    };
  }
};
</script>

<style scoped>
h1 {
  padding: 30px;
}
</style>