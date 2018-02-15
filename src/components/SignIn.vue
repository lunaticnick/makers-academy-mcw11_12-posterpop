<template id="bgSignIn">


    <div class="signInForm">
      <h3 id="SignInHeader">posterpop!</h3>
      <a rel="home" href="/" title="posterpop"><img style="max-width:60px; vertical-align: middle;"
           src="../../build/logo2.png"></a>
           <br>
           <b-col><p class="tagline">{{ tagline }}</p></b-col>
      <b-col> Email:</b-col>
      <b-col><input type="text" v-model="email" id="email"/></b-col><br>
      Password: <b-col> <input type="password" v-model="password" id="password"/><br><br> </b-col>
      <button v-on:click="signIn" id="signInButton">Login</button>
      <br><br>
      <p class="signInForm">Oh? Don't you have an account yet? <br>Please, create one <router-link id="signUpHyperlink" to="sign_up">here</router-link>.</p>
    </div>


</template>

<script>

import firebase from 'firebase'

export default {
 name: 'signInForm',
 data: function() {
   return {
     email: '',
     password: '',
     tagline: 'Schedule your cultural life with a single snap.'
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


</style>
