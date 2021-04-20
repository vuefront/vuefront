<template>
  <label
    class="inline-flex items-center vf-a-radio"
    :class="{ 'vf-a-radio--active': model === value }"
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
