<template>
  <div v-if="items.length > 0" class="post-module-section mb-5">
    <vf-a-heading
      level="4"
      class="post-module-section__title sm:text-center mb-4"
    >
      <slot></slot>
    </vf-a-heading>
    <vf-o-post-grid
      class="post-module-section__items"
      :posts="items"
      :column="column"
    />
  </div>
</template>
<script>
export default {
  props: ["items", "column"],
};
</script>
