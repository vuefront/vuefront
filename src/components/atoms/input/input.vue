<template>
  <b-form-input :type="type" :value="value" @input="handleChange" />
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
    value: {}
  },
  methods: {
    handleChange(value) {
      this.$emit("input", value);
    }
  }
};
</script>
