<template>
  <div class="about">
    <TableComp></TableComp>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { TableComp } from "@/components";

export default Vue.extend({
  name: "AboutView",
  components: {
    TableComp,
  },
});
</script>
