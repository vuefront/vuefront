<template>
  <skeleton bg-color="#eee" duration="2" theme="opacity" shape="radius" width="100%">
    <vf-m-row align-h="start" style="padding-top: 8px;margin-bottom: 20px;">
      <vf-m-col sm="4">
        <tb-skeleton height="37px" class="mx-auto"></tb-skeleton>
      </vf-m-col>
    </vf-m-row>
    <vf-m-row align-h="start" style="margin-bottom: 20px;">
      <vf-m-col sm="4">
        <tb-skeleton height="20px" class="mx-auto"></tb-skeleton>
      </vf-m-col>
    </vf-m-row>
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
    <vf-l-review-list/>
    <vf-l-review-form/>
  </skeleton>
</template>
<script>
import {TbSkeleton, Skeleton} from 'tb-skeleton'

export default {
  components: {
    TbSkeleton,
    Skeleton
  }
}
</script>
