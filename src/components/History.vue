<template>
  <div class="history">
      <div class="history-box">
          <div class="history-title">
            <i class="fas fa-history"> History</i>
          </div>
          <table class="history-table">
            <thead>
              <tr><th>年度</th><th>内容</th></tr>
            </thead>
            <tbody>
              <tr><td>2014年3月</td><td>京都産業大学　法学部卒業</td></tr>
              <tr><td>2014年4月</td><td>医療系企業に入社</td></tr>
              <tr><td>2019年4月まで</td><td>社内SEとして基幹システムの開発、保守・運用に携わる</td></tr>
            </tbody>
          </table>
      </div>
  </div>
</template>

<script>
export default {
  name: 'history',
  data() {
    return {
      // name: "氏名：　ｊ．ｙ",
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
  height: 100vh;
  width: 100%;
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
  width: 90%;
  border-collapse: collapse;
  font-size:20px;
  text-align: left;
  margin: auto;
}

.history-table th,.history-table td {
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  padding: 10px;
}

.history-table tbody tr:nth-of-type(2n+1) {
  background-color: lightblue;
}


</style>
