<template>
  <b-container>
    <slot></slot>
  </b-container>
</template>
<script>
import { BContainer } from "bootstrap-vue";
export default {
  components: {
    BContainer
  }
};
</script>
