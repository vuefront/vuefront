<template>
  <div class="vf-m-product-option vf-m-product-option--select">
    <vf-a-heading level="6" class="vf-m-product-option__name">{{
      option.name
    }}</vf-a-heading>
    <vf-a-select
      class="vf-m-product-option__value"
      :modelValue="activeOptionValue"
      :options="selectOptions"
      @update:modelValue="handleChange"
    />
  </div>
</template>
<script lang="ts" setup>
import { find } from "lodash";
import { computed, PropType } from "vue";
import { useI18n } from "vue-i18n";
const i18n = useI18n();
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
interface ISelectOption {
  value: string | null;
  text: string;
  disabled?: boolean;
}
const selectOptions = computed(() => {
  let result: ISelectOption[] = [
    {
      value: null,
      text: i18n.t("elements.store.product.option.select.selectText"),
      disabled: true,
    },
  ];

  props.option.values.forEach((value: { name: string; id: string }) => {
    result = [...result, { text: value.name, value: value.id }];
  });

  return result;
});

const activeOptionValue = computed(() => {
  const result = find(props.selected, { id: props.option.id });
  return result ? result.value : null;
});
const emits = defineEmits(["change"]);
const handleChange = (value: any) => {
  emits("change", value);
};
</script>
