<template>
  <div class="vf-m-product-option vf-m-product-option--radio">
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
import filter from "lodash/filter";
import isEmpty from "lodash/isEmpty";
export default {
  props: ["option", "selected"],
  methods: {
    handleChange(value) {
      this.$emit("change", value);
    },
    checkActive(e, option) {
      const result = filter(
        this.selected,
        (value) => value.id === option.id && e === value.value
      );

      return !isEmpty(result);
    },
  },
};
</script>
