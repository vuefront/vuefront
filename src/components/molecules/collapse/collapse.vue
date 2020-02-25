<template>
  <b-collapse class="vf-m-collapse" :id="id">
    <slot></slot>
  </b-collapse>
</template>
<script>
import { BCollapse } from "bootstrap-vue";
export default {
  components: {
    BCollapse
  },
  props: {
    id: {
      type: String,
      default() {
        return "";
      }
    }
  }
};
</script>
