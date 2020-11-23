<template>
  <t-dropdown class="t-dropdown" text="Menu">
    <template slot="button">
      <slot name="button-content"></slot>
    </template>
    <div class="py-1 rounded-md shadow-xs">
      <slot></slot>
    </div>
  </t-dropdown>
</template>
<script>
export default {
  props: {
    right: {
      type: Boolean,
      default() {
        return null;
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