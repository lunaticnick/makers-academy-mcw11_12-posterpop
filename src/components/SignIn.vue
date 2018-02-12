<template>
  <div>
    <form class="signInForm">
      <h3>Sign In</h3>
      Email:    <input type="text" v-model="email" id="email"><br>
      Password: <input type="password" v-model="password" id="password"><br>
      <button v-on:click="signIn" id="signInButton">Sign In</button>
      <p>You don't have an account yet, please create <router-link id="signUpHyperlink" to="sign_up">one.</router-link></p>
    </form>
  </div>
</template>

<script>

export default {
  name: 'signInForm',
  data: function() {
    return {}
  },
  methods: {
    signIn: function () {
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
