<template>
  <b-carousel v-model="active" class="mb-5" :interval="4000" controls indicators>
    <b-carousel-slide v-for="(item,i) in items" :key="i" :img-src="item">
      <template #img v-if="$vuefront.isAMP">
        <amp-img
          :src="item"
          width="1110"
          height="370"
        />
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>
<script>
import { BCarousel, BCarouselSlide } from "bootstrap-vue";
export default {
  components: {
    BCarousel,
    BCarouselSlide
  },
  props: {
    items: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>
