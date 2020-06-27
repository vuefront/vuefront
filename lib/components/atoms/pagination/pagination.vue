<template>
  <div class="vf-a-pagination">
    <b-pagination
      v-if="totalPages > 1"
      :value="page"
      :total-rows="totalProducts"
      :per-page="perPage"
      @input="handleChange"
    />
  </div>
</template>
<script>
import { BPagination } from "bootstrap-vue";
export default {
  components: {
    BPagination
  },
  props: {
    page: {
      type: Number,
      default: 0
    },
    totalPages: {
      type: Number,
      default: 1
    },
    totalProducts: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: 20
    }
  },
  methods: {
    handleChange(e) {
      this.$emit("input", e);
    }
  }
};
</script>
