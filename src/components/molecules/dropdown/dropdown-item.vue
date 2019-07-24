<template>
  <b-dropdown-item>
    <slot></slot>
  </b-dropdown-item>
</template>
<script>
import { BDropdownItem } from "bootstrap-vue";
export default {
  components: {
    BDropdownItem
  }
};
</script>
