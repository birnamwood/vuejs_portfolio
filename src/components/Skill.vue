<template>
  <div class="skill">
      <div class="skill-box">
          <div class="skill-title">
            <i class="fas fa-tools" > Skill</i>
          </div>
          <table class="skill-table">
            <tr>
              <td>{{qualification}}</td>
            </tr>
          </table>
      </div>
  </div>
</template>

<script>
export default {
  name: 'skill',
  data() {
    return {
      qualification: "資格：　基本情報",
    }
  }
}
</script>

<style module>
  @import "https://use.fontawesome.com/releases/v5.6.1/css/all.css";
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skill {
  height: 500px;
  width: 100%;
}

.skill-box {
  margin: auto;
  text-align: center;
  height: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  /* background-color: lightblue; */
}
.skill-title {
  font-size: 60px;
  background-color: lightblue;
}

.skill-table {
  font-size:20px;
  text-align: left;
  margin: auto;
  padding-bottom: 50px;
}

.skill-table td {
  border-bottom: solid 1px;
  border-collapse: collapse;
  padding: 10px;
}

</style>
