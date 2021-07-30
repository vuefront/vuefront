<template>
  <div class="vf-l-o-product-module mb-5">
    <div class="mb-5 h6">
      <vf-m-skeleton
        width="150px"
        height="20px"
        class="mx-auto"
      ></vf-m-skeleton>
    </div>
    <vf-l-o-product-grid :column="column" />
  </div>
</template>
<script>
export default {
  props: ["column"],
};
</script>
