<template>
  <div>
    <form class="signInForm">
      <h3>Sign In</h3>
      Email
      <input type="text" id="email"><br>
      Password
      <input type="password" id="password"><br>
      <button>Sign In</button>
      <p>You don't have an account yet, please create one.</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'signInForm',
  data: function() {
    return {}
  },
  methods: {}
}
</script>

<style lang="css">
</style>
