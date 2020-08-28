<template>
  <div id="app">
    <router-view />
    <modal v-if="this.$store.getters.MODAL" />
  </div>
</template>

<script>
import modal from "./components/modal";

export default {
  name: 'App',
  components: {
    modal
  }
}
</script>

