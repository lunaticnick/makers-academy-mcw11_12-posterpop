<template>
  <div>
    <h3 id="urlListHeader">My Links</h3>
    <b-list-group id="links-container">
      <li class='list-links' v-for="(value, key) in list">
        <b-list-group-item button class="links-box">
          <a name="urlFromList" id="url_list" v-bind:href='value'>{{ value }}</a>
          <button v-on:click="removeUrl(key)" id="remove_url">Delete</button>
        </b-list-group-item>

      </li>
    </b-list-group>
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
      },
      removeUrl: function(key) {
        firebase.database().ref('users/' + this.uid).on('value', (snapshot) =>
          snapshot.forEach(function(reciptSnap) {
            console.log(reciptSnap.ref)
            if (reciptSnap.key === key) {
              reciptSnap.ref.remove()
            }
          })
        )
      }
    }
  };
</script>
