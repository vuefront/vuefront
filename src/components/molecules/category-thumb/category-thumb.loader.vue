<template>
  <div
    class="vf-m-category-thumb-loader loading-page"
  >
    <skeleton
      bg-color="#eee"
      duration="2"
      theme="opacity"
      shape="radius"
      width="100%"
    >
      <tb-skeleton height="90px" class="mb-2 vf-m-category-thumb-loader__tb-skeleton --middle"></tb-skeleton>
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
