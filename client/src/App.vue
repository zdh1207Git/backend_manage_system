<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {storeTokenToStore} from './lib/storeToken';

export default {
  name: "app",
  created() {
    if (localStorage.eleToken) storeTokenToStore(this.$store, localStorage.eleToken)
  }
}
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>