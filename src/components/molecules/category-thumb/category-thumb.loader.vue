<template>
  <div
    class="vf-m-category-thumb-loader loading-page"
    style="margin-bottom: 2rem"
  >
    <skeleton
      bg-color="#eee"
      duration="2"
      theme="opacity"
      shape="radius"
      width="100%"
    >
      <tb-skeleton height="90px" class="mb-2"></tb-skeleton>
      <tb-skeleton
        height="20px"
        class="mx-auto"
        style="margin-bottom: 0.5rem"
      ></tb-skeleton>
    </skeleton>
  </div>
</template>

<script>
import { TbSkeleton, Skeleton } from "tb-skeleton";

export default {
  components: {
    TbSkeleton,
    Skeleton,
  },
};
</script>
