<template>
  <section class="rating-section">
    <span
      v-for="(rating) in [1,2,3,4,5]"
      @mouseover="handleMouseOver(rating)"
      @mouseout="handleMouseOut"
      @click="handleClick(rating)"
      :key="rating"
      style="cursor:pointer;"
    >
      <vf-a-icon
        :icon="rating <= currentRating ? 'star-outline' : 'star'"
        :style="{color: color}"
        style="width: 1.125em;"
      />
    </span>
  </section>
</template>
<script>
import { isUndefined } from "lodash";
export default {
  props: ["value", "color", "readonly"],
  data() {
    return {
      rating: 0,
      hover: false
    };
  },
  computed: {
    currentRating() {
      return this.hover ? this.rating : this.value;
    }
  },
  methods: {
    handleMouseOver(rating) {
      if (isUndefined(this.readonly)) {
        this.rating = rating;
        this.hover = true;
      }
    },
    handleMouseOut() {
      if (isUndefined(this.readonly)) {
        this.hover = false;
      }
    },
    handleClick(rating) {
      if (isUndefined(this.readonly)) {
        this.$emit("input", rating);
      }
    }
  }
};
</script>
