<template>
  <div class="btn-group-toggle btn-group-options row mx-0 mt-3 mb-5">
    <vf-a-button
      v-for="(value, key) in option.values"
      :key="key"
      :pressed="checkActive(value.id, option)"
      :active="checkActive(value.id, option)"
      color="neutral"
      class="col-12 mb-2 text-sm"
      size="lg"
      @click="handleChange(value.id)"
    >{{value.name}}</vf-a-button>
  </div>
</template>
<script>
import {find, filter, includes} from 'lodash'
export default {
  props: ['option', 'selected'],
  computed: {
    selectedOptionValue() {
      let result = find(
        this.selected,
        {id: this.option.id}
      );

      return result ? result.value.split('|') : []
    }
  },
  methods: {
    handleChange(value) {
      const current = this.selectedOptionValue
      let result = current
      if(includes(current, value)) {
        result = filter(result, optionValue => value !== optionValue)
      } else {
        result = [...result, value]
      }
      this.$emit('change', result.join('|'))
    },
    checkActive(e, option) {
      let result = find(
        this.selected,
        {id: option.id}
      );

      return result ? includes(result.value.split('|'), e) : false;
    },
  }
}
</script>