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
              <td class="pa3"></td>
              <td class="pa3">toward</td>
              <td class="pa3">what's</td>
              <td class="pa3"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hello: "Hello World"
    };
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

.f6 {
  font-size: 0.875rem;
}

.f1 {
  font-size: 3rem;
}

.fw6 {
  font-weight: 600;
}

.lh-copy {
  line-height: 1.5;
}

.mw8 {
  max-width: 64rem;
}

.w-100 {
  width: 100%;
}

.overflow-auto {
  overflow: auto;
}

.bg-white {
  background-color: #fff;
}

.pa3 {
  padding: 1rem;
}

.pa4 {
  padding: 2rem;
}

.stripe-dark:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.1);
}

.tl {
  text-align: left;
}

.center {
  margin-right: auto;
  margin-left: auto;
}
</style>
