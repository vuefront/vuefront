<template>
  <b-form-select
    :value="value"
    :options="options"
    :value-field="valueField"
    :text-field="textField"
    @input="handleChange"
    class="vf-a-select"
  />
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
    value: {}
  },
  methods: {
    handleChange(value) {
      this.$emit("input", value);
    }
  }
};
</script>
