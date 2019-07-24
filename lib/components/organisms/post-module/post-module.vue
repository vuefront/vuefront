<template>
  <div class="post-module-section mb-5" v-if="items.length > 0">
    <vf-a-heading level="6" class="post-module-section__title text-sm-center mb-5">
      <slot></slot>
    </vf-a-heading>
    <vf-o-post-grid class="post-module-section__items" :posts="items" :column="column" />
  </div>
</template>
<script>
export default {
  props: ["items", "column"]
};
</script>
