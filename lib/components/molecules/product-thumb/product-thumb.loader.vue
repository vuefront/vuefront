<template>
  <skeleton
    shape="radius"
    theme="opacity"
    bg-color="#eee"
    duration="2"
    width="100%"
  >
    <vf-m-card
      :class="{ 'card-product_wide': wide }"
      class="card-product vf-m-product-thumb"
      no-body
    >
      <vf-m-row no-gutters>
        <vf-m-col :md="wide ? 3 : 12" class="px-4">
          <tb-skeleton height="205px"></tb-skeleton>
        </vf-m-col>
        <vf-m-col :md="wide ? 9 : 12">
          <vf-m-card-body class="pt-0">
            <tb-skeleton
              width="50%"
              height="20px"
              style="margin: 28px auto 28px"
            ></tb-skeleton>
            <div class="mb-3">
              <tb-skeleton
                height="13px"
                style="margin-bottom: 10px"
              ></tb-skeleton>
              <tb-skeleton
                height="13px"
                style="margin-bottom: 10px"
              ></tb-skeleton>
              <tb-skeleton
                height="13px"
                style="margin-bottom: 10px"
              ></tb-skeleton>
            </div>
            <div class="mb-0">
              <tb-skeleton height="22px" width="40%"></tb-skeleton>
            </div>
          </vf-m-card-body>
          <tb-skeleton height="40px"></tb-skeleton>
        </vf-m-col>
      </vf-m-row>
    </vf-m-card>
  </skeleton>
</template>

<script>
import { TbSkeleton, Skeleton } from "tb-skeleton";

export default {
  components: {
    TbSkeleton,
    Skeleton,
  },
  props: ["wide"],
};
</script>
