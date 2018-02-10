<template>
<div class="capture-photo">

<input
      type="file"
      accept="image/*"
      capture="environment"
      @change="onImageCaptured($event.target.name, $event.target.files)">

      <div v-if="imgURL">
        <img v-bind:src="imgURL"  style="width:200px">
        <button v-on:click.prevent="post">Send Image</button>
      </div>

</div>
</template>

<script>
export default {
  name: 'CapturePhoto',
  data() {
    return {
      imgURL: null,
      strImage: null,
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
          this.strImage = this.imgURL.replace(/^data:image\/[a-z]+;base64,/, "");
        });
    },

    post() {
      this.$http.post('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCn9ifg_YHD4PTkTHyYqq0GhreGYJGOqKA', {
        requests:[
          {
            image:{
              content:this.strImage,
            },
            features:[
              {
                type:"TEXT_DETECTION",
              }
            ]
          }
        ]
      }).then((dataApi) => {
        console.log(dataApi);
        this.element = dataApi.body.responses[0].textAnnotations;
        this.element.shift();

        for(var i = 0; i < this.element.length; i ++){
          if (this.element[i].description.includes(".uk")){
            console.log(this.element[i].description)
          };
        };


      });
    },
  },
};

</script>
