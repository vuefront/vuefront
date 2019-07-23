<template>
  <b-media :tag="tag" :right-align="rightAlign" :vertival-align="verticalAlign" :no-body="noBody">
    <slot></slot>
  </b-media>
</template>
<script>
import { BMedia } from "bootstrap-vue";
export default {
  components: {
    BMedia
  },
  props: {
    tag: {
      type: String,
      default: "div"
    },
    rightAlign: {
      type: Boolean,
      default: false
    },
    verticalAlign: {
      type: String,
      default: "top"
    },
    noBody: {
      type: Boolean,
      default: false
    }
  }
};
</script>
