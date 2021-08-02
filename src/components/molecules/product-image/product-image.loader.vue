<template>
  <section class="vf-l-m-product-image mb-4">
    <skeleton
      shape="radius"
      theme="opacity"
      bg-color="#eee"
      width="100%"
      duration="2"
    >
      <tb-skeleton height="500px"></tb-skeleton>
      <vf-m-row class="mt-3">
        <vf-m-col v-for="value in [1, 2, 3, 4]" :key="value" xs="12" md="3">
          <tb-skeleton
            width="100px"
            height="100px"
            class="mx-auto"
          ></tb-skeleton>
        </vf-m-col>
      </vf-m-row>
    </skeleton>
  </section>
</template>
<script>
import * as ISkeleton from "tb-skeleton";
const { TbSkeleton, Skeleton } = ISkeleton


export default {
  components: {
    TbSkeleton,
    Skeleton,
  },
};
</script>