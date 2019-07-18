<template>
  <skeleton shape="circle" theme="opacity" bg-color="#eee" width="100%" duration="2">
    <span v-for="(rating) in [1,2,3,4,5]" :key="rating">
       <tb-skeleton width="1.125em" height="18px" class="d-inline-block mr-1"></tb-skeleton>
    </span>
  </skeleton>
</template>
<script>
import { TbSkeleton, Skeleton } from "tb-skeleton";
export default {
  components: {
    TbSkeleton,
    Skeleton
  }
};
</script>
