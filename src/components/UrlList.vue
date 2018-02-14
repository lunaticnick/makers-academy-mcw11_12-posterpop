<template>
<div id="links-container">
  <li class='listLinks' v-for="(value, key) in list">
    <a name="url_from_list" id="url_list" v-bind:href='value'>{{ value }}</a>
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
  mounted() {
    this.showUrl()
  },
  methods: {
    showUrl: function() {
      firebase.database().ref('users/' + this.uid).on('value', (snapshot) =>
        this.list = snapshot.val());
    }
  }
};
</script>
