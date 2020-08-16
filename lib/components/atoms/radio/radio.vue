<template>
  <b-form-radio
    :checked="checked"
    :value="value"
    @input="handleInput"
    @change="handleChange"
    :state="state"
    class="vf-a-radio"
  >
    <slot></slot>
  </b-form-radio>
</template>
<script>
import { BFormRadio } from "bootstrap-vue";
export default {
  components: {
    BFormRadio
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
      this.$emit("change", value);
    }
  }
};
</script>
