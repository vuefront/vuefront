<template>
  <div class="vf-m-product-option vf-m-product-option--radio">
    <vf-a-heading level="6" class="mt-5 vf-m-product-option__name">{{
      option.name
    }}</vf-a-heading>
    <div
      class="
        btn-group-toggle btn-group-options
        row
        mx-0
        mt-3
        mb-5
        vf-m-product-option__value
      "
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
<script setup lang="ts">
import filter from "lodash-es/filter";
import isEmpty from "lodash-es/isEmpty";
import { PropType } from "vue";
const props = defineProps({
  option: {
    type: Object,
    default: () => null,
  },
  selected: {
    type: Array as PropType<{ id: string; value: string }[]>,
    default: () => [],
  },
});
const emits = defineEmits(["change"]);
const handleChange = (value: any) => {
  emits("change", value);
};
const checkActive = (e: any, option: { id: string }) => {
  const result = filter(
    props.selected,
    (value) => value.id === option.id && e === value.value
  );

  return !isEmpty(result);
};
</script>
