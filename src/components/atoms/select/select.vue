<template>
  <b-form-select :value="value" :options="options" @input="handleChange" />
</template>
<script>
import { BFormSelect } from "bootstrap-vue";
export default {
  components: {
    BFormSelect
  },
  props: {
    options: {
      type: [Array, Object],
      default() {
        return [];
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
