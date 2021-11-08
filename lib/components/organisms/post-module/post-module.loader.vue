<template>
  <div class="mb-5">
    <div class="mb-5 h6">
      <vf-m-skeleton
        width="150px"
        height="20px"
        class="mx-auto"
      ></vf-m-skeleton>
    </div>
    <vf-l-o-post-grid :column="column" />
  </div>
</template>
<script lang="ts" setup>
defineProps({
  column: {
    type: Boolean,
    default() {
      return false;
    },
  },
});
</script>
