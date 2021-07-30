<template>
  <label class="inline-flex items-center">
    <input
      v-model="model"
      type="checkbox"
      :value="value"
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
  model: {
    prop: "checked",
    event: "input",
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    state: {
      type: Boolean,
      default: null,
    },
    value: {
      type: [String, Number, Object],
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
          if (result.includes(this.value)) {
            result.splice(result.indexOf(this.value), 1);
          } else {
            result.push(this.value);
          }
          this.$emit("input", result);
        } else {
          this.$emit("input", !this.checked);
        }
      },
    },
  },
};
</script>
