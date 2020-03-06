<template>
  <b-breadcrumb-item class="vf-m-breadcrumb-item" :to="to">
    <slot></slot>
  </b-breadcrumb-item>
</template>
<script>
import { BBreadcrumbItem } from "bootstrap-vue";
export default {
  components: {
    BBreadcrumbItem
  },
  props: {
    to: {
      type: String | Object,
      default() {
        return "/";
      }
    }
  }
};
</script>