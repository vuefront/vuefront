<template>
  <vf-m-media no-body>
    <vf-m-media-aside vertical-align="center" class="pl-3">
      <vf-a-image :lazy-src="image" :src="imageLazy" width="80" height="80" />
    </vf-m-media-aside>
    <vf-m-media-body class="pl-3">
      <div class="lh-100">
        <span class="text-dark font-weight-bold mb-0">{{product.name}}</span>
      </div>
      <span class="font-weight-bold text-muted">{{product.model}}</span>
      <span class="font-weight-bold text-muted" v-for="(value, index) in option" :key="index">
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
      }
    },
    option: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    image() {
      return this.product.image !== "" ? this.product.image : placeholder;
    },
    imageLazy() {
      return this.product.imageLazy !== ""
        ? this.product.imageLazy
        : placeholder;
    }
  }
};
</script>
