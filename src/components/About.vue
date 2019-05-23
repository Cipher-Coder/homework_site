<template>
  <div id="about">
    <h1 class="f1">Word Lists</h1>
    <h2 class="f2">Vocabulary words for this week: "Homophones"</h2>
    <p class="f7 red">* High Frequency Words</p>
    <div class="pa4">
      <div class="overflow-auto">
        <table class="f6 w-100 mw8 center" cellspacing="0">
          <tbody class="lh-copy">
            <tr class="stripe-dark">
              <td class="pa3">meet</td>
              <td class="pa3">meat</td>
              <td class="pa3">week</td>
              <td class="pa3">weak</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3">mane</td>
              <td class="pa3">main</td>
              <td class="pa3">tail</td>
              <td class="pa3">tale</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3">be</td>
              <td class="pa3">bee</td>
              <td class="pa3">too</td>
              <td class="pa3">two</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3">sea</td>
              <td class="pa3">see</td>
              <td class="pa3">threw</td>
              <td class="pa3">through</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3 red">boy</td>
              <td class="pa3 red">does</td>
              <td class="pa3 red">everyone</td>
              <td class="pa3 red">field</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3 red">floor</td>
              <td class="pa3 red">found</td>
              <td class="pa3 red">into</td>
              <td class="pa3 red">their</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3"></td>
              <td class="pa3 red">toward</td>
              <td class="pa3 red">what's</td>
              <td class="pa3"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="pa4">
      <div class="overflow-auto">
        <h2 class="f2 pb2">Vocabulary words for next week: Suffixes -y, -ly, -ful</h2>
        <p class="f7 red pb4">* High Frequency Words</p>
        <table class="f6 w-100 mw8 center" cellspacing="0">
          <tbody class="lh-copy">
            <tr class="stripe-dark">
              <td class="pa3">helpful</td>
              <td class="pa3">sadly</td>
              <td class="pa3">hopeful</td>
              <td class="pa3">thankful</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3">slowly</td>
              <td class="pa3">wishful</td>
              <td class="pa3">kindly</td>
              <td class="pa3">useful</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3">safely</td>
              <td class="pa3">painful</td>
              <td class="pa3">mouthful</td>
              <td class="pa3">weakly</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3">jumped</td>
              <td class="pa3">saying</td>
              <td class="pa3">quickly</td>
              <td class="pa3">wonderful</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3 red">coming</td>
              <td class="pa3 red">down</td>
              <td class="pa3 red">four</td>
              <td class="pa3 red">give</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3 red">great</td>
              <td class="pa3 red">idea</td>
              <td class="pa3 red">knew</td>
              <td class="pa3 red">large</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3"></td>
              <td class="pa3 red">though</td>
              <td class="pa3 red">write</td>
              <td class="pa3"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import wordsearch from "../components/wordsearch.vue";
export default {
  components: {
    wordsearch
  },
  name: "about"
};
</script>

<style scoped>
#about {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
