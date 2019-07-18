<template>
  <section class="store-special-loader">
    <skeleton bg-color="#eee" duration="2" theme="opacity" shape="radius" width="100%">
      <b-row align-h="center" style="padding-top: 7px;">
        <b-col sm="4">
          <tb-skeleton height="37px" class="mx-auto mb-5"></tb-skeleton>
        </b-col>
      </b-row>
    </skeleton>
    <vf-loader-sort class="mb-4" />
    <vf-loader-products-grid :list="isList" :grid-size="grid" class="mb-4" />
  </section>
</template>
<script>
import { TbSkeleton, Skeleton } from "tb-skeleton";
import { BRow, BCol } from "bootstrap-vue";
export default {
  components: {
    TbSkeleton,
    Skeleton,
    BRow,
    BCol
  },
  props: ["gridSize"],
  computed: {
    isList() {
      return this.mode === "list";
    },
    grid() {
      return this.gridSize;
    }
  }
};
</script>
