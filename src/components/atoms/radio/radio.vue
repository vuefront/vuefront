<template>
  <label class="inline-flex items-center">
    <input
      type="radio"
      v-model="model"
      :value="value"
      :state="state"
      class="vf-a-radio form-radio"
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