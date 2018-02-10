<template>
  <div>
    <div class="form-page" >
      <h1>{{ msg }}</h1>
    </div>
    <form class="signUpForm" method="post">
      First Name:            <input type="text" name="firstName">
      Last Name:             <input type="text" name="lastName">
      Username:              <input type="text" name="username">
      Email:                 <input type="text" name="email">
      Password:              <input type="text" name="email">
      Password Confirmation: <input type="text" name="email">
      <button v-on:click.prevent="post">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      msg: 'Hello please sign up below',
    };
  },
  methods: {
  },
};
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
