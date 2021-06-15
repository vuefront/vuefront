<template>
  <section class="vf-l-t-store-special">
    <skeleton
      bg-color="#eee"
      duration="2"
      theme="opacity"
      shape="radius"
      width="100%"
    >
      <vf-m-row align-h="center" style="padding-top: 7px">
        <vf-m-col xs="4">
          <tb-skeleton height="37px" class="mx-auto mb-5"></tb-skeleton>
        </vf-m-col>
      </vf-m-row>
    </skeleton>
    <vf-l-o-category-product :grid-size="gridSize" class="mt-5" />
  </section>
</template>
<script>
import { TbSkeleton, Skeleton } from "tb-skeleton";

export default {
  components: {
    TbSkeleton,
    Skeleton,
  },
  props: ["gridSize"],
};
</script>
