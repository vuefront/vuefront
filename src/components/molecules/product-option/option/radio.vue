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
import { filter, isEmpty } from "lodash";
export default {
  props: ["option", "selected"],
  methods: {
    handleChange(value) {
      this.$emit("change", value);
    },
    checkActive(e, option) {
      let result = filter(
        this.selected,
        value => value.id === option.id && e === value.value
      );

      return !isEmpty(result);
    }
  }
};
</script>