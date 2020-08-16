<template>
  <b-row :no-gutters="noGutters" :tag="tag" :align-v="alignV" :align-h="alignH">
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
    tag: {
      type: String,
      default() {
        return "div";
      }
    },
    noGutters: {
      type: Boolean,
      default() {
        return false;
      }
    },
    alignV: {
      type: String,
      default() {
        return null;
      }
    },
    alignH: {
      type: String,
      default() {
        return null;
      }
    }
  }
};
</script>