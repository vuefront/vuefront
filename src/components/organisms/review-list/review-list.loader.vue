<template>
  <skeleton shape="radius" theme="opacity" bg-color="#eee" width="100%" duration="2">
    <div class="reviews-section">
      <tb-skeleton width="40%" height="30px" class="h3 mb-3"></tb-skeleton>
      <div class="mb-4">
        <vf-l-review v-for="(value) in [1,2]" :key="value"/>
      </div>
    </div>
  </skeleton>
</template>
<script>
import {TbSkeleton, Skeleton} from 'tb-skeleton'

export default {
  components: {
    TbSkeleton,
    Skeleton,
  },
}
</script>

