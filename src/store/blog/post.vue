<template>
  <skeleton bg-color="#eee" duration="2" theme="opacity" shape="radius" width="100%">
    <b-row align-h="start" style="padding-top: 8px;margin-bottom: 20px;">
      <b-col sm="4">
        <tb-skeleton height="37px" class="mx-auto"></tb-skeleton>
      </b-col>
    </b-row>
    <tb-skeleton height="500px"></tb-skeleton>
    <div class="my-4 py-4">
      <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
      <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
      <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
      <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
      <tb-skeleton width="60%" height="13px" style="margin-bottom:35px;"></tb-skeleton>
      <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
      <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
      <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
      <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
    </div>
    <vf-reviews-loader />
  </skeleton>
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
