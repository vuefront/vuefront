<template>
  <input
    :type="type"
    :value="value"
    @input="handleInput"
    @change="handleChange"
    @keypress="handleKeypress"
    :state="state"
    :placeholder="placeholder"
    :trim="trim"
    class="vf-a-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    :class="`vf-a-input--${type} ${getClass}`"
  />
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: "md"
    },
    type: {
      type: String,
      default: "text"
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
      const result = []

      if (this.size === 'sm') {
        result.push('px-2 py-1 text-sm')
      }

      if (this.size === 'md') {
        result.push('px-3 py-1.5 text-base')
      }

      if (this.size === 'lg') {
        result.push('px-4 py-2 text-xl')
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