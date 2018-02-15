<template>
<div>
  <div class='home'>

    <b-nav class="nav-bar"><b-nav-item class='nav-title' to="/">
    <a rel="home" href="/" title="posterpop"><img style="max-width:60px; vertical-align: middle;"
         src="../../build/vide.png"></a> </b-nav-item>
      <b-navbar-nav class="ml-auto nav-button">
        <b-nav-item  to="/about_us" id="infoId">{{ info }}</b-nav-item>
        <b-button v-on:click="signOut" id="logOutButton" variant="outline-primary logout">Log Out</b-button>
      </b-navbar-nav>


    </b-nav>
  </div>
  <div class='home-message'>
    <h3 class='pageTitle'>{{ message }}</h3>
    <!-- <b-col><p class="tagline">{{ tagline }}</p></b-col> -->
  </div>
</div>

</template>
<!-- <footer><p class="tagline">{{ tagline }}</p></footer> -->
<script>
import firebase from 'firebase'

export default {
  name: 'Home',
  data() {
    return {
      title: 'posterpop!',
      info: 'About Us',

      message: 'posterpop!',
      tagline: 'Schedule your cultural life with a single snap'

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
