<template>
  <div class="work">
      <div class="work-box">
          <div class="work-title">
            <i class="fas fa-tools" > Work</i>
          </div>
          <!-- ボックス -->
          <Workbox v-for="work in works" :key="work.name" :item="work" />
      </div>
  </div>
</template>

<script>
import Workbox from './Workbox'

export default {
  name: 'work',
  components: {
    Workbox,
  },
  data() {
    return {
      works: [
        {
          name: "ポートフォリオ",
          image: "../assets/portfolio.png",
          url: "https://localhost:8080",
          src: "https://github.com/birnamwood/vuejs_portfolio",
          skill: "HTTPS/CSS/JS/Vue.js",
          text: "ポートフォリオ公開用",
        },
        {
          name: "検査結果照会システム",
          image: "../assets/portfolio.png",
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