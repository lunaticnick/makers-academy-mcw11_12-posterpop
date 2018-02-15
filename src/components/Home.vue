<template>
<div>
  <div class='home'>
    <b-nav class="nav-bar">

      <b-nav-item class='nav-title'>{{ title }}</b-nav-item>

      <b-navbar-nav class="ml-auto nav-button">

        <b-nav-item   to="/about_us" id="infoId">{{ info }}</b-nav-item>

        <b-button v-on:click="signOut" id="logOutButton" variant="outline-primary logout">Log Out</b-button>
      </b-navbar-nav>

    </b-nav>
  </div>
  <div class='home-message'>
    <h3 class='pageTitle'>{{ message }}</h3>
  </div>
</div>
</template>
<script>
import firebase from 'firebase'

export default {
  name: 'Home',
  data() {
    return {
      title: 'posterpop!',
      info: 'About Us',
      message: 'posterpop!'
    }
  },
  methods: {
    signOut: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('sign_in')
      })
    }
  }
};
</script>
