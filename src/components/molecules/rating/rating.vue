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
<script setup lang="ts">
import isUndefined from "lodash-es/isUndefined";
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

let rating = ref(0),
  hover = ref(false);

const currentRating = computed(() => {
  return hover.value ? rating : props.modelValue;
});

function handleMouseOver(hoverRating: number) {
  if (isUndefined(props.readonly)) {
    rating.value = hoverRating;
    hover.value = true;
  }
}
function handleMouseOut() {
  if (isUndefined(props.readonly)) {
    hover.value = false;
  }
}
const emits = defineEmits(["update:modelValue"]);
function handleClick(rating: number) {
  if (isUndefined(props.readonly)) {
    emits("update:modelValue", rating);
  }
}
</script>
