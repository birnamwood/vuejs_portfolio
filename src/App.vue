<template>
  <div id="app">
      <Header/>
        <Mainview id="mainview"/>
        <Profile id="profile"/>
        <History id="history"/>
        <Skill id="skill"/>
        <Work id="work"/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Mainview from './components/Mainview'
import Profile from './components/Profile'
import History from './components/History'
import Skill from './components/Skill'
import Work from './components/Work'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Mainview,
    Profile,
    History,
    Skill,
    Work,
  },
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

</style>
