<template>
  <b-form-checkbox
    :checked="checked"
    :value="value"
    @input="handleInput"
    @update:indeterminate="handleChange"
    :state="state"
    class="vf-a-checkbox"
    v-on="$listeners"
  >
    <slot></slot>
  </b-form-checkbox>
</template>
<script>
import { BFormCheckbox } from "bootstrap-vue";
export default {
  components: {
    BFormCheckbox
  },
  props: {
    type: {
      type: String,
      default: "text"
    },
    state: {
      type: Boolean,
      default: null
    },
    value: {},    
    checked: {
      // v-model
      default: null
    }
  },
  model: {
    prop: 'checked',
    event: 'input'
  },
  methods: {
    handleInput(value) {
      this.$emit("input", value);
    },
    handleChange(value) {
      this.$emit("update:indeterminate", value);
    }
  }
};
</script>
<style lang="scss">
@import './checkbox';
</style>