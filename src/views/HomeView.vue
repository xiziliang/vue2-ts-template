<template>
  <div class="home">
    <ChildComp @click="onClick"></ChildComp>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ChildComp from "@/components/ChildComp.vue";

export default Vue.extend({
  name: "HomeView",

  componentName: "Home",

  components: {
    ChildComp,
  },
  methods: {
    onClick(msg: string) {
      alert("点击子组件" + "-----" + msg);
    },
  },
});
</script>
