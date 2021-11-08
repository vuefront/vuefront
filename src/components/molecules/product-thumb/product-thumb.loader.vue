<template>
  <vf-m-card
    :class="{ 'card-product_wide': wide }"
    class="card-product vf-m-product-thumb"
    no-body
  >
    <vf-m-row no-gutters>
      <vf-m-col :md="wide ? 3 : 12" class="px-4">
        <vf-m-skeleton height="205px"></vf-m-skeleton>
      </vf-m-col>
      <vf-m-col :md="wide ? 9 : 12">
        <vf-m-card-body class="pt-0">
          <vf-m-skeleton
            width="50%"
            height="20px"
            style="margin: 28px auto 28px"
          ></vf-m-skeleton>
          <div class="mb-3">
            <vf-m-skeleton
              height="13px"
              style="margin-bottom: 10px"
            ></vf-m-skeleton>
            <vf-m-skeleton
              height="13px"
              style="margin-bottom: 10px"
            ></vf-m-skeleton>
            <vf-m-skeleton
              height="13px"
              style="margin-bottom: 10px"
            ></vf-m-skeleton>
          </div>
          <div class="mb-0">
            <vf-m-skeleton height="22px" width="40%"></vf-m-skeleton>
          </div>
        </vf-m-card-body>
        <vf-m-skeleton height="40px"></vf-m-skeleton>
      </vf-m-col>
    </vf-m-row>
  </vf-m-card>
</template>
<script lang="ts" setup>
defineProps({
  wide: {
    type: Boolean,
    default: () => false,
  },
});
</script>
