<template>
  <div id="links-container">

    <div class="selection list">
      <bookmark v-for="(url, time) in bookmarks | filterByUrl query"
        :url="capturePhoto.urlLink"
      </bookmark>
    </div>
  </div>
</template>




<script>

</script>
