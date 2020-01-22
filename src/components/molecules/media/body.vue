<template>
  <b-media-body class="vf-m-media-body" :tag="tag">
    <slot></slot>
  </b-media-body>
</template>
<script>
import { BMediaBody } from "bootstrap-vue";
export default {
  components: {
    BMediaBody
  },
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
};
</script>
