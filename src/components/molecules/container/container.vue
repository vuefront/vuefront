<template>
  <b-container :fluid="fluid">
    <slot></slot>
  </b-container>
</template>
<script>
import { BContainer } from "bootstrap-vue";
export default {
  components: {
    BContainer
  },
  props: ["fluid"]
};
</script>
