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
    console.log('created common layout')
    this.initLayout();
  },
  mounted() {
    console.log('mounted common layout')
  },
  methods: {
    currentLayout() {
      const result = this.layout;
      console.log(this.layout)
      // result = result.charAt(0).toUpperCase() + result.slice(1);
      const name = "vf-t-layout-" + result;
      return name;
    },
  },
};
</script>
