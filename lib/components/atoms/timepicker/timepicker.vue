<template>
  <input type="time" class="vf-a-datepicker mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" :value="value" @input="handleInput" @change="handleChange" @keypress="handleKeypress">
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: ""
    },
    state: {
      type: Boolean,
      default: null
    },
    trim: {
      type: Boolean,
      default() {
        return false;
      }
    },
    value: {}
  },
  methods: {
    handleInput(value) {
      this.$emit("input", value);
    },
    handleChange(value) {
      this.$emit("change", value);
    },
    handleKeypress(value) {
      this.$emit("keypress", value);
    }
  }
};
</script>
