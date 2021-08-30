<template>
  <label
    class="inline-flex items-center vf-a-radio"
    :class="{ 'vf-a-radio--active': model === modelValue }"
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
<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    state: {
      type: Boolean,
      default: null,
    },
    value: {
      type: [String, Number, Object, Boolean],
      default() {
        return null;
      },
    },
    modelValue: {
      // v-model
      default: null,
    },
  },
  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
      },
    },
  },
};
</script>
