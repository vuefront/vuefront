<template>
  <b-card-body>
    <slot></slot>
  </b-card-body>
</template>
<script>
import { BCardBody } from "bootstrap-vue";
export default {
  components: {
    BCardBody
  },
  props: {
  }
};
</script>
