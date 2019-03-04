<template>
  <div class="hello">
    <div class="bg-image"></div>
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
    <div class="spotlight">
      <div class="content">
        <header class="major">
          <h2 class="f2">Multiplication</h2>
          <div id="puzzle">
            <p>Question</p>
            <span id="rndNumber1">-</span> *
            <span id="rndNumber2">-</span> =
            <p>
              <input type="number" id="userAnswer" name="text1">
              <input type="button" onclick="checkAnswer()" value="Check">
            </p>
            <span id="mesg">Enter your Answer</span>
            <p>
              Your Score is:
              <span id="scoremesg">0</span>
            </p>
          </div>
        </header>
      </div>
    </div>
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

<style scoped>
.hello {
  padding-top: 16px;
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
  background-size: cover;
  min-height: 700px;
}
</style>
