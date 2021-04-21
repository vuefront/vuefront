<template>
  <div :is="currentLayout" class="vf-t-common-layout">
    <slot></slot>
  </div>
</template>
<script>
import { BaseLayout } from "vuefront/lib/utils/baseLayout.js";
import isUndefined from "lodash/isUndefined";
export default {
  mixins: [BaseLayout],
  computed: {
    currentLayout() {
      let result = this.layout;
      result = result.charAt(0).toUpperCase() + result.slice(1);
      const name = "Layout" + result;

      if (!isUndefined(this.$vuefront.templates[name])) {
        return this.$vuefront.templates[name];
      }
      return this.$vuefront.templates.DefaultLayout;
    },
  },
  created() {
    this.initLayout();
  },
};
</script>
