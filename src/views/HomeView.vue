<template>
  <div class="home">
    <ChildComp v-model="number" @click="onClick"></ChildComp>
    <div class="btn">按钮</div>
    <div class="lg:(p-2 m-2 text-red-400) <lg:(p-2 m-2 text-green-400)">
      文本颜色
    </div>
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
