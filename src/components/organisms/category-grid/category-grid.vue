<template>
  <section class="vf-o-category-grid">
    <vf-a-heading
      level="4"
      class="category-section__sub_name text-sm-center mt-2"
    >{{$t('elements.store.category.categoriesText')}}</vf-a-heading>
    <vf-m-row>
      <vf-m-col v-for="(value, index) in items" :key="index" sm="4" md="2">
        <vf-m-category-thumb :category="value" />
      </vf-m-col>
    </vf-m-row>
  </section>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>