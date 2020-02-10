<template>
  <b-card class="vf-m-card" :no-body="noBody" :body-bg-variant="bodyBgColor">
    <slot></slot>
  </b-card>
</template>
<script>
import { BCard } from "bootstrap-vue";
export default {
  components: {
    BCard
  },
  props: {
    noBody: {
      type: Boolean,
      default() {
        return false;
      }
    },
    bodyBgColor: {
      type: String,
      default() {
        return "";
      }
    }
  }
};
</script>
