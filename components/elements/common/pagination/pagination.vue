<template>
  <div>
    <v-pagination v-if="totalPages > 1" :value="page" :length="totalPages" @input="handleChange"></v-pagination>
  </div>
</template>
<script>
import isNull from "lodash/isNull";
import filter from "lodash/filter";

export default {
  name: "vfCommonPaginationDefault",
  props: {
    page: {
      type: Number,
      default: 0
    },
    totalPages: {
      type: Number,
      default: 1
    }
  },
  methods: {
    handleChange(e) {
      this.$emit("input", e);
    }
  }
};
</script>
