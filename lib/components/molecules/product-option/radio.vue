<template>
  <div class="vf-m-product-option vf-m-product-option--radio">
    <vf-a-heading level="6" class="vf-m-product-option__name">{{
      option.name
    }}</vf-a-heading>
    <div class="vf-m-product-option__values">
      <vf-a-button
        v-for="(value, key) in option.values"
        :key="key"
        :pressed="checkActive(value.id, option)"
        :active="checkActive(value.id, option)"
        color="white"
        class="vf-m-product-option__value"
        size="sm"
        @click="handleChange(value.id)"
        >{{ value.name }}</vf-a-button
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { filter, isEmpty } from "lodash";
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
