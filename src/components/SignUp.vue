<template lang="html">
  <div class="">
    <form class="signUpForm">
      <p>Please create a new account below</p>
      Email:                 <input type="text" v-model="email" id="email">
      Password:              <input type="password" v-model="password" id="password">
    </form>
    <button v-on:click="signUp">Sign Up</button>
    <span>or go back to <router-link id="signInHyperlink" to="/sign_in">login</router-link></span>
  </div>

</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signUp',
  data: function() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        function (user) {
          alert('Your account has successfully been created.')
        },
        function (err) {
          alert(err.message)
        }
      );
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
