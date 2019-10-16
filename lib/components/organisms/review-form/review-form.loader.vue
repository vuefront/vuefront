<template>
  <skeleton shape="radius" theme="opacity" bg-color="#eee" width="100%" duration="2">
    <div>
      <tb-skeleton width="100px" height="20px" class="mb-4"></tb-skeleton>
      <tb-skeleton width="100px" height="18px" class="mb-2"></tb-skeleton>
      <vf-l-m-rating class="mb-3" />
      <tb-skeleton width="120px" height="18px" class="mb-2"></tb-skeleton>
      <tb-skeleton height="50px" class="mb-3"></tb-skeleton>
      <tb-skeleton width="120px" height="18px" class="mb-2"></tb-skeleton>
      <tb-skeleton height="74px" class="mb-3"></tb-skeleton>
      <tb-skeleton width="95px" height="50px" class="ml-auto"></tb-skeleton>
    </div>
  </skeleton>
</template>
<script>
import { TbSkeleton, Skeleton } from "tb-skeleton";

export default {
  components: {
    TbSkeleton,
    Skeleton
  }
};
</script>

