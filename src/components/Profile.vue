<template>
  <div class="profile">
      <div class="profile-box">
          <div class="profile-title">
            <i class="fas fa-user-circle" > Profile</i>
          </div>
          <table class="profile-table">
            <tbody>
              <tr><td>氏名</td><td>{{name}}</td></tr>
              <tr><td>年齢</td><td>{{age}}</td></tr>
              <tr><td>住所</td><td>{{address}}</td></tr>
              <tr><td>趣味</td><td>{{hobby}}</td></tr>
            </tbody>
          </table>
      </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data() {
    return {
      name: "ｊ．ｙ",
      age: "29歳",
      address: "京都府長岡京市",
      hobby: "バイク、旅行",
    }
  }
}
</script>

<style module>
  @import "https://use.fontawesome.com/releases/v5.6.1/css/all.css";
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile {

  width: 100%;
}

.profile-box {
  padding-top: 100px;
  padding-bottom: 100px;
  margin: auto;
  text-align: center;
  height: 100%;
}

.profile-title {
  font-size: 60px;
  /* background-color: lightblue; */
}
.profile-table {
  width: 90%;
  font-size:20px;
  text-align: left;
  margin: auto;
  padding-bottom: 50px;
  border-collapse: collapse;
}

.profile-table td {
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  padding: 15px;
}

.profile-table tbody tr:nth-of-type(2n) {
  background-color: lightblue;
}


</style>
