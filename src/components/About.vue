<template>
  <div id="about">
    <h1 class="f1">This is the Vocabulary Page</h1>
    <h2 class="f2">Vocabulary words for this week:</h2>
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
              <td class="pa3">boy</td>
              <td class="pa3">does</td>
              <td class="pa3">everyone</td>
              <td class="pa3">field</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3">floor</td>
              <td class="pa3">found</td>
              <td class="pa3">into</td>
              <td class="pa3">their</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3">helpful</td>
              <td class="pa3">toward</td>
              <td class="pa3">what's</td>
              <td class="pa3">sadly</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3">hopeful</td>
              <td class="pa3">thankful</td>
              <td class="pa3">slowly</td>
              <td class="pa3">wishful</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3">kindly</td>
              <td class="pa3">useful</td>
              <td class="pa3">safely</td>
              <td class="pa3">painful</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3">mouthful</td>
              <td class="pa3">weakly</td>
              <td class="pa3">jumped</td>
              <td class="pa3">saying</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3">quickly</td>
              <td class="pa3">wonderful</td>
              <td class="pa3">coming</td>
              <td class="pa3">down</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3">four</td>
              <td class="pa3">give</td>
              <td class="pa3">great</td>
              <td class="pa3">idea</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3">knew</td>
              <td class="pa3">large</td>
              <td class="pa3">though</td>
              <td class="pa3">write</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <wordsearch/>
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
