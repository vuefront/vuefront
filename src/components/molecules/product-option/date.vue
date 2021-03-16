<template>
  <div class="vf-m-product-option vf-m-product-option--date">
    <vf-a-heading level="6" class="mt-5 vf-m-product-option__name">{{
      option.name
    }}</vf-a-heading>
    <vf-a-input
      class="vf-m-product-option__value"
      :value="activeOptionValue"
      type="date"
      @input="handleChange"
    />
  </div>
</template>
<script>
import find from "lodash/find";
export default {
  props: ["option", "selected"],
  computed: {
    activeOptionValue() {
      const result = find(this.selected, { id: this.option.id });

      return result ? result.value : "";
    },
  },
  methods: {
    handleChange(value) {
      this.$emit("change", value);
    },
  },
};
</script>
