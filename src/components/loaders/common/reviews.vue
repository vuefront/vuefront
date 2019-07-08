<template>
  <skeleton shape="radius" theme="opacity" bg-color="#eee" width="100%" duration="2">
    <div class="reviews-section">
      <tb-skeleton width="40%" height="30px" class="h3 mb-3"></tb-skeleton>
      <div class="mb-4">
        <b-card v-for="(value) in [1,2]" :key="value" class="mb-3">
          <div>
            <tb-skeleton width="100px" height="20px" class="h5 mt-1 mb-3"></tb-skeleton>
            <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
            <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
            <tb-skeleton width="60%" height="13px"></tb-skeleton>
          </div>
        </b-card>
      </div>
      <div>
        <tb-skeleton width="100px" height="20px" class="mb-4"></tb-skeleton>
        <tb-skeleton width="100px" height="18px" class="mb-2"></tb-skeleton>
        <vf-loader-rating class="mb-3"/>
        <tb-skeleton width="120px" height="18px" class="mb-2"></tb-skeleton>
        <tb-skeleton height="50px" class="mb-3"></tb-skeleton>
        <tb-skeleton width="120px" height="18px" class="mb-2"></tb-skeleton>
        <tb-skeleton height="74px" class="mb-3"></tb-skeleton>
        <tb-skeleton width="95px" height="50px" class="ml-auto"></tb-skeleton>
      </div>
    </div>
  </skeleton>
</template>
<script>
import {
  BButton,
  BCard,
  BFormGroup,
  BFormInput,
  BFormTextarea,
  BFormRadioGroup,
  BFormInvalidFeedback
} from "bootstrap-vue";
import { TbSkeleton, Skeleton } from "tb-skeleton";
export default {
  components: {
    BCard,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BFormRadioGroup,
    BButton,
    BFormInvalidFeedback,
    TbSkeleton,
    Skeleton
  }
};
</script>

