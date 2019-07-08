<template>
  <skeleton shape="radius" theme="opacity" bg-color="#eee" duration="2" width="100%">
    <b-card class="card-post" no-body>
      <tb-skeleton height="153px"></tb-skeleton>
      <b-card-body class="pt-0">
        <tb-skeleton width="50%" height="20px" style="margin: 24px auto 26px;"></tb-skeleton>
        <div class="mb-3">
          <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
          <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
          <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
        </div>
      </b-card-body>
    </b-card>
  </skeleton>
</template>

<script>
import "vuefront/scss/templates/common/loading.scss";
import {
  BCard,
  BCardBody,
} from "bootstrap-vue";
import { TbSkeleton, Skeleton } from "tb-skeleton";
export default {
  components: {
    TbSkeleton,
    Skeleton,
    BCard,
    BCardBody
  }
};
</script>
