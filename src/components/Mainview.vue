<template>
  <div class="mainview">
    <p id="maintext">{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'mainview',
  data() {
    return {
      message: 'Welcome to My Portfolio.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainview {
  margin-bottom: auto;
  background-image: url("../assets/main.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

#maintext {
  color: white;
  text-align: center;
  margin: 50vh auto;
  display: inline-block;
  font-size: 36px;
  width: 100%;
  height: 100%;
}
</style>
