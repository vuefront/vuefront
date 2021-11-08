<template>
  <div class="vf-m-product-option vf-m-product-option--checkbox">
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
import { find, filter, includes } from "lodash";
import { computed, PropType } from "vue";

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

const selectedOptionValue = computed(() => {
  const result = find(props.selected, { id: props.option.id });

  return result ? result.value.split("|") : [];
});

const emits = defineEmits(["change"]);
const handleChange = (value: string) => {
  const current = selectedOptionValue.value;
  let result = current;
  if (includes(current, value)) {
    result = filter(result, (optionValue) => value !== optionValue);
  } else {
    result = [...result, value];
  }
  emits("change", result.join("|"));
};
const checkActive = (e: any, option: { id: string }) => {
  const result = find(props.selected, { id: option.id });

  return result ? includes(result.value.split("|"), e) : false;
};
</script>
