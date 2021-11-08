<template>
  <input
    type="date"
    class="vf-a-datepicker vf-a-input"
    :class="getClass"
    :value="modelValue"
    @input="handleInput"
    @change="handleChange"
    @keypress="handleKeypress"
  />
</template>
<script lang="ts" setup>
import { computed, PropType, VNode } from "vue";
const props = defineProps({
  size: {
    type: String,
    default: "md",
  },
  state: {
    type: Boolean,
    default: null,
  },
  trim: {
    type: Boolean,
    default() {
      return false;
    },
  },
  modelValue: {
    type: [String, Number, Object] as PropType<string | number | object>,
    default() {
      return null;
    },
  },
});

const getClass = computed(() => {
  const result = [];

  if (props.size === "sm") {
    result.push("--sm");
  }

  if (props.size === "md") {
    result.push("--md");
  }

  if (props.size === "lg") {
    result.push("--lg");
  }

  if (!(props.state || props.state === null)) {
    result.push("--error");
  }

  return result.join(" ");
});

const emit = defineEmits(["update:modelValue", "change", "keypress"]);

const handleInput = (e: any) => {
  emit("update:modelValue", e.target.value);
};
const handleChange = (e: any) => {
  emit("change", e.target.value);
};
const handleKeypress = (e: any) => {
  emit("keypress", e.target.value);
};
</script>
