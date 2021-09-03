<template>
  <select
    :value="getLocalValue"
    class="vf-a-select"
    :class="getClass"
    @input="handleChange"
  >
    <option
      v-for="(item, index) in options"
      :disabled="item.disabled || false"
      :key="index"
      :value="index"
    >
      {{ item[textField] }}
    </option>
  </select>
</template>
<script lang="ts" setup>
import { PropType, computed } from "vue";
const props = defineProps({
  size: {
    type: String,
    default: "md",
  },
  options: {
    type: Array as PropType<Array<any>>,
    default() {
      return [];
    },
  },
  valueField: {
    type: String,
    default() {
      return "value";
    },
  },
  textField: {
    type: String,
    default() {
      return "text";
    },
  },
  noSelect: {
    type: Boolean,
    default() {
      return false;
    },
  },
  state: {
    type: Boolean,
    default: null,
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
const getLocalValue = computed(() => {
  for (const key in props.options) {
    if (
      JSON.stringify(props.options[key][props.valueField]) ===
      JSON.stringify(props.modelValue)
    ) {
      return key;
    }
  }
  return null;
});

const emit = defineEmits(["update:modelValue"]);
const handleChange = (e: any) => {
  emit("update:modelValue", props.options[e.target.value][props.valueField]);
};
</script>
