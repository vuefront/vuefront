<template>
  <section class="rating-section">
    <span
      v-for="ratingValue in [1, 2, 3, 4, 5]"
      :key="`${ratingValue}-${currentRating}`"
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
<script setup lang="ts">
import { mdiStar, mdiStarOutline } from "@mdi/js";
import { computed, ref } from "vue";

const props = defineProps({
  modelValue: {
    type: Number,
    default: () => 0,
  },
  color: {
    type: String,
    default: () => "#FFFF33",
  },
  readonly: {
    type: Boolean,
    default: () => false,
  },
});

let rating = ref(0);
let hover = ref(false);

const currentRating = computed(() => {
  return hover.value ? rating.value : props.modelValue;
});

function handleMouseOver(hoverRating: number) {
  if (!props.readonly) {
    rating.value = hoverRating;
    hover.value = true;
  }
}
function handleMouseOut() {
  if (!props.readonly) {
    hover.value = false;
  }
}
const emits = defineEmits(["update:modelValue"]);
function handleClick(rating: number) {
  if (!props.readonly) {
    emits("update:modelValue", rating);
  }
}
</script>
