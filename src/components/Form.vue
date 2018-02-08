<template>
<div class="form-page">
  <h1>{{ msg }}</h1>
</div>
<form class="" action="api_test.html" method="post">
  Text: <input type="text" name="image">
  <button v-on:click.prevent="post">Add Text</button>
</form>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      msg: 'Hi!',
    };
  },
  methods: {
    post: function(){
      this.$http.post("http://jsonplaceholder.typicode.com/posts", {
        title: this.name,
        body: "test",
        userId: 1
      }).then(function(data){
        console.log(data);
      });
    }
  }
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
