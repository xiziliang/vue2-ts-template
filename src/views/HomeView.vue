<template>
  <div class="home">
    <ChildComp v-model="number" @click="onClick"></ChildComp>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
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
      this.$message({
        type: "success",
        message: "成功" + this.number,
      });
    },
  },
});
</script>
