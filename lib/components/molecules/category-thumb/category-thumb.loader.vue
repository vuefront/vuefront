<template>
  <div class="loading-page">
    <skeleton bg-color="#eee" duration="2" theme="opacity" shape="radius" width="100%">
      <tb-skeleton height="82px" class="mb-2"></tb-skeleton>
      <tb-skeleton height="20px" class="mx-auto" style="margin-bottom: .5rem"></tb-skeleton>
    </skeleton>
  </div>
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
