<template>
  <section class="vf-o-category-grid">
    <vf-a-heading
      level="4"
      class="category-section__sub_name sm:text-center mt-2"
      >{{ $t("elements.store.category.categoriesText") }}</vf-a-heading
    >
    <vf-m-row>
      <vf-m-col
        v-for="(value, index) in items"
        :key="index"
        xs="4"
        md="3"
        lg="2"
      >
        <vf-m-category-thumb :category="value" />
      </vf-m-col>
    </vf-m-row>
  </section>
</template>
<script lang="ts" setup>
defineProps({
  items: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>
