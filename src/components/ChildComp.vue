<template>
  <div @click="onHandle">
    <div>我是子组件</div>
    <div>{{ value }}</div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { VModel } from "@/mixins";

export default Vue.extend({
  componentName: "ChildComp",

  mixins: [VModel],

  data: () => ({}),

  mounted() {
    console.log(this.$options.componentName);
  },

  methods: {
    onHandle() {
      this.$emit("click", "触发子组件");
      (this.value as number) += 1;
    },
  },
});
</script>
