<template>
  <div class="main">
    <div class="mainview">
      <p id="maintext">{{message}}</p>
    </div>
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
  width: 100%;
  height: 100%;
  background-image: url("../assets/main.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

#maintext {
  color: white;
  text-align: center;
  background-color: rgb(200,250,200,0.3);
  display:inline-block;
  margin-top: 45%;
  font-size: 36px;
  font-family: fantasy;
  width: 100%;
}
</style>
