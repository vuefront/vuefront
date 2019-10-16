<template>
  <skeleton bg-color="#eee" duration="2" theme="opacity" shape="radius" width="100%">
    <vf-m-row>
      <vf-m-col sm="12" md="6">
        <vf-l-m-product-image />
        <vf-l-o-review-list />
        <vf-l-o-review-form />
      </vf-m-col>
      <vf-m-col sm="12" md="6">
        <div class="product-info pl-lg-5">
          <tb-skeleton width="30%" height="31px" style="margin-bottom: .5rem;"></tb-skeleton>
          <tb-skeleton width="20%" height="18px" style="margin-bottom: .5rem;"></tb-skeleton>
          <vf-m-row>
            <vf-m-col sm="6"></vf-m-col>
            <vf-m-col sm="6" class="text-sm-right">
              <tb-skeleton width="65px" height="20px" class="d-inline-block"></tb-skeleton>
              <tb-skeleton width="65px" height="20px" class="d-inline-block"></tb-skeleton>
            </vf-m-col>
          </vf-m-row>
          <div class="my-4 py-4 border-top">
            <tb-skeleton width="30%" height="15px" class="mb-2"></tb-skeleton>

            <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
            <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
            <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
            <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
            <tb-skeleton width="60%" height="13px" style="margin-bottom:35px;"></tb-skeleton>
            <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
            <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
            <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
            <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
          </div>
          <div class="py-4 my-4 border-bottom border-top">
            <vf-m-row>
              <vf-m-col sm="6" md="5" class="mb-4 mb-sm-0">
                <div class="product-info__price h3">
                  <tb-skeleton width="110px" height="37px"></tb-skeleton>
                </div>
              </vf-m-col>
              <vf-m-col sm="6" md="7" class="text-sm-right">
                <tb-skeleton width="165px" height="50px" class="ml-auto"></tb-skeleton>
              </vf-m-col>
            </vf-m-row>
          </div>
        </div>
      </vf-m-col>
    </vf-m-row>
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
