<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
});
</script>
