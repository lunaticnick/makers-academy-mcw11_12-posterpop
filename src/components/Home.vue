<template>
  <div class='home'>
    <b-nav>
      <b-nav-item>{{ title }}</b-nav-item>
      <b-nav-item to="/about_us" id="infoId">{{ info }}</b-nav-item>
      <b-button v-on:click="signOut" id="logOutButton">Log Out</b-button>
    </b-nav>
    <h3>{{ message }}</h3>
  </div>
</template>
<script>
  import firebase from 'firebase'

  export default {
    name: 'Home',
    data() {
      return {
        title: 'mEVENTo',
        info: 'About Us',
        message: 'Welcome to your mEVENTo page!'
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
