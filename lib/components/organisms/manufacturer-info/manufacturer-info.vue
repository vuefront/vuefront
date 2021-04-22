<template>
  <div class="manufacturer-section">
    <vf-a-heading
      level="1"
      class="manufacturer-section__name sm:text-center"
      tag="h1"
      >{{ manufacturer.name }}</vf-a-heading
    >
  </div>
</template>
<script>
export default {
  props: ["manufacturer"],
};
</script>
