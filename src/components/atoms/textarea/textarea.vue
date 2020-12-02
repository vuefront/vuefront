<template>
  <textarea
    class="vf-a-textarea mt-1 block w-full form-textarea"
    :class="getClass"
    :value="value"
    :rows="rows"
    @input="handleChange"
    :state="state"
  />
</template>
<script>
export default {
  props: {
    rows: {
      type: [Number, String],
      default() {
        null
      }
    },
    size: {
      type: String,
      default: null
    },
    state: {
      type: Boolean,
      default: null
    },
    value: {},
    trim: {
      type: Boolean,
      default() {
        return false;
      }
    }
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
    handleChange(value) {
      this.$emit("input", value);
    }
  }
};
</script>