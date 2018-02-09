<template>
<div id="app">
  <router-view class="header"></router-view>
  <router-view class="view-title" name="pageTitle"></router-view>
  <router-view class="view-button" name="capturePhoto"></router-view>
  <router-view class="form-page" name="formPage"></router-view>
  <router-view class="upload-image" name="uploadImage"></router-view>
  <router-view class="showing-post" name="showPost"></router-view>

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
