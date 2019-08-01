<template>
  <skeleton shape="radius" theme="opacity" bg-color="#eee" duration="2" width="100%">
    <vf-m-card class="vf-m-post-thumb" no-body>
      <tb-skeleton height="153px"></tb-skeleton>
      <vf-m-card-body class="pt-0">
        <tb-skeleton width="50%" height="20px" style="margin: 24px auto 26px;"></tb-skeleton>
        <div class="mb-3">
          <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
          <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
          <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
        </div>
      </vf-m-card-body>
    </vf-m-card>
  </skeleton>
</template>

<script>
import {TbSkeleton, Skeleton} from 'tb-skeleton'

export default {
  components: {
    TbSkeleton,
    Skeleton,
  }
}
</script>
