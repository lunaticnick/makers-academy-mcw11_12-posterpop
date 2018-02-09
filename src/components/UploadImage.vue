<template>
  <div>
    <div class="upload-image" >
      <h1>{{ msg }}</h1>
    </div>


    <form class="" method="post" v-if="!submitted">
      <input type="file" name="image" accept="image/*">
      <button v-on:click.prevent="post">Add Image</button>
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
      msg: 'Hello please submit your image',
      submitted: false,
    };
  },
  methods: {
    post() {
      this.$http.post('https://www.googleapis.com/upload/storage/v1/b/evento-app/o?uploadType=media', {
        // Content-Type: image/jpeg
        Authorization: Bearer '96b62158cce951e9a7cd7db5aa71023fe5db461d'
      }).then((data) => {
        console.log(data);
        this.submitted = true;
      });
    },
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
