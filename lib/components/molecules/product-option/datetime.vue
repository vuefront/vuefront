<template>
  <div class="vf-m-product-option-datetime">
    <vf-a-heading level="6" class="vf-m-product-option-datetime__name mt-5">{{option.name}}</vf-a-heading>
    <vf-a-input
      class="vf-m-product-option-datetime__value"
      :value="activeOptionValue"
      type="datetime-local"
      @input="handleChange"
    />
  </div>
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