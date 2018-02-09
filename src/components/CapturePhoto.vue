<template>
<div class="capture-photo">

<input
      type="file"
      accept="image/*"
      capture="environment"
      @change="onImageCaptured($event.target.name, $event.target.files)">

    <img v-bind:src="imgURL" v-if="imgURL" style="width:200px">

</div>
</template>

<script>
export default {
  name: 'CapturePhoto',
  data() {
    return {
      imgURL: null,
    };
  },
  methods: {

    getBase64Image(file) {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.addEventListener('load', () => {
          resolve(fileReader.result);
        });
        fileReader.addEventListener('error', (err) => {
          reject(err);
        });
        fileReader.readAsDataURL(file);
      });
    },

    onImageCaptured(name, files) {
      this.getBase64Image(files[0])
        .then((url) => {
          this.imgURL = url;
          console.log(this.imgURL);
        });
    },
  },
};

</script>
