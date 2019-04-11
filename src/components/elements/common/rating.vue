<template>
  <section class="rating-section">
    <vf-icon
      v-for="(rating) in [1,2,3,4,5]"
      :icon="rating <= value ? 'star' : ['far', 'star']"
      :key="rating"
      :style="{color: color}"
      style="width: 1.125em;"
    />
  </section>
</template>
<script>
export default {
  props: ["value", "color", "readonly"]
};
</script>
