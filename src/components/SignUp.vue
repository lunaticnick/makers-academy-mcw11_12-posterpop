<template lang="html">
  <div class="">
    <form class="signUpForm">
      <p>Please create a new account below</p>
      First Name:            <input type="text" id="firstName">
      Last Name:             <input type="text" id="lastName">
      Username:              <input type="text" id="username">
      Email:                 <input type="text" id="email">
      Password:              <input type="text" id="password">
      Password Confirmation: <input type="text" id="password_confirmation">
    </form>
    <button>Sign Up</button>
    <span>or go back to <router-link id="signInHyperlink" to="/sign_in">login</router-link></span>
  </div>

</template>

<script>
export default {
  name: 'signUpForm',
  data: function() {
    return {}
  },
  methods: {}
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
