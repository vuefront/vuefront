<template>
  <b-link to="/">
    <img :src="logo" alt class="nav-section__logo">
  </b-link>
</template>
<script>
import { BLink } from "bootstrap-vue/es/components";
export default {
  components: { BLink },
  props: ["logo"]
};
</script>
