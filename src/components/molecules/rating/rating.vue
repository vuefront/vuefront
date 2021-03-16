<template>
  <section class="rating-section">
    <span
      v-for="ratingValue in [1, 2, 3, 4, 5]"
      :key="ratingValue"
      style="cursor: pointer"
      @mouseover="handleMouseOver(ratingValue)"
      @mouseout="handleMouseOut"
      @click="handleClick(ratingValue)"
    >
      <vf-a-icon
        :icon="ratingValue <= currentRating ? mdiStar : mdiStarOutline"
        :style="{ color: color }"
        size="22"
      />
    </span>
  </section>
</template>
<script>
import isUndefined from "lodash/isUndefined";
import { mdiStar, mdiStarOutline } from "@mdi/js";
export default {
  props: ["value", "color", "readonly"],
  data() {
    return {
      rating: 0,
      hover: false,
      mdiStar,
      mdiStarOutline,
    };
  },
  computed: {
    currentRating() {
      return this.hover ? this.rating : this.value;
    },
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
    },
  },
};
</script>
