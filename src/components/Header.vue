<template>
<header>
   <router-link to="/" class="title">My Portfolio</router-link>

    <nav>
      <router-link to="/" class="menu">Home</router-link>
      <router-link to="/profile" class="menu">Profile</router-link>
    </nav>
  </header>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

header {
  background-color: rgb(218, 226, 218,0.7);
  width: 100%;
  font-size: 24px;
  text-align: center;
  box-shadow: 0 3px 0 0 #b4afaf, 0 1px 1px 0 #e9e9e9;
  transform: translateY(-3px);
  box-sizing: border-box;
  border-radius: 6px;
  padding: 0.5em 1em 0.5em;
  color: #0f2018;
  font-weight: bold;
}

.title {
  float:left;
  color: inherit;
  text-decoration: none;
}

nav {
  float: right;
}

.menu {
  color: inherit;
  text-decoration: none;
  margin: 20px;
}

</style>
