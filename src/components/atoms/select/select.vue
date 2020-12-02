<template>
  <select
    :value="getLocalValue"
    @input="handleChange"
    class="vf-a-select block w-full mt-1 form-select"
    :class="getClass"
  >
    <option v-for="(item, index) in options" :key="index" :value="index">{{item[textField]}}</option>
  </select>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: "md"
    },
    options: {
      type: [Array, Object],
      default() {
        return [];
      }
    },
    valueField: {
      type: String,
      default() {
        return "value";
      }
    },
    textField: {
      type: String,
      default() {
        return "text";
      }
    },
    noSelect: {
      type: Boolean,
      default () {
        return false
      }
    },
    state: {
      type: Boolean,
      default: null
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
    },
    getLocalValue() {
      
      for (const key in this.options) {
        if (JSON.stringify(this.options[key][this.valueField]) === JSON.stringify(this.value)) {
          return key
        }
      }
      return null
    },
    optionsData() {
      let result = []

      if(this.noSelect) {
        let option = {}
        option[this.textField] = this.$t('atoms.select.pleaseSelectText')
        option[this.valueField] = null
        result = [...result, option]
      }

      result = [...result, ...this.options]
      return result
    }
  },
  methods: {
    handleChange(e) {
      this.$emit("input", this.options[e.target.value][this.valueField]);
    }
  }
};
</script>