<template>
  <b-alert :show="show" v-on="$listeners" :dismissible="dismissible">
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
    },
    dismissible: {
      type: Boolean,
      default: false
    }
  }
};
</script>
