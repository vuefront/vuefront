<template>
  <v-carousel class="mb-5" hide-delimiters>
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item"></v-carousel-item>
  </v-carousel>
</template>
<script>
import {VCarousel, VCarouselItem} from 'vuetify/lib'
export default {
  name: "vfDefaultModulesSlideshow",
  components: {
    VCarousel,
    VCarouselItem
  },
  props: {
    items: {
      type: Array,
      default: []
    }
  }
};
</script>
