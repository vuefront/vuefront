<template>
  <div class="loading-page" v-if="loading">
    <skeleton shape="3" bg-color="#dcdbdc">
      <b-container>
        <b-row class="mt-3" align-h="center">
          <b-col sm="3" class="mb-2">
            <tb-skeleton theme="opacity" shape="circle" :aspect-ratio="0.3" width="30%" bg-color="#eee" class="mx-auto mb-2" duration="2"></tb-skeleton>
            <tb-skeleton theme="opacity" shape="radius" width="100%" :aspect-ratio=".1" bg-color="#eee"></tb-skeleton>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col sm="12" class="mb-2">
            <tb-skeleton theme="opacity" shape="radius" width="100%" :aspect-ratio=".02" bg-color="#eee" duration="2"></tb-skeleton>
          </b-col>
          <b-col sm="12" class="mb-2">
            <tb-skeleton theme="opacity" shape="radius" width="100%" :aspect-ratio=".02" bg-color="#eee" duration="2"></tb-skeleton>
          </b-col>
          <b-col sm="12" class="mb-2">
            <tb-skeleton theme="opacity" shape="radius" width="100%" :aspect-ratio=".02" bg-color="#eee" duration="2"></tb-skeleton>
          </b-col>
          <b-col sm="12" class="mb-2">
            <tb-skeleton theme="opacity" shape="radius" width="100%" :aspect-ratio=".02" bg-color="#eee" duration="2"></tb-skeleton>
          </b-col>
        </b-row>
      </b-container>
    </skeleton>
  </div>
</template>

<script>
import "vuefront/scss/templates/common/loading.scss";
import { BContainer, BRow, BCol } from "bootstrap-vue";
import "tb-skeleton/dist/skeleton.css";
import { TbSkeleton, Skeleton } from "tb-skeleton";
export default {
  components: {
    BContainer,
    TbSkeleton,
    Skeleton,
    BRow,
    BCol
  },
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    }
  }
};
</script>
