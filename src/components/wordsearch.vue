<template>
  <div>
    <h1 class="f1 blue tc">Welcome to {{ welcome }}</h1>
    <div class="spotlight">
      <div class="content">
        <header class="major">
          <h2 class="f2">Multiplication</h2>
          <div id="puzzle">
            <p>Question</p>
            <span id="rndNumber1"> - </span> * <span id="rndNumber2"> - </span> =
            <p>
            <input type="number" id="userAnswer" name="text1"/>
            <input type="button" onclick="checkAnswer()" value="Check" />
            </p>
            <span id="mesg">Enter your Answer</span>
            <p>Your Score is: 
              <span id="scoremesg"> 0</span>
            </p>
          </div>
        </header>
      </div>
    </div>
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