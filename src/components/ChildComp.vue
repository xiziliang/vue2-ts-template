<template>
  <div @click="$emit('click', '出发了子组件')">我是子组件</div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  componentName: "ChildComp",

  data() {
    return {};
  },
  mounted() {
    console.log(this.$options.componentName);
    console.log(this.$parent);
    console.log(this.$root);
  },
});
</script>
