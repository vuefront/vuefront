<template>
  <vf-a-textarea :value="activeOptionValue" @input="handleChange" />
</template>
<script>
import { find } from "lodash";

export default {
  props: ["option", "selected"],
  computed: {
    activeOptionValue() {
      let result = find(this.selected, { id: this.option.id });

      return result ? result.value : "";
    }
  },
  methods: {
    handleChange(value) {
      this.$emit("change", value);
    }
  }
};
</script>