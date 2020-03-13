<template>
  <b-form-timepicker
    :value="value"
    @input="handleInput"
    @change="handleChange"
    @keypress="handleKeypress"
    :state="state"
    :size="size"
    :placeholder="placeholder"
    :trim="trim"
    class="vf-a-datepicker"
  />
</template>
<script>
import { BFormTimepicker } from "bootstrap-vue";
export default {
  components: {
    BFormTimepicker
  },
  props: {
    size: {
      type: String,
      default: null
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
