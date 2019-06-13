<template>
  <skeleton bg-color="#eee" duration="2" theme="opacity" shape="radius" width="100%">
    <b-row>
      <b-col sm="12" md="6">
        <vf-product-image-loader/>
        <vf-reviews-loader />
      </b-col>
      <b-col sm="12" md="6">
        <div class="product-info pl-lg-5">
          <tb-skeleton width="30%" height="31px" style="margin-bottom: .5rem;"></tb-skeleton>
          <tb-skeleton width="20%" height="18px" style="margin-bottom: .5rem;"></tb-skeleton>
          <b-row>
            <b-col sm="6"></b-col>
            <b-col sm="6" class="text-sm-right">
              <tb-skeleton width="65px" height="20px" class="d-inline-block"></tb-skeleton>
              <tb-skeleton width="65px" height="20px" class="d-inline-block"></tb-skeleton>
            </b-col>
          </b-row>
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
            <b-row>
              <b-col sm="6" md="5" class="mb-4 mb-sm-0">
                <div class="product-info__price h3">
                  <tb-skeleton width="110px" height="37px"></tb-skeleton>
                </div>
              </b-col>
              <b-col sm="6" md="7" class="text-sm-right">
                <tb-skeleton width="165px" height="50px" class="ml-auto"></tb-skeleton>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </b-row>
  </skeleton>
</template>
<script>
import { BRow, BCol } from "bootstrap-vue";
import { TbSkeleton, Skeleton } from "tb-skeleton";
export default {
  components: {
    BRow,
    BCol,
    TbSkeleton,
    Skeleton
  }
};
</script>
