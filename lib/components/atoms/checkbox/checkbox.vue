<template>
  <label class="inline-flex items-center">
    <input
      type="checkbox"
      v-model="model"
      :value="value"
      :state="state"
      class="vf-a-checkbox form-checkbox"
    >
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
      default: "text"
    },
    state: {
      type: Boolean,
      default: null
    },
    value: {},
    checked: {
      // v-model
      default: null
    }
  },
  model: {
    prop: 'checked',
    event: 'change',
  },
  computed: {
    model: {
      get() {
        return this.checked;
      },
      set(val) {
        this.$emit('change', val);
      },
    },
  }
};
</script>