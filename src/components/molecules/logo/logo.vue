<template>
  <vf-a-link to="/">
    <vf-a-amp-image
      v-if="$vuefront.isAMP"
      :src="logo"
      width="180"
      height="40"
      class="nav-section__logo"
    />
    <vf-a-image v-else :src="logo" alt class="nav-section__logo" height="40" />
  </vf-a-link>
</template>
<script>
export default {
  computed: {
    logo() {
      if (typeof this.$vuefront.options.logo !== "undefined") {
        return this.$vuefront.options.logo;
      } else {
        return "";
      }
    }
  }
};
</script>
