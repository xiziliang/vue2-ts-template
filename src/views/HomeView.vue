<template>
  <div class="home">
    <ChildComp v-model="number" @click="onClick"></ChildComp>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ChildComp from "@/components/ChildComp.vue";

export default Vue.extend({
  name: "HomeView",

  data: () => ({ number: 1 }),

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
