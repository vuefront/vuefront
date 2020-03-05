<template>
  <vf-a-link class="vf-m-logo d-block" to="/">
    <vf-a-image
      :src="getLogo"
      alt
      class="vf-m-logo__image"
      :width="$vuefront.images.logo.width"
      :width-amp="$vuefront.images.logo.width"
      :height-amp="$vuefront.images.logo.height"
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