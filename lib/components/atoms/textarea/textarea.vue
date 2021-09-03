<template>
  <textarea
    class="vf-a-textarea"
    :class="getClass"
    :value="modelValue"
    :rows="rows"
    :state="state"
    @input="handleChange"
  />
</template>
<script lang="ts" setup>
import { computed, PropType } from "vue";

const props = defineProps({
  rows: {
    type: [Number, String] as PropType<number | string>,
    default() {
      return null;
    },
  },
  size: {
    type: String,
    default() {
      return "md";
    },
  },
  state: {
    type: Boolean,
    default() {
      return null;
    },
  },
  modelValue: {
    type: [String, Number, Object] as PropType<string | number | object>,
    default() {
      return null;
    },
  },
  trim: {
    type: Boolean,
    default() {
      return false;
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
const emit = defineEmits(["update:modelValue"]);
const handleChange = (e: any) => {
  emit("update:modelValue", e.target.value);
};
</script>
