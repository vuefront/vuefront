<template>
  <vf-a-link class="vf-m-logo" to="/">
    <vf-a-amp-image
      v-if="$vuefront.isAMP"
      :src="getLogo"
      :width="$vuefront.options.image.logo.width"
      :height="$vuefront.options.image.logo.height"
      class="vf-m-logo__image"
    />
    <vf-a-image
      v-else
      :src="getLogo"
      alt
      class="vf-m-logo__image"
      :height="$vuefront.options.image.logo.height"
    />
  </vf-a-link>
</template>
<script>
export default {
  computed: {
    getLogo() {
      if (typeof this.$vuefront.options.logo !== "undefined") {
        return this.$vuefront.options.logo;
      } else {
        return "https://vuefront.com/logo.png";
      }
    }
  }
};
</script>