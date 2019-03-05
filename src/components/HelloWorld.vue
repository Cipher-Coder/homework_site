<template>
  <div class="hello">
    <div class="bg-image"></div>
    <h1 class="f1">{{ pageHeading }}</h1>
    <h2 class="f2">Let's get Started with some Math!!</h2>
    <hr width="30%" color="#6699ff" size="3">
    <div class="spotlight cf">
      <div id="multiplication" class="fl w-100 w-33-ns pv3">
        <header class="major">
          <h2 class="f2">Multiplication</h2>
          <div id="puzzle">
            <p class="f5">Question</p>
            <span id="rndNumber1" class="f4">{{ randomNumber1 }}</span> *
            <span id="rndNumber2" class="f4">{{ randomNumber2 }}</span> =
            <p>
              <input
                id="userAnswer"
                v-validate="'numeric'"
                name="userAnswer"
                v-model="userAnswer"
                placeholder="Answer"
                type="number"
              >
            </p>
            <p>
              <button
                class="check1 f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue"
                @click="checkAnswer"
              >Check</button>
              <button
                class="reset1 f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green"
                @click="created"
              >Next</button>
            </p>
            <span id="mesg">Enter your Answer</span>
            <p>
              <span id="scoremesg">How Many Correct: {{ score }}</span>
            </p>
            <button class="f6 br3 ph3 pv2 dib mid-gray" @click="startOver">Start Over</button>
          </div>
        </header>
      </div>
      <div id="addition" class="fl w-100 w-33-ns pv3">
        <header class="major">
          <h2 class="f2">Addition</h2>
          <div id="puzzle">
            <p class="f5">Question</p>
            <span id="rndNumber3" class="f4">{{ randomNumber1 }}</span> +
            <span id="rndNumber4" class="f4">{{ randomNumber2 }}</span> =
            <p>
              <input v-validate="'numeric'" name="userAnswer1" placeholder="Answer" type="number">
            </p>
            <p>
              <button
                class="check1 f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue"
                @click="checkAnswer"
              >Check</button>
              <button
                class="reset1 f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green"
                @click="created"
              >Next</button>
            </p>
            <span id="mesg">Enter your Answer</span>
            <p>
              <span id="scoremesg">Your Score Is: {{ score1 }}</span>
            </p>
            <button class="f6 br3 ph3 pv2 dib mid-gray" @click="startOver">Start Over</button>
          </div>
        </header>
      </div>
      <div id="subtraction" class="fl w-100 w-33-ns pv3">
        <header class="major">
          <h2 class="f2">Subtraction</h2>
          <div id="puzzle">
            <p class="f5">Question</p>
            <span id="rndNumber5" class="f4">{{ randomNumber1 }}</span> -
            <span id="rndNumber6" class="f4">{{ randomNumber2 }}</span> =
            <p>
              <input v-validate="'numeric'" name="userAnswer2" placeholder="Answer" type="number">
            </p>
            <p>
              <button
                class="check1 f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue"
                @click="checkAnswer"
              >Check</button>
              <button
                class="reset1 f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green"
                @click="created"
              >Next</button>
            </p>
            <span id="mesg">Enter your Answer</span>
            <p>
              <span id="scoremesg">Your Score Is: {{ score2 }}</span>
            </p>
            <button class="f6 br3 ph3 pv2 dib mid-gray" @click="startOver">Start Over</button>
          </div>
        </header>
      </div>
    </div>
    <hr class="splitter" width="30%" color="#6699ff" size="3">
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageHeading: "Hello, Welcome to Aiden's Homework Helper!!",
      randomNumber1: 1,
      randomNumber2: 2,
      score: 0,
      score1: 0,
      score2: 0,
      userAnswer: ""
    };
  },
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    created: function() {
      this.generateNumber();
      this.userAnswer = "";
    },
    generateNumber: function() {
      this.randomNumber1 = Math.floor(Math.random() * 10 + 1);
      this.randomNumber2 = Math.floor(Math.random() * 10 + 1);
    },
    checkAnswer: function() {
      let answer = document.getElementById("userAnswer").value;
      if (answer == this.randomNumber1 * this.randomNumber2) {
        document.getElementById("mesg").style.color = "green";
        document.getElementById("mesg").innerHTML = "Correct!";
        this.score++;
      } else {
        document.getElementById("mesg").style.color = "red";
        document.getElementById("mesg").innerHTML = "Incorrect!";
      }
    },
    startOver: function() {
      this.score = 0;
      this.userAnswer = "";
    }
  }
};
</script>

<style scoped>
.hello {
  padding-top: 16px;
  height: 100vh;
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
#puzzle {
  border: 1px solid orange;
  margin: 2em;
  padding: 1em 1em 2em 1em;
}

.check1 {
  transform: none;
  opacity: 1;
  transition: 0.3s;
}

.check1:hover {
  opacity: 0.7;
}

.reset1 {
  transform: none;
  opacity: 1;
  transition: 0.3s;
}

.reset1:hover {
  opacity: 0.7;
}
</style>
