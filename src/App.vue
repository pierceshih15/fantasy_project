<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Dashboard</router-link>|
      <router-link to="/league">League</router-link>|
      <router-link to="/team">Team</router-link>|
      <router-link to="/matchup">MatchUp</router-link>|
      <router-link to="/signin">signin</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
/* eslint-disable */
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
