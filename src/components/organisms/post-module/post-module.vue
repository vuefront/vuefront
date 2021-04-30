<template>
  <div v-if="items.length > 0" class="vf-o-post-module">
    <vf-a-heading
      level="4"
      class="vf-o-post-module__title"
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