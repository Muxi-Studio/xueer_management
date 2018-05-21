<template>
  <div id="app">
    学而管理后台
    <router-link to="/">课程</router-link>
    <router-link to="/user">用户</router-link>
    <router-link to="/article">运营</router-link>
    <router-view></router-view>
    <Loading></Loading>
  </div>
</template>

<script>
import Loading from "./components/common/Loading"

export default {
  components: {
      Loading,
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
