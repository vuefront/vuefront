<template>
  <b-media-aside :tag="tag" :vertial-align="verticalAlign">
    <slot></slot>
  </b-media-aside>
</template>
<script>
import { BMediaAside } from "bootstrap-vue";
export default {
  components: {
    BMediaAside
  },
  props: {
    tag: {
      type: String,
      default: "div"
    },
    verticalAlign: {
      type: String,
      default: "top"
    }
  }
};
</script>
