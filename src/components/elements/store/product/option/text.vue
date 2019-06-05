<template>
  <b-form-input :value="activeOptionValue" @input="handleChange"/>
</template>
<script>
import {BFormInput} from 'bootstrap-vue'
import {find} from 'lodash'

export default {
  components: {
    BFormInput
  },
  props: ['option', 'selected'],
  computed: {
    activeOptionValue() {
      let result = find(
        this.selected,
        {id: this.option.id}
      );

      return result ? result.value : ''
    }
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value)
    }
  }
}
</script>