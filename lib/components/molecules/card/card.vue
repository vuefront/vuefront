<template>
  <b-card class="vf-m-card" v-bind="$props">
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
    title: {
      type: String,
      default() {
        return null
      }
    },
    subTitle: {
      type: String,
      default() {
        return null
      }
    },
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
<style lang="scss">
@import './card.scss';
</style>