<template>
  <vf-a-link class="vf-m-logo inline-block" to="/">
    <vf-a-image
      :src="getLogo()"
      alt
      class="vf-m-logo__image"
      :width="$vuefront.images.logo.width"
      :width-amp="$vuefront.images.logo.width"
      :height-amp="$vuefront.images.logo.height"
    />
  </vf-a-link>
</template>
<script lang="ts" setup>
import { inject } from "vue";

const vuefront$ = inject<any>("$vuefront");

const getLogo = () => {
  if (typeof vuefront$.images.logo.image !== "undefined") {
    return vuefront$.images.logo.image;
  } else {
    return "https://vuefront.com/logo.png";
  }
};
</script>
