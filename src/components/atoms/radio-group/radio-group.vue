<template>
  <div class="vf-a-radio-group">
    {{label}}
    <div :class="stacked ? 'flex flex-col' : 'flex flex-row -mx-3'">
      <vf-a-radio :class="stacked ? '' : 'px-3 py-2'" v-for="(item, index) in options" :value="item[valueField]" v-model="localValue" :key="index">{{item[textField]}}</vf-a-radio>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: null
    },
    state: {
      type: Boolean,
      default: null
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
    stacked: {
      type: Boolean,
      default() {
        return false
      }
    },
    value: {}
  },
  data() {
    return {
      localValue: this.value
    }
  },
  watch: {
    localValue:{
      deep: true,
      handler(val, oldVal) {
        if (JSON.stringify(val) !== JSON.stringify(this.value)) {
          this.$emit('input', val)
        }
      }
    },
    value:{
      deep: true,
      handler(val, oldVal) {
        if (JSON.stringify(val) !== JSON.stringify(this.localValue)) {
          this.localValue = val
        }
      }
    }
  }
};
</script>
