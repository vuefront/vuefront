<template>
  <b-form-select
    :value="value"
    :options="optionsData"
    :value-field="valueField"
    :text-field="textField"
    :state="state"
    @input="handleChange"
    class="vf-a-select"
  />
</template>
<script>
import { BFormSelect } from "bootstrap-vue";
export default {
  components: {
    BFormSelect
  },
  props: {
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
    handleChange(value) {
      this.$emit("input", value);
    }
  }
};
</script>