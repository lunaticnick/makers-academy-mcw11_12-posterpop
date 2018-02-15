<template>
  <div>
    <div class="form-page">
      <h1>{{ msg }}</h1>
    </div>
    <form class="" method="post" v-if="!submitted">
      Text: <input type="text" name="image">
      <button v-on:click.prevent="post">Add Text</button>
    </form>
    <div v-if='submitted'>
      <h3> Thank you for submitting the form</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FormPage',
    data() {
      return {
        msg: 'Hello please submit your form',
        submitted: false,
      };
    },
    methods: {
      post() {
        this.$http.post('http://jsonplaceholder.typicode.com/posts', {
          title: this.name,
          body: 'test',
          userId: 1,
        }).then((data) => {
          this.submitted = true;
        });
      },
    },
  };
</script>
