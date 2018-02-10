<template>
  <div class='home'>
    <b-nav>
      <b-nav-item>{{ title }}</b-nav-item>
      <b-nav-item to="/about_us" id="infoId">{{ info }}</b-nav-item>
      <b-button id="signUpButton">Sign Up</b-button>
    </b-nav>
  </div>
</template>
<script>
  export default {
    name: 'Home',
    data() {
      return {
        title: 'Title',
        info: 'About Us'
      };
    },
  };
</script>
