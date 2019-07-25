<template>
  <b-alert :show="show">
    <slot></slot>
  </b-alert>
</template>
<script>
import { BAlert } from "bootstrap-vue";
export default {
  components: {
    BAlert
  },
  props: {
    show: {
      type: [Boolean, Number, String],
      default: false
    }
  }
};
</script>
