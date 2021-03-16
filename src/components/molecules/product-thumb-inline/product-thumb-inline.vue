<template>
  <vf-m-media no-body>
    <vf-m-media-aside vertical-align="center" class="pl-3">
      <vf-a-image
        :lazy-src="imageLazy"
        :src="image"
        width-amp="80"
        height-amp="80"
        width="80"
      />
    </vf-m-media-aside>
    <vf-m-media-body class="pl-3">
      <div class="lh-100">
        <span class="text-dark font-bold mb-0">{{ product.name }}</span>
      </div>
      <span class="font-bold text-muted">{{ product.model }}</span>
      <span
        v-for="(value, index) in option"
        :key="index"
        class="font-bold text-muted"
      >
        <div>
          <span v-html="value.name"></span>:
          <span v-html="value.value"></span>
        </div>
      </span>
    </vf-m-media-body>
  </vf-m-media>
</template>
<script>
import placeholder from "vuefront/assets/img/placeholder.png";

export default {
  props: {
    product: {
      type: Object,
      default() {
        return null;
      },
    },
    option: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    image() {
      return this.product.image !== "" ? this.product.image : placeholder;
    },
    imageLazy() {
      return this.product.imageLazy !== ""
        ? this.product.imageLazy
        : placeholder;
    },
  },
};
</script>
