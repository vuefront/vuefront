<template>
  <b-list-group-item class="vf-m-list-group-item" :active="active" :to="to" v-on="$listeners">
    <slot></slot>
  </b-list-group-item>
</template>
<script>
import { BListGroupItem } from "bootstrap-vue";

export default {
  components: {
    BListGroupItem
  },
  props: {
    active: {
      type: Boolean,
      default() {
        return false;
      }
    },
    to: {
      type: String,
      default() {
        return null;
      }
    }
  }
};
</script>