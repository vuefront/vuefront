<template>
  <div v-if="items.length > 0" class="vf-o-post-module">
    <vf-a-heading level="1" class="vf-o-post-module__title">
      <slot></slot>
    </vf-a-heading>
    <vf-o-post-grid
      class="post-module-section__items"
      :posts="items"
      :column="column"
    />
  </div>
</template>
<script lang="ts" setup>
defineProps({
  items: {
    type: Array,
    default() {
      return [];
    },
  },
  column: {
    type: Boolean,
    default() {
      return false;
    },
  },
});
</script>
