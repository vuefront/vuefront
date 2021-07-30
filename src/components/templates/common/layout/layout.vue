<template>
  <component :is="currentLayout()" class="vf-t-common-layout">
    <slot></slot>
  </component>
</template>
<script>
import { BaseLayout } from "vuefront/lib/utils/baseLayout.js";
export default {
  mixins: [BaseLayout],
  created() {
    this.initLayout();
  },
  methods: {
    currentLayout() {
      const result = this.layout;
      // result = result.charAt(0).toUpperCase() + result.slice(1);
      const name = "vf-t-layout-" + result;
      return name;
    },
  },
};
</script>
