<template>
  <div class="skill">
      <div class="skill-box">
          <div class="skill-title">
            <i class="fas fa-tools" > Skill</i>
          </div>
          <!--table-->
          <h2 class="qualification-title">資格</h2>
          <table class="skill-table">
            <ul class="qualification-list">
              <li>{{qualification}}</li>
              <li>{{qualification2}}</li>
              <li>{{qualification3}}</li>
            </ul>
          </table>
      </div>
  </div>
</template>

<script>
export default {
  name: 'skill',
  data() {
    return {
      qualification: "基本情報処理技術者",
      qualification2: "3級知的財産管理技能士",
      qualification3: "日商簿記2級",
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
  padding-bottom: 50px;
}

.skill-box {
  margin: auto;
  text-align: center;
  height: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: lightblue;
}
.skill-title {
  font-size: 60px;
}

.skill-table {
  font-size:20px;
  text-align: left;
  margin: auto;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 0px 10px 0px gray;
}
.qualification-list {
  list-style: none;
  padding: 10px;
}
.qualification-list li {
  padding: 5px;
}


</style>
