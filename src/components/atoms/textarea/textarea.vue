<template>
  <textarea
    class="vf-a-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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