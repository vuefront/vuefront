<template>
  <div :is="nav? 'b-nav-item-dropdown': 'b-dropdown'">
    <template slot="button-content">
      <slot name="button-content"></slot>
    </template>
    <slot></slot>
  </div>
</template>
<script>
import { BDropdown, BNavItemDropdown } from "bootstrap-vue";
export default {
  components: {
    BDropdown,
    BNavItemDropdown
  },
  props: {
    nav: {
      type: Boolean,
      default() {
        return false;
      }
    }
  }
};
</script>
