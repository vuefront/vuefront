<template>
  <section class="mb-4">
    <skeleton shape="radius" theme="opacity" bg-color="#eee" width="100%" duration="2">
      <tb-skeleton height="500px"></tb-skeleton>
      <b-row class="mt-3">
        <b-col sm="12" md="3" v-for="(value) in [1,2,3,4]" :key="value">
          <tb-skeleton width="100px" height="100px" class="mx-auto"></tb-skeleton>
        </b-col>
      </b-row>
    </skeleton>
  </section>
</template>
<script>
import { BRow, BCol } from "bootstrap-vue";
import { TbSkeleton, Skeleton } from "tb-skeleton";
export default {
  components: {
    BRow,
    BCol,
    TbSkeleton,
    Skeleton
  }
};
</script>

