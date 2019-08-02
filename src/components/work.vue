<template>
  <div class="work">
      <div class="work-box">
          <div class="work-title">
            <i class="fas fa-tools" > Work</i>
          </div>
          <!-- ボックス -->
      </div>
  </div>
</template>

<script>
export default {
  name: 'work',
  data() {
    return {
      works: [
        { name: "ポートフォリオ",
          image: "",
          url: "",
          src: "",
          skill: "",
          text: "",
        },
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
.work {
  width: 100%;
  padding-bottom: 50px;
}

.work-box {
  margin: auto;
  text-align: center;
  height: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
}
.work-title {
  font-size: 60px;
}
</style>