<template>
  <div class="vf-l-o-product-sort">
    <skeleton
      shape="radius"
      theme="opacity"
      bg-color="#eee"
      width="100%"
      duration="2"
    >
      <vf-m-row>
        <vf-m-col sm="6" md="2" align-self="center">
          <tb-skeleton height="40px"></tb-skeleton>
        </vf-m-col>
        <vf-m-col align-self="center">
          <tb-skeleton height="22px"></tb-skeleton>
        </vf-m-col>
        <vf-m-col sm="6" md="4" align-self="center">
          <tb-skeleton height="40px"></tb-skeleton>
        </vf-m-col>
        <vf-m-col sm="6" md="3" align-self="center">
          <tb-skeleton
            theme="opacity"
            shape="radius"
            height="40px"
            width="100%"
            class="mx-auto"
            duration="2"
          ></tb-skeleton>
        </vf-m-col>
      </vf-m-row>
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
