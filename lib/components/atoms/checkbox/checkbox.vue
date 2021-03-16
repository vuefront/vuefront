<template>
  <label class="inline-flex items-center">
    <input
      v-model="model"
      type="checkbox"
      :value="value"
      :state="state"
      class="vf-a-checkbox form-checkbox"
    />
    <span class="ml-2">
      <slot></slot>
    </span>
  </label>
</template>
<script>
export default {
  model: {
    prop: "checked",
    event: "change",
  },
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
      type: [String, Number, Object],
      default() {
        return null;
      },
    },
    checked: {
      // v-model
      default: null,
    },
  },
  computed: {
    model: {
      get() {
        return this.checked;
      },
      set(val) {
        this.$emit("change", val);
      },
    },
  },
};
</script>
