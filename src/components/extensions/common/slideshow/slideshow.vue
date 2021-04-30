<template>
  <div class="vf-e-common-slideshow hidden md:block">
    <vf-a-image
      :src="currentSlide"
      :width-amp="1110"
      :height-amp="370"
    ></vf-a-image>
  </div>
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