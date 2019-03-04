<template>
  <div class="hello">
    <div class="bg-image"></div>
    <h1 class="f1">{{ pageHeading }}</h1>
    <h2 class="f2">Let's get Started with some Math!!</h2>
    <hr width="30%" color="#6699ff" size="3">
    <div class="spotlight flex">
      <div id="multiplication" class="w-third">
        <header class="major">
          <h2 class="f2">Multiplication</h2>
          <div id="puzzle">
            <p>Question</p>
            <span id="rndNumber1">{{ randomNumber1 }}</span> *
            <span id="rndNumber2">{{ randomNumber2 }}</span> =
            <p>
              <input
                id="userAnswer"
                v-validate="'numeric'"
                name="userAnswer"
                v-model="userAnswer"
                placeholder="Answer"
                type="number"
              >
              <button @click="checkAnswer">Check</button>
              <button @click="created">Next</button>
            </p>
            <span id="mesg">Enter your Answer</span>
            <p>
              <span id="scoremesg">Your Score Is: {{ score }}</span>
            </p>
          </div>
        </header>
      </div>
      <!-- <div id="addition" class="w-third">
        <header class="major">
          <h2 class="f2">Addition</h2>
          <div id="puzzle">
            <p>Question</p>
            <span id="rndNumber3">-</span> *
            <span id="rndNumber4">-</span> =
            <p>
              <input v-validate="'numeric'" name="userAnswer1" placeholder="Answer" type="number">
              <button @click="checkAnswer1">Check</button>
            </p>
            <span id="mesg">Enter your Answer</span>
            <p>
              <span id="scoremesg">Your Score Is: {{ score1 }}</span>
            </p>
          </div>
        </header>
      </div>
      <div id="subtraction" class="w-third">
        <header class="major">
          <h2 class="f2">Subtraction</h2>
          <div id="puzzle">
            <p>Question</p>
            <span id="rndNumber5">-</span> *
            <span id="rndNumber6">-</span> =
            <p>
              <input v-validate="'numeric'" name="userAnswer2" placeholder="Answer" type="number">
              <button @click="checkAnswer2">Check</button>
            </p>
            <span id="mesg">Enter your Answer</span>
            <p>
              <span id="scoremesg">Your Score Is: {{ score2 }}</span>
            </p>
          </div>
        </header>
      </div>-->
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
      } else {
        document.getElementById("mesg").style.color = "red";
        document.getElementById("mesg").innerHTML = "Incorrect!";
      }
    }
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
#puzzle {
  border: 1px solid orange;
  margin: 2em;
  padding: 1em 1em 2em 1em;
}

/* .spotlight {
  display: inline;
} */
</style>
