<template>
  <b-carousel class="mb-5" :interval="4000" controls indicators>
    <b-carousel-slide v-for="(item,i) in items" :key="i" :img-src="item"></b-carousel-slide>
  </b-carousel>
</template>
<script>
import BCarousel from "bootstrap-vue/es/components/carousel/carousel";
import BCarouselSlide from "bootstrap-vue/es/components/carousel/carousel-slide";
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
  }
};
</script>
