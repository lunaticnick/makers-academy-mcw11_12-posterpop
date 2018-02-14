<template>
<div id="links-container">
  <button id="test" v-on:click.prevent="showUrl">click  </button>
  <ul id='example-1'>
   <li v-for="(value, key) in list">
     {{ value }}
   </li>
  </ul>




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
  methods: {
    showUrl: function() {
      firebase.database().ref('users/' + this.uid).on('value',(snapshot) =>
        this.list = snapshot.val());
        console.log(this.list)

    }
  }
};
</script>
