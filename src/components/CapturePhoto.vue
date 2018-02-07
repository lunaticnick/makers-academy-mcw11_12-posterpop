<template>
<div class="capture-photo">
  <video id="video" controls autoplay></video>
  <button id="capture" v-on:click="capture">Capture</button>
  <canvas id="canvas" width=340 height=240></canvas>
</div>
</template>

<script>
export default {
  name: 'CapturePhoto',
  methods: {
    capture() {
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
    },
  },
};

window.addEventListener('load', () => {
  const video = document.getElementById('video');
  const canvas = document.getElementById('canvas'); // eslint-disable-line no-unused-vars
  const captureButton = document.getElementById('capture'); // eslint-disable-line no-unused-vars

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
