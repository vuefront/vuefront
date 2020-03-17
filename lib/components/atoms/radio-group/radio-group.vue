<template>
  <b-form-radio-group
    :value="value"
    :options="options"
    :value-field="valueField"
    :text-field="textField"
    :stacked="stacked"
    :state="state"
    @input="handleChange"
    class="vf-a-radio-group"
  >
  <slot></slot>
  </b-form-radio-group>
</template>
<script>
import { BFormRadioGroup } from "bootstrap-vue";
export default {
  components: {
    BFormRadioGroup
  },
  props: {
    options: {
      type: [Array, Object],
      default() {
        return [];
      }
    },
    valueField: {
      type: String,
      default() {
        return "value";
      }
    },
    textField: {
      type: String,
      default() {
        return "text";
      }
    },
    stacked: {
      type: Boolean,
      default() {
        return false
      }
    },
    state: {
      type: Boolean,
      default: null
    },
    value: {}
  },
  methods: {
    handleChange(value) {
      this.$emit("input", value);
    }
  }
};
</script>
