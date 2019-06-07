<template>
  <b-link to="/">
    <amp-img v-if="$vuefront.isAMP" :src="logo" width="180" height="40" class="nav-section__logo"/>
    <img v-else :src="logo" alt class="nav-section__logo">
  </b-link>
</template>
<script>
import { BLink } from "bootstrap-vue";
export default {
  components: { BLink },
  props: ["logo"]
};
</script>
