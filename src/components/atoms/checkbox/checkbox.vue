<template>
  <label class="inline-flex items-center">
    <input
      v-model="model"
      type="checkbox"
      :value="modelValue"
      :state="state"
      class="vf-a-checkbox form-checkbox"
    />
    <span class="ml-2">
      <slot></slot>
    </span>
  </label>
</template>
<script lang="ts" setup>
import { computed, PropType } from "vue";
import isArray from "lodash-es/isArray";
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  state: {
    type: Boolean,
    default: null,
  },
  modelValue: {
    type: [String, Number, Object, Boolean] as PropType<
      string | number | object | boolean
    >,
    default() {
      return null;
    },
  },
  checked: {
    // v-model
    default: null,
  },
});
const emit = defineEmits(["update:modelValue"]);
const model = computed({
  get() {
    return props.checked;
  },
  set(val) {
    if (isArray(props.checked)) {
      const result: any = props.checked;
      if (result.includes(props.modelValue)) {
        result.splice(result.indexOf(props.modelValue), 1);
      } else {
        result.push(props.modelValue);
      }
      emit("update:modelValue", result);
    } else {
      emit("update:modelValue", val);
    }
  },
});
</script>
