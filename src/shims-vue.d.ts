import Vue from "vue";

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "vue/types/vue" {
  // NOTE: 给实例添加类型
  interface Vue {
    $axios: string;
  }

  // NOTE: 给构造器添加类型
  interface VueConstructor {
    $: string;
  }
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    componentName?: string;
  }
}
