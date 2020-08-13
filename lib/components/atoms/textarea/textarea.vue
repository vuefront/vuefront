<template>
  <b-form-textarea
    class="vf-a-textarea"
    :value="value"
    @input="handleChange"
    :state="state"
    :size="size"
    :trim="trim"
  />
</template>
<script>
import { BFormTextarea } from "bootstrap-vue";
export default {
  components: {
    BFormTextarea
  },
  props: {
    size: {
      type: String,
      default: null
    },
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