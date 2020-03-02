<template>
  <vf-a-link class="vf-m-logo" to="/">
    <vf-a-amp-image
      v-if="$vuefront.isAMP"
      :src="getLogo"
      :width="$vuefront.images.logo.width"
      :height="$vuefront.images.logo.height"
      class="vf-m-logo__image"
    />
    <vf-a-image
      v-else
      :src="getLogo"
      alt
      class="vf-m-logo__image"
      :height="$vuefront.images.logo.height"
    />
  </vf-a-link>
</template>
<script>
export default {
  computed: {
    getLogo() {
      if (typeof this.$vuefront.images.logo.image !== "undefined") {
        return this.$vuefront.images.logo.image;
      } else {
        return "https://vuefront.com/logo.png";
      }
    }
  }
};
</script>