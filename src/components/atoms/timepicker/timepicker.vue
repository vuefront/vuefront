<template>
  <input type="time" class="vf-a-datepicker mt-1 block w-full form-input" :class="getClass" :value="value" @input="handleInput" @change="handleChange" @keypress="handleKeypress">
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
  computed: {
    getClass() {
      let result = []

      if (this.state || this.state === null) {
      } else {
        result.push('border-red-400 placeholder-red-400 focus:border-red-400 focus:ring-red-400 focus:shadow-none')
      }
      return result.join(' ')
    }
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
