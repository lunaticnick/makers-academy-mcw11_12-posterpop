<template>
<div class="capture-photo">
  <video id="video" controls autoplay></video>
  <router-link to="/photo">
    <button id="capture" name="captureBtn" v-on:click="capture">Capture</button>
  </router-link>
  <canvas id="canvas" width=340 height=240></canvas>
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
