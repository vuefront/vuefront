<template>
  <label
    class="inline-flex items-center vf-a-radio"
    :class="{
      'vf-a-radio--active': model === modelValue,
      '--error': !(state || state === null),
    }"
  >
    <input
      v-model="model"
      type="radio"
      :value="value"
      :state="state"
      class="vf-a-radio form-radio"
    />
    <span class="ml-2">
      <slot></slot>
    </span>
  </label>
</template>
<script lang="ts" setup>
import { computed, PropType } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  state: {
    type: Boolean,
    default: null,
  },
  value: {
    type: [String, Number, Object, Boolean] as PropType<
      string | number | object | boolean
    >,
    default() {
      return null;
    },
  },
  modelValue: {
    // v-model
    default: null,
  },
});

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit("update:modelValue", val);
  },
});
</script>
