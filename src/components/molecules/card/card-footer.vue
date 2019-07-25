<template>
  <b-card-footer>
    <slot></slot>
  </b-card-footer>
</template>
<script>
import { BCardFooter } from "bootstrap-vue";
export default {
  components: {
    BCardFooter
  }
};
</script>
