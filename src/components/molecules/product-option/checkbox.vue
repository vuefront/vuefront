<template>
  <div class="vf-m-product-option vf-m-product-option--checkbox">
    <vf-a-heading level="6" class="mt-5 vf-m-product-option__name">{{
      option.name
    }}</vf-a-heading>
    <div
      class="btn-group-toggle btn-group-options row mx-0 mt-3 mb-5 vf-m-product-option__value"
    >
      <vf-a-button
        v-for="(value, key) in option.values"
        :key="key"
        :pressed="checkActive(value.id, option)"
        :active="checkActive(value.id, option)"
        color="primary"
        class="col-12 mb-2 text-sm"
        size="lg"
        block
        @click="handleChange(value.id)"
        >{{ value.name }}</vf-a-button
      >
    </div>
  </div>
</template>
<script>
import find from "lodash/find";
import filter from "lodash/filter";
import includes from "lodash/includes";
export default {
  props: ["option", "selected"],
  computed: {
    selectedOptionValue() {
      const result = find(this.selected, { id: this.option.id });

      return result ? result.value.split("|") : [];
    },
  },
  methods: {
    handleChange(value) {
      const current = this.selectedOptionValue;
      let result = current;
      if (includes(current, value)) {
        result = filter(result, (optionValue) => value !== optionValue);
      } else {
        result = [...result, value];
      }
      this.$emit("change", result.join("|"));
    },
    checkActive(e, option) {
      const result = find(this.selected, { id: option.id });

      return result ? includes(result.value.split("|"), e) : false;
    },
  },
};
</script>
