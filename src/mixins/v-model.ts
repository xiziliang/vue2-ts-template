import Vue from "vue";

/**
 * VModel
 * @description 只适应于props的值类型为基本数据类型
 */
function factory(prop = "modelValue", event = "update:modelValue") {
  return Vue.extend({
    name: "VModelMixins",

    model: { prop, event },

    props: {
      [prop]: {
        type: [String, Boolean, Number],
        required: false,
      },
    },

    computed: {
      value: {
        get() {
          return this[prop];
        },
        set(val: string | boolean | number) {
          (this as Vue).$emit(event, val);
        },
      },
    },
  });
}

const VModel = factory();

export default VModel;
