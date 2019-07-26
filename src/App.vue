<template>
  <div id="app">
    <Header/>
    <router-view class="page"></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page {
  display: block;
  height: 100vh;
  padding-top: 70px;
  padding-bottom: 45px;
}
</style>
