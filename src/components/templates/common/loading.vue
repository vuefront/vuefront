<template>
  <div class="loading-page" v-if="loading">
    <skeleton shape="3" bg-color="#dcdbdc">
      <b-container>
        <b-row>
          <b-col>
            <tb-skeleton
              shape="radius"
              width="30%"
              class="mr-auto"
              :aspect-ratio=".05"
              bg-color="#eee"
            ></tb-skeleton>
          </b-col>
          <b-col></b-col>
          <b-col>
            <tb-skeleton
              shape="radius"
              width="60%"
              class="ml-auto"
              :aspect-ratio=".05"
              bg-color="#eee"
            ></tb-skeleton>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col>
            <tb-skeleton
              shape="radius"
              width="40%"
              class="mr-auto"
              :aspect-ratio=".1"
              bg-color="#eee"
            ></tb-skeleton>
          </b-col>
          <b-col align-self="center">
            <tb-skeleton
              shape="radius"
              width="50%"
              class="mx-auto"
              :aspect-ratio=".07"
              bg-color="#eee"
            ></tb-skeleton>
          </b-col>
          <b-col align-self="center">
            <tb-skeleton
              shape="radius"
              width="50%"
              :aspect-ratio=".05"
              bg-color="#eee"
              class="ml-auto"
            ></tb-skeleton>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col sm="1">
            <tb-skeleton shape="radius" width="100%" :aspect-ratio=".3" bg-color="#eee"></tb-skeleton>
          </b-col>
          <b-col sm="1">
            <tb-skeleton shape="radius" width="100%" :aspect-ratio=".3" bg-color="#eee"></tb-skeleton>
          </b-col>
          <b-col sm="1">
            <tb-skeleton shape="radius" width="100%" :aspect-ratio=".3" bg-color="#eee"></tb-skeleton>
          </b-col>
          <b-col sm="1">
            <tb-skeleton shape="radius" width="100%" :aspect-ratio=".3" bg-color="#eee"></tb-skeleton>
          </b-col>
          <b-col sm="1">
            <tb-skeleton shape="radius" width="100%" :aspect-ratio=".3" bg-color="#eee"></tb-skeleton>
          </b-col>
          <b-col sm="1">
            <tb-skeleton shape="radius" width="100%" :aspect-ratio=".3" bg-color="#eee"></tb-skeleton>
          </b-col>
          <b-col sm="6"></b-col>
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
