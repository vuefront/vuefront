<template>
  <div class="post-module-section mb-5" v-if="items.length > 0">
    <div class="post-module-section__title text-sm-center mb-5 h6">
      <slot></slot>
    </div>
    <vf-posts-grid class="post-module-section__items" :posts="items" :column="column"/>
  </div>
</template>
<script>
export default {
  props: ["items", "column"]
};
</script>
