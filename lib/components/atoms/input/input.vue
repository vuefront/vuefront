<template>
  <b-form-input
    :type="type"
    :value="value"
    @input="handleInput"
    @change="handleChange"
    @keypress="handleKeypress"
    :state="state"
    :size="size"
    :placeholder="placeholder"
    :trim="trim"
    class="vf-a-input"
    :class="`vf-a-input--${type}`"
  />
</template>
<script>
import { BFormInput } from "bootstrap-vue";
export default {
  components: {
    BFormInput
  },
  props: {
    size: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    state: {
      type: Boolean,
      default: null
    },
    trim: {
      type: Boolean,
      default() {
        return false;
      }
    },
    value: {}
  },
  methods: {
    handleInput(value) {
      this.$emit("input", value);
    },
    handleChange(value) {
      this.$emit("change", value);
    },
    handleKeypress(value) {
      this.$emit("keypress", value);
    }
  }
};
</script>
<style lang="scss">
@import './input';
</style>