<template>
  <div class="loading-page">
    <skeleton shape="radius" theme="opacity" bg-color="#eee" width="100%" duration="2">
      <b-row>
        <b-col sm="6" md="2" align-self="center">
          <tb-skeleton height="40px"></tb-skeleton>
        </b-col>
        <b-col align-self="center">
          <tb-skeleton height="22px"></tb-skeleton>
        </b-col>
        <b-col sm="6" md="4" align-self="center">
          <tb-skeleton height="40px"></tb-skeleton>
        </b-col>
        <b-col sm="6" md="3" align-self="center">
          <tb-skeleton
            theme="opacity"
            shape="radius"
            height="40px"
            width="100%"
            class="mx-auto"
            duration="2"
          ></tb-skeleton>
        </b-col>
      </b-row>
    </skeleton>
  </div>
</template>

<script>
import "vuefront/scss/templates/common/loading.scss";
import { BContainer, BRow, BCol } from "bootstrap-vue";
import { TbSkeleton, Skeleton } from "tb-skeleton";
export default {
  components: {
    BContainer,
    TbSkeleton,
    Skeleton,
    BRow,
    BCol
  }
};
</script>
