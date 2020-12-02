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
    class="vf-a-input mt-1 block w-full form-input"
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