<template>
  <div class="hello">
    <div class="bg-image mw-100 cover"></div>
    <h1 class="f1">{{ pageHeading }}</h1>
    <h2 class="f2">Let's get Started with some Math!!</h2>
    <p>
      Ok, would you like to start with
      <a
        class="choice f6 link dim br3 ph3 pv2 mb2 dib white bg-hot-pink"
        href="#0"
      >Multiplication</a> or
      <a class="choice f6 link dim br3 ph3 pv2 mb2 dib white bg-black" href="#0">Addition</a> or
      <a class="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green" href="#0">subtraction</a>
    </p>
    <hr width="25%" color="#6699ff" size="3">
    <form class="pa4 black-80">
      <div class="mw4 center">
        <label for="answer" class="f6 b db mb2">Answer</label>
        <input
          id="answer"
          class="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="number"
          aria-describedby="name-desc"
        >
        <a class="f6 link dim br3 ph3 pv2 mb2 dib white bg-black" href="#0">Submit</a>
        <small id="name-desc" class="f6 black-60 db mb2">Correct</small>
        <span class="normal black-60">Score:</span>
      </div>
    </form>
    <hr class="splitter" width="25%" color="#6699ff" size="3">
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageHeading: "Hello, Welcome to Aiden's Homework Helper!!"
    };
  },
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin: 16px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
}

.splitter {
  margin-bottom: 130px;
}

.bg-image {
  background-image: url("../assets/images/headerBg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  min-height: 600px;
}
</style>
