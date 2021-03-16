<template>
  <skeleton
    shape="radius"
    theme="opacity"
    bg-color="#eee"
    width="100%"
    duration="2"
  >
    <vf-m-card class="mb-3">
      <div>
        <tb-skeleton
          width="100px"
          height="20px"
          class="h5 mt-1 mb-3"
        ></tb-skeleton>
        <tb-skeleton height="13px" style="margin-bottom: 10px"></tb-skeleton>
        <tb-skeleton height="13px" style="margin-bottom: 10px"></tb-skeleton>
        <tb-skeleton width="60%" height="13px"></tb-skeleton>
      </div>
    </vf-m-card>
  </skeleton>
</template>
<script>
import { Skeleton, TbSkeleton } from "tb-skeleton";

export default {
  components: {
    TbSkeleton,
    Skeleton,
  },
};
</script>
