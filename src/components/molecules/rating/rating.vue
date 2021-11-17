<template>
    <section class="vf-m-rating">
        <span
            v-for="ratingValue in [1, 2, 3, 4, 5]"
            :key="`${ratingValue}-${currentRating}`"
            class="vf-m-rating__item"
            :class="{ '--active': ratingValue <= currentRating }"
            @mouseover="handleMouseOver(ratingValue)"
            @mouseout="handleMouseOut"
            @click="handleClick(ratingValue)"
        >
            <vf-a-icon
                :icon="ratingValue <= currentRating ? mdiStar : mdiStarOutline"
                :style="{ color: color }"
                :size="size"
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
        default: () => "#6AA6C4",
    },
    readonly: {
        type: Boolean,
        default: () => false,
    },
    size: {
        type: Number,
        default: () => 13,
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
