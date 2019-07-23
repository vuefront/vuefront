<template>
  <vf-a-link :to="url" class="mb-2 d-block">
    <vf-a-amp-image
      v-if="$vuefront.isAMP"
      :src="image"
      width="113"
      height="80"
      layout="responsive"
      class="mb-2"
    />
    <vf-a-image v-else :src="imageLazy" :lazy-src="image" class="mb-2" full-width fluid />
    <vf-a-heading level="6" class="text-sm-center">{{category.name}}</vf-a-heading>
  </vf-a-link>
</template>
<script>
import placeholder from "vuefront/assets/img/placeholder.png";

export default {
  props: ["category"],
  computed: {
    url() {
      if (this.category.keyword && this.category.keyword !== "") {
        return "/" + this.category.keyword;
      } else {
        return `/store/category/${this.category.id}`;
      }
    },
    image() {
      return this.category.image !== "" ? this.category.image : placeholder;
    },
    imageLazy() {
      return this.category.imageLazy !== ""
        ? this.category.imageLazy
        : placeholder;
    }
  }
};
</script>
