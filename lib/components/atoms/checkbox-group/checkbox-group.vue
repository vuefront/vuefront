<template>
  <div class="vf-a-checkbox-group">
    <div :class="stacked ? 'flex flex-col' : 'flex flex-row -mx-3'">
      <vf-a-checkbox
        v-for="(item, index) in options"
        :key="index"
        v-model:checked="localValue"
        :class="stacked ? '' : 'px-3 py-2'"
        :model-value="item[valueField]"
        @update:modelValue="handleInput"
        >{{ item[textField] }}</vf-a-checkbox
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType, ref, watch } from "vue";
const props = defineProps({
  name: {
    type: String,
    default() {
      return "checkbox";
    },
  },
  label: {
    type: String,
    default: null,
  },
  state: {
    type: Boolean,
    default: null,
  },
  options: {
    type: [Array, Object] as PropType<Array<any> | object>,
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
  stacked: {
    type: Boolean,
    default() {
      return false;
    },
  },
  modelValue: {
    type: Array,
    default() {
      return [];
    },
  },
});

const localValue = ref<any[]>(props.modelValue);
const emit = defineEmits(["update:modelValue"]);
watch(
  () => localValue.value,
  (val, oldValue) => {
    if (JSON.stringify(val) !== JSON.stringify(props.modelValue)) {
      emit("update:modelValue", val);
    }
  },
  {
    deep: true,
  }
);
watch(
  () => props.modelValue,
  (val, oldVal) => {
    if (JSON.stringify(val) !== JSON.stringify(localValue)) {
      localValue.value = val;
    }
  },
  {
    deep: true,
  }
);
const handleInput = (e: any) => {
  localValue.value = e;
};
</script>
