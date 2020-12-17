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
        :icon="rating <= currentRating ? mdiStar : mdiStarOutline "
        :style="{color: color}"
        size="22"
      />
    </span>
  </section>
</template>
<script>
import isUndefined from "lodash/isUndefined";
import {mdiStar, mdiStarOutline} from '@mdi/js'
export default {
  props: ["value", "color", "readonly"],
  data() {
    return {
      rating: 0,
      hover: false,
      mdiStar,
      mdiStarOutline
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
