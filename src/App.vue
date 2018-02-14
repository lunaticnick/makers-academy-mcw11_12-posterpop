<template >
<div id="app">
    <router-view class="header"></router-view>

    <router-view name="home"></router-view>

    <router-view name="pageTitle"></router-view>

    <router-view name="capturePhoto"></router-view>

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

</style>
