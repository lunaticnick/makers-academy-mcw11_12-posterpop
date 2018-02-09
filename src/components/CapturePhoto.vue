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
  methods: {
    capture() {
      const video = document.getElementById('video');
      const canvas = document.getElementById('canvas'); // eslint-disable-line no-unused-vars
      const context = canvas.getContext('2d');

      context.drawImage(video, 0, 0, canvas.width, canvas.height);
    },
  },
};

window.addEventListener('load', () => {
  const video = document.getElementById('video');

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
