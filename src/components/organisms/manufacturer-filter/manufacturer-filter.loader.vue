<template>
  <div class="vf-o-manufacture-filter">
    <skeleton
      bg-color="#eee"
      duration="2"
      theme="opacity"
      shape="radius"
      width="100%"
    >
      <div class="flex">
        <tb-skeleton
          height="18px"
          width="50px"
          style="margin-right: 5px"
        ></tb-skeleton>
        <tb-skeleton
          height="18px"
          width="10px"
          style="margin-left: 21px"
        ></tb-skeleton>
        <tb-skeleton
          height="18px"
          width="10px"
          style="margin-left: 21px"
        ></tb-skeleton>
        <tb-skeleton
          height="18px"
          width="10px"
          style="margin-left: 21px"
        ></tb-skeleton>
        <tb-skeleton
          height="18px"
          width="10px"
          style="margin-left: 21px"
        ></tb-skeleton>
        <tb-skeleton
          height="18px"
          width="10px"
          style="margin-left: 21px"
        ></tb-skeleton>
        <tb-skeleton
          height="18px"
          width="10px"
          style="margin-left: 21px"
        ></tb-skeleton>
        <tb-skeleton
          height="18px"
          width="10px"
          style="margin-left: 21px"
        ></tb-skeleton>
      </div>
    </skeleton>
  </div>
</template>
<script>
import { TbSkeleton, Skeleton } from "tb-skeleton";

export default {
  components: {
    Skeleton,
    TbSkeleton,
  },
};
</script>
