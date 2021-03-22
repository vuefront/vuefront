<template>
  <div class="vf-e-common-slideshow hidden md:block">
    <vf-a-image
      :src="currentSlide"
      :width-amp="1110"
      :height-amp="370"
    ></vf-a-image>
  </div>
  <!-- <b-carousel class="vf-e-common-slideshow" v-model="active" :interval="4000" controls indicators>
    <b-carousel-slide v-for="(item,i) in items" :key="i" :img-src="item">
      <template #img v-if="$vuefront.isAMP">
        <amp-img :src="item" width="1110" height="370" />
      </template>
    </b-carousel-slide>
  </b-carousel> -->
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      active: 0,
    };
  },
  computed: {
    currentSlide() {
      return this.items[this.active];
    },
  },
  mounted() {
    setTimeout(() => {
      setInterval(() => {
        console.log("change");
        if (this.active < this.items.length - 1) {
          this.active++;
        } else {
          this.active = 0;
        }
      }, 4000);
    }, 10000);
  },
};
</script>
