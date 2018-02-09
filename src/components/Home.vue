<template>
  <div class='home'>
    <b-nav>
      <b-nav-item>{{ message }}</b-nav-item>
    </b-nav>
  </div>
</template>
<script>
  export default {
    name: 'Home',
    data() {
      return {
        message: 'Title',
      };
    },
  };
</script>
