<template>
  <div class="loading-page">
    <skeleton bg-color="#eee" duration="2" theme="opacity" shape="radius" width="100%">
      <b-row align-h="center" style="padding-top: 7px;">
        <b-col sm="4">
          <tb-skeleton height="37px" class="mx-auto"></tb-skeleton>
        </b-col>
      </b-row>
      <b-row align-h="center" style="padding-top: 38px;">
        <b-col sm="9">
          <tb-skeleton height="18px"></tb-skeleton>
        </b-col>
      </b-row>
      <b-row align-h="center" style="padding-top: 28px;">
        <b-col sm="3">
          <tb-skeleton height="20px" class="mx-auto"></tb-skeleton>
        </b-col>
      </b-row>
      <b-row align-h="center" class="mb-5" style="padding-top: 16px;">
        <b-col v-for="(value) in [1,2,3,4,5,6]" :key="value" sm="4" md="2">
          <tb-skeleton height="82px" class="mb-2"></tb-skeleton>
          <tb-skeleton height="20px" class="mx-auto" style="margin-bottom: .5rem"></tb-skeleton>
        </b-col>
      </b-row>
    </skeleton>
  </div>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";
import { TbSkeleton, Skeleton } from "tb-skeleton";
export default {
  components: {
    TbSkeleton,
    Skeleton,
    BRow,
    BCol
  }
};
</script>
