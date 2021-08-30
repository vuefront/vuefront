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
<script>
export default {
  props: {
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
      type: [Array, Object],
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
  },
  data() {
    return {
      localValue: this.modelValue,
    };
  },
  watch: {
    localValue: {
      deep: true,
      handler(val, oldVal) {
        if (JSON.stringify(val) !== JSON.stringify(this.modelValue)) {
          this.$emit("update:modelValue", val);
        }
      },
    },
    value: {
      deep: true,
      handler(val, oldVal) {
        if (JSON.stringify(val) !== JSON.stringify(this.localValue)) {
          this.localValue = val;
        }
      },
    },
  },
  methods: {
    handleInput(e) {
      this.localValue = e;
    },
  },
};
</script>
