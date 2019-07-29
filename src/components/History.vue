<template>
  <div class="history">
      <div class="history-box">
          <div class="history-title">
            <i class="fas fa-user-circle" > History</i>
          </div>
          <table class="history-table">
            <tr>
              <td>{{name}}</td>
            </tr>
            <tr>
              <td>{{age}}</td>
            </tr>
            <tr>
              <td>{{birthplace}}</td>
            </tr>
            <tr>
                <td>資格：　基本情報処理技術者
              </td>
            </tr>
              <td>経歴：　2014年3月　京都産業大学　法学部卒業
              </td>
            </tr>
          </table>
      </div>
  </div>
</template>

<script>
export default {
  name: 'history',
  data() {
    return {
      name: "氏名：　ｊ．ｙ",
      age: "年齢：　29歳",
      birthplace: "出身：　京都府長岡京市",
    }
  }
}
</script>

<style module>
  @import "https://use.fontawesome.com/releases/v5.6.1/css/all.css";
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.history {
  height: 100%;
  width: 100%;
  padding-top: 70px;
  padding-bottom: 45px;
  margin: auto;
}

.history-box {
  margin: auto;
  text-align: center;
  /* background-color: lightblue; */
}

.history-title {
  font-size: 60px;
  /* background-color: lightblue; */
}
.history-table {
  font-size:20px;
  text-align: left;
  margin: auto;
  padding-bottom: 50px;
}

.history-table td {
  border-bottom: solid 1px;
  border-collapse: collapse;
  padding: 10px;
}



</style>
