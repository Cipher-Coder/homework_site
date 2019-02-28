<template>
  <div>
   
  </div>
</template>

<script>
export default {
  name: "wordsearch",
  data: function() {
    return {
      welcome: "Aiden's Word Search"
    };
  }
};
</script>

<style scoped>
tr,
td {
  padding: 5px;
}

.tablist {
  border: 1px solid black;
  border-bottom: 0px;
  margin-left: 5px;
  padding-left: 5px;
  padding-right: 5px;
}

.tabcontent {
  padding: 5px;
}

.inputTitle {
  font-weight: bold;
  font-size: 12px;
}

#explainWords {
  font-size: x-small;
}

#menuButton {
  background-color: #555555;
  color: white;
  display: block;
  width: 60px;
  text-align: center;
  cursor: pointer;
  height: 20px;
  line-height: 20px;
  text-decoration: none;
}

#title {
  color: blue;
}

#create {
  margin-bottom: 80px;
}
</style>