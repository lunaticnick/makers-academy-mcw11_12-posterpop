<template>
<div id="links-container">
  <!-- <button id="test" v-on:click.prevent="showUrl">click  </button> -->
   <li class='listLinks'  v-for="(value, key) in list">
     {{ value }}
   </li>




</div>
</template>




<script>
import firebase from 'firebase'

export default {
  name: 'UrlList',
  data() {
    return {
      uid: firebase.auth().currentUser.uid,
      list: ''
    }
  },
  mounted(){this.showUrl()},
  methods: {
    showUrl: function() {
      firebase.database().ref('users/' + this.uid).on('value',(snapshot) =>
        this.list = snapshot.val());
    }
  }
};
</script>
