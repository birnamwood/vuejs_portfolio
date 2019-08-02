<template>
  <div class="skill">
      <div class="skill-box">
          <div class="skill-title">
            <i class="fas fa-tools" > Skill</i>
          </div>
          <!--table-->
          <h2 class="qualification-title">資格</h2>
          <table class="qualification-table">
            <ul class="qualification-list">
              <li v-for="(qualification,index) in qualifications" :key="index">
                {{qualification.name}}
              </li>
            </ul>
          </table>

          <h2 class="tool-title">技術（実務経験あり）</h2>
          <table class="tool-table">
            <ul class="tool-list">
              <li v-for="(tool,index) in tools" :key="index">
                {{tool.name}}
              </li>
            </ul>
          </table>

          <h2 class="tool-right-title">技術（勉強中）</h2>
          <table class="tool-right-table">
            <ul class="tool-right-list">
              <li v-for="(toolright,index) in toolrights" :key="index">
                {{toolright.name}}
              </li>
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
      qualifications: [
        { name: "基本情報処理技術者"},
        { name: "3級知的財産管理技能士"},
        { name: "日商簿記2級"},
      ],
      tools: [
        { name: "RPG Ⅲ, Ⅳ"},
        { name: "VB6"},
        { name: "VB.NET"},
        { name: "C#.NET"},
        { name: "Windows"},
        { name: "CENTOS 7"},
        { name: "VMware/vSphere"},
        { name: "HYPER-V"},
      ],
      toolrights: [
        { name: "HTML/CSS"},
        { name: "javaScript/Vue.js"},
        { name: "Python/Django"},
        { name: "Ruby/Rails"},
        { name: "ruby/Rails"},
      ],
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
  width: 100%;
  padding-bottom: 50px;
}

.skill-box {
  margin: auto;
  text-align: center;
  height: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
}
.skill-title {
  font-size: 60px;
}

.qualification-title {
  margin-top: 20px;
  margin-bottom: 10px;
}
.qualification-table {
  width: 90%;
  font-size:20px;
  text-align: left;
  margin: auto;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px gray;
}
.qualification-list {
  width: 50%;
  margin: auto;
  padding: 10px;
}
.qualification-list li {
  padding: 10px;
}

.tool-title {
  margin-top: 30px;
  margin-bottom: 10px;
}
.tool-table {
  width: 90%;
  font-size:20px;
  text-align: left;
  margin: auto;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px gray;
}
.tool-list {
  margin: auto;
}
.tool-list li {
  width: 45%;
  margin: 10px;
  float: left;
}

.tool-right-title {
  margin-top: 30px;
  margin-bottom: 10px;
}
.tool-right-table {
  width: 90%;
  font-size:20px;
  text-align: left;
  margin: auto;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px gray;
}
.tool-right-list {
  margin: auto;
}
.tool-right-list li {
  width: 45%;
  margin: 10px;
  float: left;
}

@media (max-width: 640px) {
  .qualification-list {
    width: 60%;
}
}

</style>
