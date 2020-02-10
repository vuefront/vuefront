<template>
  <b-breadcrumb-item>
    <slot></slot>
  </b-breadcrumb-item>
</template>
<script>
import { BBreadcrumbItem } from "bootstrap-vue";
export default {
  components: {
    BBreadcrumbItem
  }
};
</script>