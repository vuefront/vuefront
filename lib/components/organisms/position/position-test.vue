<template>
  <div
    class="
      vf-o-position
      border-primary border
      p-3
      flex
      align-middle
      justify-center
    "
    :class="`vf-o-position--${name}`"
  >
    <vf-a-heading level="3" class="text-primary"
      >Position {{ name }}</vf-a-heading
    >
  </div>
</template>
<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    default() {
      return null;
    },
  },
});
</script>
