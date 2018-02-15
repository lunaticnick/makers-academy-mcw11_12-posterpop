<template lang="html">
  <div class="sign-up-form">
    <div class="signUpForm">
      <h3 id="signUpHeader">New Account</h3>
      <a rel="home" href="/" title="posterpop"><img style="max-width:60px; vertical-align: middle;"
           src="../../build/logo2.png"></a>
           <br><br><br>

      <b-col>Email:</b-col>
      <b-col><input type="text" v-model="email" id="email"></b-col><br>
      <b-col>Password:</b-col>
      <b-col><input type="password" v-model="password" id="password"></b-col><br><br><br>

    </div>
    <button v-on:click="signUp" id="signUpButton">Sign Up</button>
    <br><br>

    <p>Go back to <router-link id="signInHyperlink" to="/sign_in">Login</router-link>?</p>
  </div>

</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signUp',
  data: function() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
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

 <style scoped>


 .sign-up-form{
   font-family: 'Lato', sans-serif;
   color: #b5bdbf;
   margin-top: 3rem;


 }
 #signUpHeader {
   color: #A7D9BB;
   font-family: 'Open Sans', sans-serif;
   font-weight: lighter;

 }
 #signUpButton {
   font-family: 'Cabin', sans-serif;
   margin-bottom: 10px;
   color: #f8f9fa;
   background-color: #fc9a82;
   border-color: #fc9a82;
   background-image: none;

   padding: 0.3rem 1rem;
   border-radius: 50px;
   border: solid 1px;


 }
 #signInHyperlink {
   font-weight: bold;
   color: #A7D9BB;
 }


</style>
