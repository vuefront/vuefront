<template>
  <div class="loading-page">
    <skeleton bg-color="#eee" duration="2" theme="opacity" shape="radius" width="100%">
      <vf-m-row align-h="center" style="padding-top: 7px;">
        <vf-m-col sm="4">
          <tb-skeleton height="37px" class="mx-auto"></tb-skeleton>
        </vf-m-col>
      </vf-m-row>
      <vf-m-row align-h="center" style="padding-top: 38px;">
        <vf-m-col sm="9">
          <tb-skeleton height="18px"></tb-skeleton>
        </vf-m-col>
      </vf-m-row>
      <vf-m-row align-h="center" style="padding-top: 28px;">
        <vf-m-col sm="3">
          <tb-skeleton height="20px" class="mx-auto"></tb-skeleton>
        </vf-m-col>
      </vf-m-row>
    </skeleton>
  </div>
</template>
<script>
export default {
  name: 'vf-l-o-category-info'
}
</script>

<script>
import {TbSkeleton, Skeleton} from 'tb-skeleton'

export default {
  components: {
    TbSkeleton,
    Skeleton
  }
}
</script>
