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

</style>
