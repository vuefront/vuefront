<template>
  <b-dropdown-item v-on="$listeners" :to="to">
    <slot></slot>
  </b-dropdown-item>
</template>
<script>
import { BDropdownItem } from "bootstrap-vue";
export default {
  components: {
    BDropdownItem
  },
  props: {
    to: {
      type: String,
      default() {
        return null;
      }
    }
  }
};
</script>
