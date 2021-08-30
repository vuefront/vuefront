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
<script>
export default {
  props: {
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
      type: [String, Number, Object],
      default() {
        return null;
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
        if (JSON.stringify(val) !== JSON.stringify(oldVal)) {
          this.$emit("update:modelValue", val);
        }
      },
    },
    modelValue: {
      deep: true,
      handler(val, oldVal) {
        if (JSON.stringify(val) !== JSON.stringify(oldVal)) {
          this.localValue = val;
        }
      },
    },
  },
};
</script>
