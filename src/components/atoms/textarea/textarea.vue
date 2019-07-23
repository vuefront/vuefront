<template>
  <b-form-textarea :value="value" @input="handleChange" :state="state" :trim="trim" />
</template>
<script>
import { BFormTextarea } from "bootstrap-vue";
export default {
  components: {
    BFormTextarea
  },
  props: {
    state: {
      type: Boolean,
      default: null
    },
    value: {},
    trim: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  methods: {
    handleChange(value) {
      this.$emit("input", value);
    }
  }
};
</script>
