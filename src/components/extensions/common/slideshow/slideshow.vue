<template>
  <carousel class="vf-e-common-slideshow">
    <slide v-for="(item,i) in items" :key="i">
      <amp-img v-if="$vuefront.isAMP" :src="item" width="1110" height="370" />
    </slide>
  </carousel>
</template>
<script>
import Vue from "vue";
import { Carousel, Slide } from "vue-snap";

export default {
  components: {
    Carousel,
    Slide,
  },
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      active: 0,
    };
  },
};
</script>
