<template>
  <b-form-checkbox-group
    :value="value"
    :options="options"
    :value-field="valueField"
    :text-field="textField"
    :stacked="stacked"
    @input="handleChange"
    class="vf-a-checkbox-group"
  >
  <slot></slot>
  </b-form-checkbox-group>
</template>
<script>
import { BFormCheckboxGroup } from "bootstrap-vue";
export default {
  components: {
    BFormCheckboxGroup
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
    value: {}
  },
  methods: {
    handleChange(value) {
      this.$emit("input", value);
    }
  }
};
</script>
