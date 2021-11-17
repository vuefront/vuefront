<template>
    <div class="vf-m-review">
        <div class="vf-m-review__date">
            {{ review.created_at }}
        </div>
        <vf-a-heading
            level="5"
            class="vf-m-review__author reviews-section__author"
            >{{ review.author }}</vf-a-heading
        >
        <div class="vf-m-review__content">{{ review.content }}</div>
        <vf-m-rating
            class="vf-m-review__rating"
            :model-value="review.rating"
            readonly
            :size="18"
        ></vf-m-rating>
    </div>
</template>
<script lang="ts" setup>
defineProps({
    review: {
        type: Object,
        default: () => null,
    },
});
</script>
