<template>
  <b-card-footer class="vf-m-card-footer">
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
