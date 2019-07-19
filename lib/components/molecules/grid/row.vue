<template>
  <b-row :no-gutters="noGutters">
    <slot></slot>
  </b-row>
</template>
<script>
import { BRow } from "bootstrap-vue";
export default {
  components: {
    BRow
  },
  props: {
    noGutters: {
      type: Boolean,
      default() {
        return false;
      }
    },
    alignV: {
      type: String,
      default() {
        return "";
      }
    },
    alignH: {
      type: String,
      default() {
        return "";
      }
    }
  }
};
</script>
