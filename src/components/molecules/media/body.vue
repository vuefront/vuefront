<template>
  <div class="vf-m-media-body" :is="tag">
    <slot></slot>
  </div>
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
