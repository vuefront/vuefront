<template>
  <div class="vf-m-product-option-text">
    <vf-a-heading level="6" class="vf-m-product-option-text__name mt-5">{{option.name}}</vf-a-heading>
    <vf-a-input
      class="vf-m-product-option-text__value"
      :value="activeOptionValue"
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