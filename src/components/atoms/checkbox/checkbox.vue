<template>
  <label class="inline-flex items-center">
    <input
      v-model="model"
      type="checkbox"
      :value="modelValue"
      :state="state"
      class="vf-a-checkbox form-checkbox"
    />
    <span class="ml-2">
      <slot></slot>
    </span>
  </label>
</template>
<script>
import isArray from "lodash-es/isArray";
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    state: {
      type: Boolean,
      default: null,
    },
    modelValue: {
      type: [String, Number, Object, Boolean],
      default() {
        return null;
      },
    },
    checked: {
      // v-model
      default: null,
    },
  },
  data() {
    return {
      stuff: [],
      bool: false,
    };
  },
  computed: {
    model: {
      get() {
        return this.checked;
      },
      set(val) {
        if (isArray(this.checked)) {
          const result = this.checked;
          if (result.includes(this.modelValue)) {
            result.splice(result.indexOf(this.modelValue), 1);
          } else {
            result.push(this.modelValue);
          }
          this.$emit("update:modelValue", result);
        } else {
          this.$emit("update:modelValue", val);
        }
      },
    },
  },
};
</script>
