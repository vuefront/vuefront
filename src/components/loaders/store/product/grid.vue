<template>
  <div class="loading-page">
    <section>
      <b-row>
        <b-col
          sm="12"
          :md="list || column? 12: 12 / gridSize"
          v-for="(value) in [1, 2, 3 ,4]"
          :key="value"
        >
          <vf-loader-product-thumb :wide="list"/>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import "vuefront/scss/templates/common/loading.scss";
import { BContainer, BRow, BCol } from "bootstrap-vue";
import { TbSkeleton, Skeleton } from "tb-skeleton";
export default {
  components: {
    BContainer,
    TbSkeleton,
    Skeleton,
    BRow,
    BCol
  },
  props: {
    column: {
      type: Boolean,
      default: false
    },
    list: {
      type: Boolean,
      default: false
    },
    gridSize: {
      type: Number,
      default: 4
    }
  }
};
</script>
