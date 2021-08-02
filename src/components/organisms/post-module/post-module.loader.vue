<template>
  <skeleton
    shape="radius"
    theme="opacity"
    bg-color="#eee"
    width="100%"
    duration="2"
  >
    <div class="mb-5">
      <div class="mb-5 h6">
        <tb-skeleton width="150px" height="20px" class="mx-auto"></tb-skeleton>
      </div>
      <vf-l-o-post-grid :column="column" />
    </div>
  </skeleton>
</template>
<script>
import * as ISkeleton from "tb-skeleton";
const { TbSkeleton, Skeleton } = ISkeleton


export default {
  components: {
    TbSkeleton,
    Skeleton,
  },
  props: ["column"],
};
</script>
