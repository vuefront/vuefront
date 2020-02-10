<template>
  <b-card-body class="vf-m-card-body">
    <slot></slot>
  </b-card-body>
</template>
<script>
import { BCardBody } from "bootstrap-vue";
export default {
  components: {
    BCardBody
  },
  props: {}
};
</script>
