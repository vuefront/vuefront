<template>
  <div class="vf-a-radio-group">
    <div :class="stacked ? 'flex flex-col' : 'flex flex-row -mx-3'">
      <vf-a-radio
        v-for="(item, index) in options"
        :key="index"
        v-model="localValue"
        :class="{
          'px-3 py-2': stacked,
        }"
        :value="item[valueField]"
        >{{ item[textField] }}</vf-a-radio
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType, ref, watch } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  state: {
    type: Boolean,
    default: null,
  },
  options: {
    type: [Array, Object] as PropType<Array<any> | Object>,
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
    type: [String, Number, Object],
    default() {
      return null;
    },
  },
});
const localValue = ref(props.modelValue);
const emit = defineEmits(["update:modelValue"]);
watch(
  () => localValue.value,
  (val, oldVal) => {
    if (JSON.stringify(val) !== JSON.stringify(oldVal)) {
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
    if (JSON.stringify(val) !== JSON.stringify(oldVal)) {
      localValue.value = val;
    }
  },
  {
    deep: true,
  }
);
</script>
