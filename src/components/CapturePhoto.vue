<template>
<div class="capture-photo">
  <video id="video" controls autoplay width=150 height=150></video>
  <canvas id="canvas" width=180 height=150></canvas>
  <button id="capture" v-on:click="capture">Capture</button>
<br/>
<hr>

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
    capture() {
      const video = document.getElementById('video');
      const canvas = document.getElementById('canvas'); // eslint-disable-line no-unused-vars
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
    },

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
        });
    },
  },
};

window.addEventListener('load', () => {
  const video = document.getElementById('video');
  const fileInput = document.getElementById('file-input');

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
      video: true,
    }).then((stream) => {
      video.src = window.URL.createObjectURL(stream);
      video.play();
    });
  }



});
</script>
