<template>
  <b-form-textarea :value="activeOptionValue" @input="handleChange"/>
</template>
<script>
import {BFormTextarea} from 'bootstrap-vue/es/components'
import {find} from 'lodash'

export default {
  components: {
    BFormTextarea
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