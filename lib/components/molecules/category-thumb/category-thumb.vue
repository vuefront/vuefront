<template>
  <vf-a-link :to="url" class="mb-2 d-block vf-m-category-thumb">
    <vf-a-image
      :src="image"
      :lazy-src="imageLazy"
      class="mb-2"
      :width-amp="getWidth"
      :height-amp="getHeight"
      full-width
      fluid
    />
    <vf-a-heading level="6" class="text-sm-center">{{category.name}}</vf-a-heading>
  </vf-a-link>
</template>
<script>
import placeholder from "vuefront/assets/img/placeholder.png";

export default {
  props: ["category", "width", "height"],
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
    },
    getWidth() {
      let width = this.width;
      if (!this.width) {
        if (this.height) {
          width =
            (this.height * this.$vuefront.images.categoryThumb.width) /
            this.$vuefront.images.categoryThumb.height;
        } else {
          width = this.$vuefront.images.categoryThumb.width;
        }
      }
      return width;
    },
    getHeight() {
      let height = this.height;
      if (!this.height) {
        if (this.width) {
          height =
            (this.width * this.$vuefront.images.categoryThumb.height) /
            this.$vuefront.images.categoryThumb.width;
        } else {
          height = this.$vuefront.images.categoryThumb.height;
        }
      }
      return height;
    }
  }
};
</script>
