<template>
  <section class="vf-l-m-product-image mb-4">
    <vf-m-skeleton height="500px"></vf-m-skeleton>
    <vf-m-row class="mt-3">
      <vf-m-col v-for="value in [1, 2, 3, 4]" :key="value" xs="12" md="3">
        <vf-m-skeleton
          width="100px"
          height="100px"
          class="mx-auto"
        ></vf-m-skeleton>
      </vf-m-col>
    </vf-m-row>
  </section>
</template>
<script>
export default {
  
};
</script>
