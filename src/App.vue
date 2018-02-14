<template>
<div id="app">
    <router-view class="header"></router-view>

    <router-view name="home"></router-view>

    <router-view name="aboutUs"></router-view>

    <router-view name="pageTitle"></router-view>

    <router-view name="capturePhoto"></router-view>

    <router-view name="urlList"></router-view>

    <router-view name="signUp"></router-view>

    <router-view name="signIn"></router-view>
</div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
