<template>
  <skeleton shape="radius" theme="opacity" bg-color="#eee" duration="2" width="100%">
    <b-card :class="{'card-product_wide' : wide}" class="card-product" no-body>
      <b-row no-gutters>
        <b-col :md="wide ? 3 : 12" class="px-4">
          <tb-skeleton height="205px"></tb-skeleton>
        </b-col>
        <b-col :md="wide ? 9 : 12">
          <b-card-body class="pt-0">
            <tb-skeleton width="50%" height="20px" style="margin: 28px auto 28px;"></tb-skeleton>
            <div class="mb-3">
              <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
              <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
              <tb-skeleton height="13px" style="margin-bottom:10px;"></tb-skeleton>
            </div>
            <div class="mb-0">
              <tb-skeleton height="22px" width="40%"></tb-skeleton>
            </div>
          </b-card-body>
          <tb-skeleton height="40px"></tb-skeleton>
        </b-col>
      </b-row>
    </b-card>
  </skeleton>
</template>

<script>
import "vuefront/scss/templates/common/loading.scss";
import {
  BRow,
  BCol,
  BContainer,
  BCard,
  BCardImgLazy,
  BCardBody,
  BCardFooter,
  BButton,
  BButtonGroup,
  BLink
} from "bootstrap-vue";
import { TbSkeleton, Skeleton } from "tb-skeleton";
export default {
  components: {
    TbSkeleton,
    Skeleton,
    BLink,
    BRow,
    BCol,
    BContainer,
    BCard,
    BCardBody,
    BCardImgLazy,
    BCardFooter,
    BButton,
    BButtonGroup
  },
  props: ["wide"]
};
</script>
