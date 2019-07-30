<template>
  <div :is="nav? 'b-nav-item-dropdown': 'b-dropdown'" :variant="variant" :right="right" :size="size">
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
    right: {
      type: Boolean,
      default() {
        return null
      }
    },
    size: {
      type: String,
      default() {
        return null;
      }
    },
    variant: {
      type: String,
      default() {
        return null;
      }
    },
    nav: {
      type: Boolean,
      default() {
        return false;
      }
    }
  }
};
</script>
