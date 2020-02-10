<template>
  <b-breadcrumb>
    <slot></slot>
  </b-breadcrumb>
</template>
<script>
import { BBreadcrumb } from "bootstrap-vue";
export default {
  components: {
    BBreadcrumb
  }
};
</script>