<template>
  <b-form-input
    :type="type"
    :value="value"
    @input="handleInput"
    @change="handleChange"
    :state="state"
    :trim="trim"
  />
</template>
<script>
import { BFormInput } from "bootstrap-vue";
export default {
  components: {
    BFormInput
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
    }
  }
};
</script>
