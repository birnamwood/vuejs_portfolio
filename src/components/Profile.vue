<template>
  <div class="profile">
      <div class="profile-box">
          <div class="profile-title">
            <i class="fas fa-user-circle" > Profile</i>
          </div>
          <table class="profile-table">
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
                <br>　　：　3級知的財産管理技能士
                <br>　　：　日商簿記2級
              </td>
            </tr>
              <td>経歴：　2014年3月　京都産業大学　法学部卒業
                <br>　　：　2019年4月　医療系企業に社内SEとして入社
                <br>　　：　2019年4月　退職
              </td>
            </tr>
          </table>
      </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
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
.profile {
  height: 100%;
  width: 100%;
  padding-top: 70px;
  padding-bottom: 45px;
  margin: auto;
}

.profile-box {
  margin: auto;
  text-align: center;
  /* background-color: lightblue; */
}

.profile-title {
  font-size: 60px;
  /* background-color: lightblue; */
}
.profile-table {
  font-size:20px;
  text-align: left;
  margin: auto;
  padding-bottom: 50px;
}

.profile-table td {
  border-bottom: solid 1px;
  border-collapse: collapse;
  padding: 10px;
}



</style>
