<template>
  <div>
    <div id="header">
      <div
        style="margin-bottom:5px;margin-top:5px;font-size:14px;font-family:Arial;font-weight:bold;"
        id="title"
      >{{welcome}}</div>
      <div id="menuButton" style="font-size:10px;display:none;" onclick="showMenu();">MENU</div>
    </div>
    <div id="menu">
      <div id="_main" style="display:block" class="tabcontent">
        <div class="inputTitle">Enter your words:</div>
        <div>
          <textarea
            cols="20"
            rows="10"
            name="inputWords"
            id="inputWords"
            onfocus="inputActive=1;"
            onblur="inputActive=0;"
          ></textarea>
        </div>
        <p id="explainWords">Seperate words with comma, space, or new line</p>
      </div>
      <div id="_options" style="display:block;" class="tabcontent">
        <table cellspacing="0">
          <tr>
            <td>
              <div class="inputTitle">Rows</div>
            </td>
            <td>
              <div>
                <input type="text" id="numRows" value size="2" maxlength="3">
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="inputTitle">Columns</div>
            </td>
            <td>
              <div>
                <input type="text" id="numCols" value size="2" maxlength="3">
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="inputTitle">Font size</div>
            </td>
            <td>
              <div>
                <input type="text" id="fontSize" value size="2"> mm
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div id="buttons">
      <input type="button" value="Create Puzzle" id="create" v-on:click="createPuzzle()">&nbsp;
      <input
        type="button"
        value="Return"
        id="returnToGame"
        style="visibility:hidden;"
        onclick="returnToGame();"
      >
    </div>
    <div id="puzzle" style="display:none;">
      <table border="0">
        <tr>
          <td style="text-align:center;border:0px;">
            <div id="puzzleText"></div>
          </td>
        </tr>
      </table>
    </div>
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