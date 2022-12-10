import Vue from "vue";

declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
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
