<template>
  <div class="vf-m-product-option vf-m-product-option--datetime">
    <vf-a-heading level="6" class="vf-m-product-option__name">{{
      option.name
    }}</vf-a-heading>
    <vf-a-input
      class="vf-m-product-option__value"
      :modelValue="activeOptionValue"
      type="datetime-local"
      @update:modelValue="handleChange"
    />
  </div>
</template>
<script setup lang="ts">
import { find } from "lodash";
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
const activeOptionValue = computed(() => {
  const result = find(props.selected, { id: props.option.id });
  return result ? result.value : "";
});
const emits = defineEmits(["change"]);
const handleChange = (value: any) => {
  emits("change", value);
};
</script>
