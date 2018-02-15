<template id="bgSignIn">

  <!-- <b-container id="singInContainer> -->
    <div class="signInForm">
      <h3 id="SignInHeader">Welcome back!</h3> <br><br>
      <b-col> Email:</b-col>
      <b-col><input type="text" v-model="email" id="email"/></b-col><br>
      Password: <b-col> <input type="password" v-model="password" id="password"/><br><br> </b-col>
      <button v-on:click="signIn" id="signInButton">Login</button>
      <br><br>
      <p class="signInForm">Oh? Don't you have an account yet? <br>Please, create one <router-link id="signUpHyperlink" to="sign_up">here</router-link>.</p>
    </div>
  <!-- </b-container> -->

</template>

<script>

import firebase from 'firebase'

export default {
 name: 'signInForm',
 data: function() {
   return {
     email: '',
     password: ''
   }
 },
 methods: {
   signIn: function() {
     firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
       (user) => {
         this.$router.replace('home')
       },
       (err) => {
         alert(err.message)
       }
     );
   }
 }
}
</script>

<style>
  body {background-color: #white;}

</style>
